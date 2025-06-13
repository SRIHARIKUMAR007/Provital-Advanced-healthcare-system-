"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send, X, Minimize2, Maximize2 } from "lucide-react"
import "./ai-assistant.css"

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Provital AI health assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""
      if (userMessage.toLowerCase().includes("appointment")) {
        response =
          "I can help you schedule an appointment. Please let me know what type of service you're looking for and your preferred date and time."
      } else if (userMessage.toLowerCase().includes("doctor")) {
        response =
          "We have many qualified doctors in our network. You can view all our doctors at /doctors or tell me what specialty you're looking for."
      } else if (userMessage.toLowerCase().includes("service")) {
        response =
          "Provital offers a wide range of services including telemedicine, mental wellness, nutrition therapy, fitness programs, and more. You can explore all our services at /services."
      } else {
        response = "Thank you for your message. How else can I assist you with your healthcare needs today?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="ai-assistant-button">
        <Bot className="ai-assistant-button-icon" />
      </button>
    )
  }

  return (
    <div className={`ai-assistant ${isMinimized ? "ai-assistant-minimized" : ""}`}>
      <div className="ai-assistant-header">
        <div className="ai-assistant-header-title">
          <Bot className="ai-assistant-header-icon" />
          <span>Provital AI Assistant</span>
        </div>
        <div className="ai-assistant-header-actions">
          <button onClick={() => setIsMinimized(!isMinimized)} className="ai-assistant-header-button">
            {isMinimized ? (
              <Maximize2 className="ai-assistant-action-icon" />
            ) : (
              <Minimize2 className="ai-assistant-action-icon" />
            )}
          </button>
          <button onClick={() => setIsOpen(false)} className="ai-assistant-header-button">
            <X className="ai-assistant-action-icon" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="ai-assistant-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-assistant-message ${
                  message.role === "assistant" ? "ai-assistant-message-assistant" : "ai-assistant-message-user"
                }`}
              >
                {message.role === "assistant" && <Bot className="ai-assistant-message-icon" />}
                <div className="ai-assistant-message-content">{message.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="ai-assistant-message ai-assistant-message-assistant">
                <Bot className="ai-assistant-message-icon" />
                <div className="ai-assistant-message-content">
                  <div className="ai-assistant-typing">
                    <div className="ai-assistant-typing-dot"></div>
                    <div className="ai-assistant-typing-dot"></div>
                    <div className="ai-assistant-typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="ai-assistant-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your health question..."
              className="ai-assistant-input"
            />
            <button type="submit" className="ai-assistant-send" disabled={!input.trim() || isLoading}>
              <Send className="ai-assistant-send-icon" />
            </button>
          </form>
        </>
      )}
    </div>
  )
}
