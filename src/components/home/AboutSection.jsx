import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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
  { target: 500, suffix: '+', label: 'Athletes Trained' },
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

        {/* Right: image stack */}
        <div className="relative h-[420px] md:h-[520px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute top-0 right-0 w-[75%] h-[70%] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/blackgirlracket.png"
              alt="Tennis player"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute bottom-0 left-0 w-[58%] h-[52%] rounded-2xl overflow-hidden border-2 border-lime/20"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/racket on ground.jpg"
              alt="Tennis racket on court"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-6 right-6 bg-lime text-dark px-4 py-2 rounded-full font-heading text-sm"
          >
            🏆 Zimbabwe's #1
          </motion.div>
        </div>
      </div>
    </section>
  )
}
