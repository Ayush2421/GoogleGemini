

import { GoogleGenAI } from "@google/genai";

const APIKey = "AIzaSyD8KPbnX5IztPyPDKuFigBH0Ds0Fd_VlUM"
const ai = new GoogleGenAI({ apiKey: APIKey });

export default async function GeminiConfig(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt ,
  });
  return response.text;
}
