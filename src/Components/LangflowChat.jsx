'use client'
import React, { useState, useEffect, useRef } from "react";
import { X, Send, RefreshCw, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LangflowChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isOpen, isLoading]);

  const sendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botText = data.reply || data.message || data.content || data.text;

      setMessages((prev) => [...prev, { role: "bot", text: botText || "No response received" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "error", text: "Connection issue. Check your API." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 lg:right-10 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[92vw] sm:w-md md:w-96 lg:w-md h-[60vh] md:h-[48vh] max-h-[70vh] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isLoading ? "bg-accent1 animate-pulse" : "bg-green-500"}`} />
                <span className="font-medium text-white text-[10px] uppercase tracking-widest opacity-80">AI Agent Active</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white"><X size={18} /></button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && <div className="text-center pt-10 text-white/20 text-xs uppercase tracking-[0.2em]">Systems Ready</div>}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.role === "user" ? "bg-accent1 text-black font-medium" : "bg-white/5 text-white/90 border border-white/10"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-4 border-t border-white/10 flex gap-2">
              <input aria-label="Chat input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-accent1/50" />
              <button aria-label="Send message" type="submit" className="bg-accent1 p-2 rounded-xl text-black">
                {isLoading ? <RefreshCw size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat trigger button - Swaps between MessageSquare and X */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 md:w-16 md:h-16 cursor-pointer group"
      >
        <div className="absolute inset-0 bg-accent1/10 blur-2xl rounded-full group-hover:bg-accent1/20 transition-all duration-500" />
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-accent1 text-black rounded-full shadow-xl">
          {isOpen ? (
            <X size={28} strokeWidth={2.5} />
          ) : (
            <MessageSquare size={24} />
          )}
        </div>
      </motion.div>
    </div>
  );
}