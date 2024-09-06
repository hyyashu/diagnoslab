import React, { useEffect, useState, useCallback } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = ({ base64String }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  // Convert base64 string to Blob
  const convertBase64ToBlob = useCallback((base64, contentType) => {
    const byteCharacters = atob(base64);
    const byteNumbers = Array.from(byteCharacters, (char) =>
      char.charCodeAt(0)
    );
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }, []);

  useEffect(() => {
    if (base64String) {
      const pdfBlob = convertBase64ToBlob(base64String, "application/pdf");
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);

      // Cleanup to avoid memory leaks
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [base64String, convertBase64ToBlob]);

  return (
    <div>
      {pdfUrl ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default PdfViewer;
