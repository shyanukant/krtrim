
"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-blue-400" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  )
}
