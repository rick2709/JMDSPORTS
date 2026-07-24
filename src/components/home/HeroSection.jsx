import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HOCKEY_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjlXfx-DTxc_CHceYczFUmCt8crwJGXnYvBNvBKwMBg&s'
const SWIMMING_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIZcRKU68aahtY0yd9ufIh5YxEIKzE44EB8JL3i7LhQ&s=10'
const BOXING_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_blqX1as7ntU0oQDmH37jwaFayvkN4SMjdG0UkG8gw&s=10'

const slides = [
  { src: '/tennishand.jpg', sport: 'Tennis', emoji: '🎾', tagline: 'Serve. Spin. Win.' },
  { src: HOCKEY_IMG, sport: 'Hockey', emoji: '🏒', tagline: 'Stick. Move. Score.' },
  { src: SWIMMING_IMG, sport: 'Swimming', emoji: '🏊', tagline: 'Dive. Glide. Finish.' },
  { src: BOXING_IMG, sport: 'Boxing', emoji: '🥊', tagline: 'Train. Jab. Conquer.' },
]

const heroWords = ['TRAIN.', 'COMPETE.', 'DOMINATE.']

const statItems = [
  { value: '120+', label: 'Athletes Trained' },
  { value: '4', label: 'Sports & Growing' },
  { value: '8+', label: 'Certified Coaches' },
  { value: '10+', label: 'Years Experience' },
]

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function HeroSection({ navigate }) {
  const { isDark } = useTheme()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => {
    setPaused(true)
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }
  const next = () => {
    setPaused(true)
    setCurrent((c) => (c + 1) % slides.length)
  }
  const goTo = (i) => {
    setPaused(true)
    setCurrent(i)
  }

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Carousel background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <img
            src={slide.src}
            alt={slide.sport}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isDark
                ? 'linear-gradient(to bottom, rgba(13,13,13,0.82) 0%, rgba(13,13,13,0.55) 50%, rgba(13,13,13,1) 100%)'
                : 'linear-gradient(to bottom, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.45) 50%, rgba(242,242,242,0.92) 100%)',
            }}
            transition={{ duration: 0.5 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating tennis ball */}
      <motion.div
        className="absolute top-1/4 right-8 md:right-24 z-10 w-14 h-14 md:w-20 md:h-20"
        animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/balls.jpg"
          alt="Tennis ball"
          className="w-full h-full object-cover rounded-full shadow-[0_0_30px_rgba(200,241,53,0.4)]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-28 md:pt-32">
        {/* Active sport badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-xl">{slide.emoji}</span>
            <span className="text-lime text-sm font-medium tracking-[0.3em] uppercase">{slide.tagline}</span>
          </motion.div>
        </AnimatePresence>

        <div className="overflow-hidden">
          {heroWords.map((word, i) => (
            <motion.div
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="block font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-white tracking-tight drop-shadow-lg"
            >
              {word}
            </motion.div>
          ))}
        </div>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-white/80 text-base md:text-lg max-w-md leading-relaxed"
        >
          Zimbabwe's premier multi-sport academy. Tennis, Hockey, Swimming, Boxing — and more.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.button
            onClick={() => navigate('sports')}
            className="font-heading text-sm px-7 py-3 rounded-full tracking-wider bg-lime text-[#0D0D0D] neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            EXPLORE SPORTS
          </motion.button>
          <motion.button
            onClick={() => navigate('shop')}
            className="font-heading text-sm px-7 py-3 rounded-full tracking-wider border border-white/40 text-white hover:border-lime hover:text-lime transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            SHOP GEAR
          </motion.button>
        </motion.div>

        {/* Carousel controls */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center gap-4"
        >
          {/* Prev / Next */}
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-white/30 text-white/70 hover:border-lime hover:text-lime flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.sport}
                onClick={() => goTo(i)}
                className="relative flex items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: i === current ? 28 : 8,
                    backgroundColor: i === current ? '#C8F135' : 'rgba(255,255,255,0.35)',
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="block h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-white/30 text-white/70 hover:border-lime hover:text-lime flex items-center justify-center transition-colors"
          >
            <ChevronRight size={16} />
          </button>

          {/* Current sport label */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`label-${current}`}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className="text-white/50 text-xs font-heading tracking-widest uppercase ml-1"
            >
              {slide.sport}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Stat ticker */}
      <div
        className="relative z-10 mt-16 md:mt-20 backdrop-blur-md"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(13,13,13,0.65)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center py-6 px-4"
              style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <span className="font-heading text-3xl md:text-4xl text-lime neon-text-glow">{stat.value}</span>
              <span className="text-white/60 text-xs mt-1 tracking-widest uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
