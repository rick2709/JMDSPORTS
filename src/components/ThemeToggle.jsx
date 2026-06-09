import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggle } = useTheme()

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex items-center flex-shrink-0 rounded-full cursor-pointer focus:outline-none ${className}`}
      style={{
        width: 56,
        height: 28,
        backgroundColor: isDark ? '#1A1A1A' : '#E8E8E8',
        border: isDark ? '1px solid #3A3A3A' : '1px solid #C0C0C0',
        transition: 'background-color 0.35s ease, border-color 0.35s ease',
      }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Sliding thumb */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          width: 20,
          height: 20,
          backgroundColor: isDark ? '#FFFFFF' : '#1A3C2E',
          top: 3,
        }}
        animate={{ x: isDark ? 30 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Moon icon — visible in dark mode (left side, behind thumb) */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-[6px]"
          >
            <Moon size={11} strokeWidth={2} color="#A0A0A0" />
          </motion.span>
        ) : (
          /* Sun icon — visible in light mode (right side, behind thumb) */
          <motion.span
            key="sun"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-[6px]"
          >
            <Sun size={11} strokeWidth={2} color="#1A3C2E" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
