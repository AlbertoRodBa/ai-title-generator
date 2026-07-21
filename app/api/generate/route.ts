import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const model = process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite";

export async function POST(request: Request) {
  try {
    const { description, type } = await request.json();

    if (!description || !type) {
      return NextResponse.json(
        { error: "Missing description or content type." },
        { status: 400 }
      );
    }

    const prompt = `
Generate 3 engaging ${type} titles.

Content:
${description}

Return only the titles, one per line.
`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    const text = response.text ?? "";

    const titles = text
      .split("\n")
      .map((title) => title.replace(/^\d+\.\s*/, "").trim())
      .filter(Boolean);

    return NextResponse.json({ titles });

  } catch (error) {
    console.error("Gemini API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong with Gemini API.",
      },
      { status: 500 }
    );
  }
}