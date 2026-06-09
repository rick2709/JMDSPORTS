import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Farai Mutasa',
    role: 'Intermediate Player, Harare',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote: "JBMSPORTS completely transformed my game. After 3 months with Coach JB, I went from a complete beginner to winning my first club tournament. The coaching here is world-class.",
    stars: 5,
  },
  {
    name: 'Rutendo Chigamba',
    role: 'Junior Player (Age 14)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    quote: "Coach Tariro makes every session so much fun! I've improved so much in just a few months. My parents are amazed at how quickly I picked up the game. Best decision ever!",
    stars: 5,
  },
  {
    name: 'Tinashe Mapfumo',
    role: 'Elite Program, National Circuit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    quote: "The Elite Program is genuinely world-class. Coach Simba's fitness training has completely changed my physical game, and the rackets from their shop are excellent quality.",
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-lime fill-lime" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl text-primary text-center mb-14"
        >
          WHAT OUR PLAYERS SAY
        </motion.h2>

        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="card-surface rounded-2xl p-8 md:p-10 w-full"
            >
              <Stars count={testimonials[current].stars} />
              <p className="text-primary text-lg md:text-xl leading-relaxed mt-5 mb-8 font-light italic">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-lime/30"
                />
                <div>
                  <p className="text-primary font-medium text-sm">{testimonials[current].name}</p>
                  <p className="text-muted text-xs">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? 'w-6 h-2 bg-lime' : 'w-2 h-2 bg-white/20'}`}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
