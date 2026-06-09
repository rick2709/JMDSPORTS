import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Calendar, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    Icon: Target,
    title: 'Choose Your Program',
    description: 'Browse our Beginner, Intermediate, or Elite coaching programs and find the perfect match for your skill level and goals.',
  },
  {
    number: '02',
    Icon: Calendar,
    title: 'Book Your Session',
    description: 'Use our simple online booking system to select your preferred dates and times. Instant confirmation via WhatsApp.',
  },
  {
    number: '03',
    Icon: Zap,
    title: 'Train & Dominate',
    description: "Show up, work hard, and let Zimbabwe's elite coaches help you unlock your full potential on the court.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          Simple Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl text-primary text-center mb-16"
        >
          HOW IT WORKS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border border-lime/20 bg-surface flex items-center justify-center">
                  <step.Icon size={32} className="text-lime" />
                </div>
                <span className="absolute -top-2 -right-2 font-heading text-xs text-dark bg-lime w-7 h-7 rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading text-xl text-primary mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
