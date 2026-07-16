import React, { useState } from "react";
import { sendMessage } from "../geminiService";

function GeminiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    // Ipakita agad yung tinype ng user at lagyan ng "Typing..." para sa bot
    setMessages((prev) => [...prev, { user: userMessage, bot: "Typing..." }]);
    setInput("");
    setIsLoading(true);

    try {
      // Dito tatawagin yung geminiService.js mo
      const reply = await sendMessage(userMessage);

      // Kapag sumagot na, i-update yung "Typing..." nung huling message
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].bot = reply;
        return updatedMessages;
      });
    } catch (error) {
      console.error("Gemini API Error:", error);
      // Kapag nagka-error (e.g. walang API key)
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].bot =
          "Error: Hindi maka-connect sa Gemini API. Paki-check ang console.";
        return updatedMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Para pwede mag-send gamit ang "Enter" key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#ffe6f0",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        width: "300px", // Nilagyan ko ng fixed width para mas maayos tignan
        zIndex: 1000, // Para laging nasa ibabaw ng ibang elements
      }}
    >
      <h3 style={{ marginTop: 0 }}>💬 Gemini Chatbot</h3>
      <div
        style={{ maxHeight: "250px", overflowY: "auto", marginBottom: "10px" }}
      >
        {messages.length === 0 && (
          <p style={{ color: "#666", fontSize: "14px" }}>
            Hi! Magtanong ka na sa akin.
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: "10px", fontSize: "14px" }}>
            <p style={{ margin: "2px 0", color: "#000" }}>
              <b>You:</b> {m.user}
            </p>
            <p
              style={{
                margin: "2px 0",
                color: m.bot.includes("Error") ? "red" : "#333",
              }}
            >
              <b>Bot:</b> <i>{m.bot}</i>
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={isLoading}
          style={{
            flex: 1,
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          style={{
            padding: "5px 10px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default GeminiChat;
