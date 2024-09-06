"use client";
import React, { useState } from "react";
import PdfViewer from "@/components/pdf";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Report = () => {
  const [accid, setAccid] = useState("");
  const [base64String, setBase64String] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https:/diagnoslab.in/getReport?accid=${accid}`
      );

      const result = response.data.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(result, "text/xml");

      const base64 = xmlDoc.getElementsByTagName("GetAccReportDResult")[0]
        .childNodes[0].nodeValue;

      setBase64String(base64);
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
    <div className="max-w-md p-4 mx-auto mt-2 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Download Report</h1>
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
        </div>
        <Button type="submit" disabled={loading} className="w-full mt-4">
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>

      {base64String && (
        <div className="mt-6">
          <Button
            onClick={handlePrint}
            className="w-full mt-4"
            disabled={loading}
          >
            Print PDF
          </Button>
          <PdfViewer base64String={base64String} />
        </div>
      )}
    </div>
  );
};

export default Report;
