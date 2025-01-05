import { NextResponse } from "next/server";

const FLASK_API_URL = 'http://localhost:5000/predict'; // Flask API URL

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Prediction error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch prediction" }),
      { status: 500 }
    );
  }
}