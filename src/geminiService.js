import { GoogleGenerativeAI } from "@google/generative-ai";

// Kunin ang API key mula sa .env file
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function sendMessage(message) {
  try {
    // Pinalitan natin ng gemini-1.5-flash dahil ito ang latest at pinakamabilis
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    console.error("Error sa geminiService:", error);
    throw error; // Ipapasa natin yung error sa GeminiChat.jsx para ma-display
  }
}
