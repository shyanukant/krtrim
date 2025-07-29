
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@/contexts/ThemeContext"
import ThemeToggle from "@/components/ThemeToggle"
import Chatbot from "@/components/Chatbot"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      {/* <ThemeToggle /> */}
      <Chatbot />
    </ThemeProvider>
  )
}
