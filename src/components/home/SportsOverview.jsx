import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { SPORTS_CONFIG } from '../../config/sports'

function SportCard({ sport, index, navigate }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: '3/4' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      <motion.img
        src={sport.homeCardImg}
        alt={sport.name}
        className="w-full h-full object-cover"
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

      <div className="absolute top-4 left-4">
        <span className="text-3xl">{sport.emoji}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-lime text-xs tracking-widest uppercase mb-1">{sport.tagline}</p>
        <h3 className="font-heading text-2xl text-primary mb-2">{sport.name.toUpperCase()}</h3>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={hovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <p className="text-muted text-sm leading-relaxed mb-4">{sport.brief}</p>
          <motion.button
            onClick={() => navigate(sport.id)}
            className="w-full bg-lime text-dark font-heading text-sm py-2.5 rounded-full tracking-wider"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            EXPLORE {sport.name.toUpperCase()}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function SportsOverview({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          Our Sports
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl text-primary text-center mb-14"
        >
          FIND YOUR SPORT
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPORTS_CONFIG.map((sport, i) => (
            <SportCard key={sport.id} sport={sport} index={i} navigate={navigate} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <span className="inline-flex items-center gap-2 border border-lime/20 text-lime/60 text-xs font-heading tracking-widest px-5 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-lime/60 animate-pulse" />
            + MORE SPORTS COMING SOON
          </span>
        </motion.div>
      </div>
    </section>
  )
}
