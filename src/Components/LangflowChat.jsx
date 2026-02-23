import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function LangflowChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // fix initial state
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:7860/api/v1/run/b42291fe-1be4-4253-94e3-52305dcae845",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify({
            input_value: input,
            output_type: "chat",
            input_type: "chat",
          }),
        }
      );

      const data = await response.json();

      // ----- SAFELY EXTRACT BOT TEXT FROM LANGFLOW RESPONSE -----
      // Langflow responses are usually nested under: outputs[0].data or outputs[0].outputs
      let botText = "Oops! Could not generate a response.";

      // Try multiple paths to find text
      if (data?.outputs?.[0]?.data?.text) {
        botText = data.outputs[0].data.text;
      } else if (
        Array.isArray(data?.outputs?.[0]?.outputs) &&
        data.outputs[0].outputs[0]?.data?.text
      ) {
        botText = data.outputs[0].outputs[0].data.text;
      }

      const botMsg = { role: "bot", text: botText };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg = {
        role: "bot",
        text: "Oops! Something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed bottom-32 right-6 md:right-12 lg:right-24 xl:right-40 w-[320px] md:w-[400px] h-[500px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent1 rounded-full animate-pulse" />
              <span className="font-medium text-text-main1 text-sm uppercase tracking-widest">
                AI Agent
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-main1/50 hover:text-text-main1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-background1/50"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent1 text-black rounded-tr-none font-medium"
                      : "bg-white/5 text-text-main1 rounded-tl-none border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-accent1/50 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-accent1/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-accent1/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-4 bg-black border-t border-white/10 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-text-main1 focus:outline-none focus:border-accent1/50 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-accent1 p-2.5 rounded-xl text-black hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center ${
          isOpen ? "bg-white/10 text-white rotate-90" : "bg-accent1 text-black hover:scale-110"
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}