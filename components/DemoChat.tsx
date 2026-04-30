"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { motion } from "framer-motion";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface DemoChatProps {
  title: string;
  systemPrompt: string;
  openingMessage: string;
  quickReplies: string[];
}

export default function DemoChat({ title, systemPrompt, openingMessage, quickReplies }: DemoChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: openingMessage },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.role !== 'system'),
          systemPrompt,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "API error");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Izvinite, trenutno imam tehničkih poteškoća.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ GREŠKA: ${errorMessage}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-brand-dark overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Banner */}
      <div className="bg-brand-gold text-brand-dark py-2 px-4 text-center font-bold text-sm z-20 shadow-md relative">
        ⚡ DEMO — Ovo je primjer kako AI radi za vašu kliniku
      </div>

      {/* Header */}
      <div className="glass px-6 py-4 flex items-center justify-between z-20 relative border-b border-brand-gray/50">
        <div className="flex items-center gap-4">
          <Link href="/#demo" className="text-brand-gray-light hover:text-brand-gold transition-colors p-2 rounded-full hover:bg-brand-gray/30">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldDark flex items-center justify-center text-brand-dark font-bold font-display text-xl shadow-[0_0_15px_rgba(201,168,76,0.3)]">
              AI
            </div>
            <div>
              <h1 className="text-white font-display font-bold text-lg leading-tight">{title}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-brand-gray-light text-xs font-medium uppercase tracking-wider">Povezan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 relative z-10 custom-scrollbar">
        {messages.map((msg, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} relative z-10 w-full`}
          >
            <div
              className={`max-w-[85%] md:max-w-[60%] rounded-2xl p-4 md:p-5 text-sm md:text-base leading-relaxed shadow-lg ${
                msg.role === "user"
                  ? "bg-gradient-to-br from-brand-gray to-brand-darker border border-brand-gold/20 text-white rounded-br-sm"
                  : "glass-card text-brand-light border border-brand-gray/50 rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start relative z-10"
          >
            <div className="glass-card text-brand-light rounded-2xl rounded-bl-sm p-5 border border-brand-gray/50 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-gold rounded-full typing-dot"></span>
              <span className="w-2.5 h-2.5 bg-brand-gold rounded-full typing-dot"></span>
              <span className="w-2.5 h-2.5 bg-brand-gold rounded-full typing-dot"></span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 md:px-8 py-4 flex gap-3 overflow-x-auto whitespace-nowrap z-20 relative hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {quickReplies.map((reply, i) => (
          <button
            key={i}
            onClick={() => handleSend(reply)}
            className="glass border border-brand-gray/50 text-brand-light px-5 py-2.5 rounded-full text-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300 flex-shrink-0 font-medium hover:shadow-[0_0_15px_rgba(201,168,76,0.15)] hover:-translate-y-0.5"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="glass p-4 md:p-6 z-20 relative border-t border-brand-gray/50">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            placeholder="Vaša poruka..."
            className="flex-1 bg-brand-darker/50 border border-brand-gray/50 text-white rounded-2xl px-6 py-4 text-base focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-gray-light/50"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isLoading}
            className="bg-brand-gold w-14 h-14 rounded-2xl flex items-center justify-center text-brand-dark hover:bg-brand-goldHover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-[0_0_20px_rgba(201,168,76,0.2)]"
          >
            <Send className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
