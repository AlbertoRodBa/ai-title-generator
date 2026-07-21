import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { description, type } = await request.json();

    const prompt = `
      Generate 3 engaging ${type} titles.

      Content:
      ${description}

      Return only the titles, one per line.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    const titles = text
      .split("\n")
      .map((title) => title.replace(/^\d+\.\s*/, "").trim())
      .filter(Boolean);

    return NextResponse.json({ titles });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate titles." },
      { status: 500 }
    );
  }
}