import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const heroWords = ['TENNIS', 'COACHING', "ZIMBABWE'S FINEST"]

const statItems = [
  { value: '500+', label: 'Students Trained' },
  { value: '8+', label: 'Certified Coaches' },
  { value: '10+', label: 'Years Experience' },
  { value: '#1', label: "Zimbabwe's Best" },
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

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/tennishand.jpg"
          alt="Tennis court"
          className="w-full h-full object-cover"
        />
        {/* Theme-aware overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? 'linear-gradient(to bottom, rgba(13,13,13,0.88), rgba(13,13,13,0.72), rgba(13,13,13,1))'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.45), rgba(242,242,242,0.9))',
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

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
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lime text-sm font-medium tracking-[0.3em] uppercase mb-6"
        >
          Harare, Zimbabwe
        </motion.p>

        <div className="overflow-hidden">
          {heroWords.map((word, i) => (
            <motion.div
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="block font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-primary tracking-tight"
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
          className="mt-6 text-muted text-base md:text-lg max-w-md leading-relaxed"
        >
          Train with Zimbabwe's top tennis coaches. Level up your game with elite programs designed to take you from baseline to baseline — and beyond.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.button
            onClick={() => navigate('book')}
            className={`font-heading text-sm px-7 py-3 rounded-full tracking-wider transition-all ${
              isDark
                ? 'bg-lime text-[#0D0D0D] neon-glow'
                : 'bg-forest text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            BOOK A SESSION
          </motion.button>
          <motion.button
            onClick={() => navigate('shop')}
            className={`font-heading text-sm px-7 py-3 rounded-full tracking-wider transition-colors ${
              isDark
                ? 'border border-white/30 text-primary hover:border-lime hover:text-lime'
                : 'border border-forest/40 text-forest hover:border-forest hover:bg-forest/5'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            SHOP GEAR
          </motion.button>
        </motion.div>
      </div>

      {/* Stat ticker */}
      <div
        className="relative z-10 mt-16 md:mt-20 backdrop-blur-md hero-stat-bar"
        style={{
          borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
          background: isDark ? 'rgba(13,13,13,0.65)' : 'rgba(242,242,242,0.8)',
          transition: 'background 0.4s ease, border-color 0.3s ease',
        }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}
        >
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center py-6 px-4"
              style={{
                borderRight: i < 3 ? `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}` : 'none',
              }}
            >
              <span className="font-heading text-3xl md:text-4xl text-lime neon-text-glow">{stat.value}</span>
              <span className="text-muted text-xs mt-1 tracking-widest uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
