import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const programs = [
  {
    title: 'Beginner Coaching',
    subtitle: 'Ages 6–16',
    description: 'Perfect for new players. We teach fundamentals — grip, footwork, serve, rally — in a fun and structured environment.',
    img: '/blackgirlracket.png',
    tag: 'STARTER',
  },
  {
    title: 'Intermediate Training',
    subtitle: 'Skill Development',
    description: 'Take your game to the next level. Tactical play, match strategy, spin variations, and competitive drills.',
    img: '/tennishand.jpg',
    tag: 'POPULAR',
  },
  {
    title: 'Elite Program',
    subtitle: 'Tournament Prep',
    description: 'For serious competitors. High-intensity sessions, video analysis, fitness conditioning, and national tournament preparation.',
    img: '/racket on ground.jpg',
    tag: 'ADVANCED',
  },
]

function ProgramCard({ program, index, navigate }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      <motion.img
        src={program.img}
        alt={program.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />

      {/* Always visible gradient + title */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

      <div className="absolute top-4 left-4">
        <span className="bg-lime text-dark font-heading text-xs px-3 py-1 rounded-full tracking-wider">
          {program.tag}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-lime text-xs tracking-widest uppercase mb-1">{program.subtitle}</p>
        <h3 className="font-heading text-2xl text-primary mb-3">{program.title}</h3>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={hovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <p className="text-muted text-sm leading-relaxed mb-4">{program.description}</p>
          <motion.button
            onClick={() => navigate('book')}
            className="w-full bg-lime text-dark font-heading text-sm py-2.5 rounded-full tracking-wider"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ENROLL NOW
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProgramsSection({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          Our Programs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl text-primary text-center mb-14"
        >
          MASTER YOUR GAME
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  )
}
