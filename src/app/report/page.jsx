"use client";
import React, { useState } from "react";
import PdfViewer from "@/components/pdf";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showErrorToast, showSuccessToast } from "@/components/Toast";
import Loader from "@/components/ui/loader";
import { Loader2 } from "lucide-react";
const clientList = [
  { id: 1, name: "Narayana Labs", code: "C000020079" },
  { id: 2, name: "Client B", code: "002" },
  { id: 3, name: "Client C", code: "003" },
];

const Report = () => {
  const [accid, setAccid] = useState("");
  const [selectedClientCode, setSelectedClientCode] = useState("");
  const [base64String, setBase64String] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    setSelectedClientCode(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `/api/getReport?accid=${accid}&clientid=${selectedClientCode}`
      );

      const result = response.data.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(result, "text/xml");

      const reportResult = xmlDoc.getElementsByTagName(
        "GetAccReportDResult"
      )[0];
      // Check if report is not found (nil attribute is true)
      if (
        reportResult.getAttributeNS(
          "http://www.w3.org/2001/XMLSchema-instance",
          "nil"
        ) === "true"
      ) {
        showErrorToast("Report Not Found!");
        setBase64String("");
      } else {
        // If report is found, get the base64 string
        const base64 = reportResult.childNodes[0].nodeValue;
        showSuccessToast("Report Found!");
        setBase64String(base64);
      }
    } catch (error) {
      console.error("Error fetching the report:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    if (!base64String) return;

    // Create a Blob from the base64 string
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // Open a new window with the Blob URL and print
    const printWindow = window.open(url, "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
        URL.revokeObjectURL(url); // Clean up the URL object
      };
    }
  };

  return (
    <div>
      <div className="max-w-md p-4 mx-auto mt-2 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Download Report</h1>
        <Loader
          visible={loading}
          height={50}
          width={50}
          ariaLabel="Submitting form"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="accid">Accession Id or LR No:</Label>
            <Input
              id="accid"
              type="text"
              value={accid}
              onChange={(e) => setAccid(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div className="flex p-2">
              <Select onValueChange={handleChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  {clientList.map((client) => (
                    <SelectItem key={client.id} value={client.code}>
                      {client.name} (Code: {client.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* {selectedClientCode && (
              <p>Selected Client Code: {selectedClientCode}</p>
            )} */}
              <Input
                id="clientCode"
                type="text"
                value={selectedClientCode}
                onChange={(e) => setSelectedClientCode(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="w-full mt-4">
            {loading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>
      <div>
        {base64String && (
          <div className="mt-6">
            <Button onClick={handlePrint} className="w-full" disabled={loading}>
              Print PDF
            </Button>
            <PdfViewer base64String={base64String} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
