
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses = {
  greeting: "Hi! I'm Krtrim's AI assistant. I can help you understand our services. What would you like to know about?",
  services: "We offer three main services:\n\n🤖 **Alpha Team** - AI Knowledge Chatbots\n🎙️ **Meta Team** - AI Voice Agents\n💻 **Nexus Team** - Custom SaaS & AI Products\n\nWhich one interests you most?",
  alpha: "Our Alpha Team specializes in AI Knowledge Chatbots that can:\n• Handle 24/7 customer support\n• Qualify leads automatically\n• Provide instant answers from your data\n• Support multiple languages\n\nWould you like to book a consultation?",
  meta: "Our Meta Team creates AI Voice Agents that:\n• Sound completely human\n• Handle appointment scheduling\n• Make outbound calls\n• Integrate with your CRM\n\nPerfect for businesses that need voice automation!",
  nexus: "Our Nexus Team builds Custom SaaS & AI Products:\n• Full-stack development\n• AI-powered features\n• Scalable architecture\n• Modern tech stack\n\nWe can bring any AI idea to life!",
  pricing: "Our pricing is customized based on your specific needs. Each project is unique, so we offer free discovery calls to understand your requirements and provide accurate quotes.",
  booking: "Great! You can book a free discovery call at: https://cal.com/krtrim/discovery-call\n\nOr choose a specific team:\n• Alpha Team: https://cal.com/krtrim/alpha-team-chatbot\n• Meta Team: https://cal.com/krtrim/meta-team-voice\n• Nexus Team: https://cal.com/krtrim/nexus-team-saas",
  default: "I can help you with information about our AI services, pricing, or booking consultations. Try asking about our teams, services, or how to get started!"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: botResponses.greeting,
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes("service") || message.includes("what do you do")) {
      return botResponses.services
    } else if (message.includes("alpha") || message.includes("chatbot")) {
      return botResponses.alpha
    } else if (message.includes("meta") || message.includes("voice")) {
      return botResponses.meta
    } else if (message.includes("nexus") || message.includes("saas") || message.includes("custom")) {
      return botResponses.nexus
    } else if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
      return botResponses.pricing
    } else if (message.includes("book") || message.includes("call") || message.includes("meeting")) {
      return botResponses.booking
    } else if (message.includes("hello") || message.includes("hi")) {
      return botResponses.greeting
    } else {
      return botResponses.default
    }
  }

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)

    setInputValue("")
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg">Krtrim AI Assistant</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="h-80 overflow-y-auto space-y-3 pr-2">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "user" 
                            ? "bg-blue-500" 
                            : "bg-gradient-to-r from-purple-600 to-pink-600"
                        }`}>
                          {message.sender === "user" ? (
                            <User className="h-3 w-3 text-white" />
                          ) : (
                            <Bot className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <div className={`rounded-2xl px-3 py-2 ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask about our services..."
                    className="flex-1"
                  />
                  <Button
                    onClick={sendMessage}
                    size="icon"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
