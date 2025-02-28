import { NextResponse } from "next/server";

// Update the Flask API URL to the deployed backend URL
const FLASK_API_URL = "https://car-price-prediction-9fiz.onrender.com/predict";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Extract the request body

    // Send the POST request to the Flask API
    const response = await fetch(FLASK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // Forward the request body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response from the Flask backend
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
