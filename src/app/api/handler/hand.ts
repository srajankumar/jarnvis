import { NextResponse, NextRequest } from "next/server";

const token = process.env.NEXT_PUBLIC_API_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    console.log("Request Text:", text);
    const fetch = await import("node-fetch");
    const apiResponse = await fetch.default(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: text }),
      }
    );

    const responseData = await apiResponse.json();
    console.log("Response Data:", responseData);
    return NextResponse.json(responseData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
