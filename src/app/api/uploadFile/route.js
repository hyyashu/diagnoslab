import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Perform the file upload operation
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        return {
          allowedContentTypes: [
            "application/pdf", // PDF
            "image/jpeg", // JPEG
            "image/png", // PNG
            "image/gif", // GIF
            "application/msword", // DOC
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
          ],
          maxSize: 10 * 1024 * 1024, // 10MB
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log("Blob upload completed:", blob, tokenPayload);
        // Implement post-upload actions, e.g., updating the database
        // Example: await updateDatabase(blob.url);
      },
    });

    // Return the response from Vercel Blob
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Error in uploadFile API:", error);
    // Return an error response with a status code of 500
    return NextResponse.json(
      { error: error.message },
      { status: 500 } // Internal Server Error
    );
  }
}
