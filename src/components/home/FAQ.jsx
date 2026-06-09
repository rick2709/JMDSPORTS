import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What age groups do you coach?',
    a: 'We coach players aged 6 and up, including adults of all skill levels. Our Juniors program specifically caters to ages 6–16, while adult programs cover beginner through elite levels.',
  },
  {
    q: 'How long is each coaching session?',
    a: 'Group sessions run for 60 minutes. Small-batch (Pro plan) sessions are 75 minutes. One-on-one Elite sessions are 90 minutes of pure focused coaching.',
  },
  {
    q: 'Do I need to bring my own racket?',
    a: "Beginners can borrow a racket for their first 2 sessions. We recommend purchasing your own gear from our shop for the best experience. Our coaches can help you choose the right racket.",
  },
  {
    q: 'How do I book a session?',
    a: 'Click the "Book A Session" button on our site, fill in the form, and you\'ll receive a WhatsApp confirmation within 1 hour. Payment is made in person or via EcoCash/bank transfer.',
  },
  {
    q: 'Where are your courts located?',
    a: 'We operate at 3 premium tennis facilities across Harare, including courts in Borrowdale, Avondale, and Mount Pleasant. Session location is confirmed at booking.',
  },
  {
    q: 'Can I cancel or reschedule a session?',
    a: 'Yes — cancellations or rescheduling requests made more than 12 hours before your session are free of charge. We ask for at least 3 hours notice out of respect for coaches and other students.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="border-b border-surface-border"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`font-medium text-sm md:text-base transition-colors ${isOpen ? 'text-lime' : 'text-primary'}`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4"
        >
          <Plus size={18} className={isOpen ? 'text-lime' : 'text-muted'} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-5">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl text-primary text-center mb-14"
        >
          GOT QUESTIONS?
        </motion.h2>

        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
