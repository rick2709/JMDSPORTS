import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { SPORTS_CONFIG } from '../../config/sports'

function CounterNumber({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl text-lime neon-text-glow">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { target: 120, suffix: '+', label: 'Athletes Trained' },
  { target: 4, suffix: '', label: 'Sports & Growing' },
  { target: 8, suffix: '+', label: 'Certified Coaches' },
  { target: 10, suffix: '+', label: 'Years of Excellence' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-dark">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-lime text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6"
          >
            BUILDING CHAMPIONS
            <br />
            <span className="text-lime">FROM THE GROUND UP</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-lime mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted leading-relaxed text-base mb-8"
          >
            Founded in Harare, JBMSPORTS is Zimbabwe's premier multi-sport academy. Tennis, Hockey, Swimming, Boxing — and more. We combine world-class coaching methodology with premium gear to create an unmatched training environment for every athlete.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                className="text-center"
              >
                <CounterNumber target={stat.target} suffix={stat.suffix} />
                <p className="text-muted text-xs mt-1 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: 2x2 sport image grid */}
        <div className="grid grid-cols-2 gap-3">
          {SPORTS_CONFIG.map((sport, i) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={sport.homeCardImg}
                alt={sport.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                <span className="text-base">{sport.emoji}</span>
                <span className="text-white font-heading text-xs tracking-widest uppercase">{sport.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
