import { s3Client, PutObjectCommand } from "@/lib/s3Client";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const params = {
      Bucket: "diagnoslab", // Your S3 bucket name
      Key: file.name,
      Body: buffer,
      ContentType: file.type,
    };

    await s3Client.send(new PutObjectCommand(params));

    // Generate the URL for the uploaded file
    const fileUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;

    return new Response(
      JSON.stringify({ message: "File uploaded successfully", url: fileUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response("Error uploading file", { status: 500 });
  }
}
