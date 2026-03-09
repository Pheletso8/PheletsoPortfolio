'use client'
import React, { useState, useEffect, useRef } from "react";
import { X, Send, RefreshCw, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Required for LaTeX styling

export default function LangflowChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
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
      setMessages((prev) => [...prev, { role: "error", text: "**Error:** Connection issue. Check your API." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[92vw] sm:w-96 h-[60vh] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isLoading ? "bg-cyan-400 animate-pulse" : "bg-green-500"}`} />
                <span className="font-bold text-white text-[10px] uppercase tracking-widest opacity-80">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors"><X size={18} /></button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.length === 0 && <div className="text-center pt-10 text-white/20 text-xs uppercase tracking-[0.2em]">Systems Ready</div>}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-2xl max-w-[90%] text-sm prose prose-invert overflow-x-auto ${
                    msg.role === "user" 
                      ? "bg-cyan-600 text-white font-medium shadow-lg shadow-cyan-900/20" 
                      : "bg-white/10 text-white/90 border border-white/10"
                  }`}>
                    <ReactMarkdown 
                      remarkPlugins={[remarkMath]} 
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        // Custom styling for specific markdown elements
                        strong: ({node, ...props}) => <span className="text-cyan-400 font-bold" {...props} />,
                        code: ({node, inline, ...props}) => 
                          inline 
                            ? <code className="bg-white/20 px-1 rounded text-cyan-300" {...props} />
                            : <pre className="bg-black/50 p-2 rounded-lg border border-white/5 my-2" {...props} />
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/10 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={sendMessage} className="p-4 border-t border-white/10 flex gap-2 bg-white/5">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type a formula or question..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all" 
              />
              <button type="submit" disabled={isLoading} className="bg-cyan-500 hover:bg-cyan-400 p-2 rounded-xl text-black transition-colors disabled:opacity-50">
                {isLoading ? <RefreshCw size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-cyan-500 text-black rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} strokeWidth={2.5} /> : <MessageSquare size={26} />}
      </motion.button>
    </div>
  );
}
