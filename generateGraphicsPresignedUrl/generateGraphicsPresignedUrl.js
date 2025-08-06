const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3 = new S3Client({ region: "us-east-2" });
const BUCKET_NAME = "rendertrack-beats"; // public bucket for images

exports.handler = async (event) => {
  const queryParams = event.queryStringParameters || {};
  const key = queryParams.key;

  if (!key || !key.startsWith("RenderForge/graphics/")) {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Invalid or missing key parameter" }),
    };
  }

  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 }); // 1 hour

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ url: signedUrl }),
    };
  } catch (error) {
    console.error("Presigned URL error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Failed to generate URL" }),
    };
  }
};
