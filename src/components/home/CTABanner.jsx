import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTABanner({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-forest"
    >
      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-lime/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-lime/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-lime neon-text-glow leading-tight mb-8"
        >
          READY TO DOMINATE
          <br />THE COURT?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/70 mb-10 text-base max-w-md mx-auto"
        >
          Join hundreds of players who've already transformed their game with JBMSPORTS. Limited spots available.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            onClick={() => navigate('book')}
            className="bg-lime text-dark font-heading px-8 py-3.5 rounded-full tracking-wider neon-glow text-sm"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            BOOK A SESSION
          </motion.button>
          <motion.button
            onClick={() => navigate('shop')}
            className="border border-white/30 text-white font-heading px-8 py-3.5 rounded-full tracking-wider text-sm hover:border-lime hover:text-lime transition-colors"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            SHOP GEAR
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
