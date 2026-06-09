import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const coaches = [
  {
    name: 'Coach Joseph Mhike',
    title: 'Head Coach & Founder',
    specialty: 'All-round game development',
    bio: '15+ years of competitive tennis. Former national champion and certified ITF Level 3 coach. Joseph founded JBMSPORTS to give Zimbabwean athletes access to world-class coaching.',
    img: '/blackgirlracket.png',
  },
  {
    name: 'Coach Tariro Ndlovu',
    title: 'Juniors Specialist',
    specialty: 'Youth development & fun tennis',
    bio: 'Passionate about growing the game from the roots. Tariro runs our junior academy programs and has coached over 200 young players aged 6–16 across Harare.',
    img: '/tennishand.jpg',
  },
  {
    name: 'Coach Simba Chikwanda',
    title: 'Fitness & Conditioning',
    specialty: 'Athletic performance & injury prevention',
    bio: 'A certified strength and conditioning specialist, Simba brings elite-level athletic training to the tennis court — focusing on speed, agility, and on-court endurance.',
    img: '/racket on ground.jpg',
  },
]

function CoachCard({ coach, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative rounded-2xl overflow-hidden flex-shrink-0 w-72 md:w-auto"
      style={{ aspectRatio: '2/3' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(200, 241, 53, 0.12)' }}
    >
      <motion.img
        src={coach.img}
        alt={coach.name}
        className="w-full h-full object-cover"
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

      {/* Default info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-heading text-xl text-primary">{coach.name}</h3>
        <p className="text-lime text-xs tracking-wider mt-0.5">{coach.title}</p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={hovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <p className="text-muted text-sm leading-relaxed mt-3">{coach.bio}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function CoachesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          The Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl text-primary text-center mb-14"
        >
          MEET YOUR COACHES
        </motion.h2>

        {/* Mobile: horizontal scroll; Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory md:overflow-visible">
          {coaches.map((coach, i) => (
            <div key={coach.name} className="snap-start flex-shrink-0 w-72 md:w-auto">
              <CoachCard coach={coach} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
