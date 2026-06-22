import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import { SPORTS_CONFIG } from '../config/sports'

function SportBanner({ sport, index, navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-surface rounded-2xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image — 40% on desktop */}
        <div className="relative w-full md:w-[40%] h-56 md:h-64 overflow-hidden flex-shrink-0">
          <motion.img
            src={sport.homeCardImg}
            alt={sport.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/20 to-transparent md:bg-gradient-to-r" />
          <div className="absolute top-4 left-4">
            <span className="text-3xl">{sport.emoji}</span>
          </div>
        </div>

        {/* Info — 60% */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <p className="text-lime text-xs tracking-[0.3em] uppercase mb-2">{sport.tagline}</p>
          <h3 className="font-heading text-3xl md:text-4xl text-primary mb-3">{sport.name.toUpperCase()}</h3>
          <p className="text-muted text-sm leading-relaxed mb-4 max-w-md">{sport.brief}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {sport.programs.map((p) => (
              <span key={p.tag} className="text-xs border border-lime/30 text-lime/70 px-3 py-1 rounded-full tracking-wider">{p.tag}</span>
            ))}
          </div>
          <motion.button
            onClick={() => navigate(sport.id)}
            className="self-start flex items-center gap-2 bg-lime text-dark font-heading text-sm px-6 py-2.5 rounded-full tracking-wider neon-glow"
            whileHover={{ scale: 1.05, gap: '12px' }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW {sport.name.toUpperCase()} <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function SportsPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      {/* Hero */}
      <div ref={ref} className="relative py-20 px-6 md:px-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A3C2E 0%, #0D0D0D 60%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-lime/10 rounded-full blur-3xl" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">All Sports</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-4">
          FIND YOUR<span className="text-lime"> SPORT</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-muted max-w-md">
          JBMSPORTS offers world-class coaching across four disciplines — and we're always growing. Find the sport that fires you up.
        </motion.p>
      </div>

      {/* Sport Banners */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-6">
          {SPORTS_CONFIG.map((sport, i) => (
            <SportBanner key={sport.id} sport={sport} index={i} navigate={navigate} />
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border-2 border-dashed border-surface-border p-10 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-lime/10 text-lime text-xs font-heading tracking-widest px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              STAY TUNED
            </div>
            <h3 className="font-heading text-2xl text-primary mb-2">MORE SPORTS COMING SOON</h3>
            <p className="text-muted text-sm max-w-sm mx-auto">We're expanding our sports offering. Athletics, cricket, and more are in the pipeline. Watch this space.</p>
          </motion.div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  )
}
