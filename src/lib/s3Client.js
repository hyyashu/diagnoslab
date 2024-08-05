import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "ap-south-1", // Replace with your region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "AKIAQE43KLY5NOJPZE52",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export { s3Client, PutObjectCommand };
