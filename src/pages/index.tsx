
import React from "react"
import Head from "next/head"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <>
      <Head>
        <title>Krtrim - Your Autonomous AI Workforce | AI Agency</title>
        <meta name="description" content="Transform your business with Krtrim's AI solutions. We build intelligent chatbots, voice agents, and custom SaaS products to automate operations and accelerate growth." />
        <meta name="keywords" content="AI agency, chatbots, voice agents, SaaS development, automation, artificial intelligence" />
        <meta property="og:title" content="Krtrim - Your Autonomous AI Workforce" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions from Krtrim" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
    </>
  )
}
