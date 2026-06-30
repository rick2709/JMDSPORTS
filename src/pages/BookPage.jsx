import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar } from 'lucide-react'
import Footer from '../components/Footer'

const BOOKING_URL = 'https://calendar.app.google/dewJa6q76dbxW3Je8'

export default function BookPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      <div ref={ref} className="py-16 px-6 md:px-16 max-w-5xl mx-auto">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-lime text-sm tracking-[0.3em] uppercase mb-3"
        >
          Reserve Your Spot
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl text-primary mb-4"
        >
          BOOK A<br /><span className="text-lime">SESSION</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted mb-10 max-w-md"
        >
          Pick a date and time that works for you. You'll get a confirmation straight to your email.
        </motion.p>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-6 mb-10"
        >
          {[
            { label: 'Instant confirmation', icon: '✓' },
            { label: 'Email reminder sent', icon: '📧' },
            { label: 'Free to reschedule', icon: '🔄' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-lime text-sm">{item.icon}</span>
              <span className="text-muted text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Google Calendar embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ borderTop: '4px solid #C8F135' }}
        >
          <div style={{ background: '#ffffff', padding: '0' }}>
            <iframe
              src={BOOKING_URL}
              style={{ border: 0, width: '100%', height: 700, display: 'block' }}
              frameBorder="0"
              title="Book a session at JBMSPORTS"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Fallback link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="text-muted text-xs text-center mt-4"
        >
          Having trouble?{' '}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime underline underline-offset-2"
          >
            Open the booking page directly
          </a>
        </motion.p>

      </div>

      <Footer navigate={navigate} />
    </main>
  )
}
