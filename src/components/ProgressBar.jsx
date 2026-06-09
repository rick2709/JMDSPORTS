import { motion, AnimatePresence } from 'framer-motion'

export default function ProgressBar({ navigating }) {
  return (
    <AnimatePresence>
      {navigating && (
        <motion.div
          className="progress-bar"
          initial={{ width: '0%' }}
          animate={{ width: '85%' }}
          exit={{ width: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </AnimatePresence>
  )
}
