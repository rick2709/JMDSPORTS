import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Plus, Star } from 'lucide-react'
import Footer from './Footer'
import { useCart } from '../context/CartContext'

const BOOKING_URL = 'https://calendar.app.google/srnXejpHyV5jkuy79'

function StarRating({ count }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={11} className={i <= count ? 'text-[#F5A623] fill-[#F5A623]' : 'text-muted'} />
      ))}
    </span>
  )
}

function ProgramCard({ program, index, navigate }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: '3/4' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      <motion.img src={program.img} alt={program.title} className="w-full h-full object-cover" animate={hovered ? { scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.5 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="bg-lime text-dark font-heading text-xs px-3 py-1 rounded-full tracking-wider">{program.tag}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-lime text-xs tracking-widest uppercase mb-1">{program.subtitle}</p>
        <h3 className="font-heading text-2xl text-primary mb-1">{program.title}</h3>
        <p className="text-lime font-heading text-lg mb-2">{program.price}</p>
        <motion.div initial={{ height: 0, opacity: 0 }} animate={hovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
          <p className="text-muted text-sm leading-relaxed mb-3">{program.description}</p>
          <ul className="grid grid-cols-2 gap-1.5 mb-4">
            {program.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-xs text-muted">
                <Check size={11} className="text-lime flex-shrink-0" />{f}
              </li>
            ))}
          </ul>
          <motion.button onClick={() => navigate('book')} className="w-full bg-lime text-dark font-heading text-sm py-2.5 rounded-full tracking-wider" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            ENROLL NOW
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}


function MerchCard({ item, index }) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const isNew = item.condition === 'new'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-surface rounded-2xl overflow-hidden"
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(200,241,53,0.12)' }}
    >
      <div className="relative aspect-square overflow-hidden">
        <motion.img src={item.img} alt={item.name} className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-heading tracking-widest px-2 py-0.5 rounded-full ${isNew ? 'bg-lime text-dark' : 'bg-[#F5A623] text-dark'}`}>
            {isNew ? 'NEW' : 'PRE-LOVED'}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-primary text-sm font-medium leading-snug mb-1">{item.name}</h3>
        {!isNew && item.conditionRating && <StarRating count={item.conditionRating} />}
        {!isNew && item.conditionNote && <p className="text-muted text-xs mt-1 mb-1 italic">"{item.conditionNote}"</p>}
        <p className="text-lime font-heading text-lg mt-1 mb-3">${item.price} USD</p>
        <motion.button
          onClick={() => { addItem({ name: item.name, price: item.price, img: item.img }); setAdded(true); setTimeout(() => setAdded(false), 2000) }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-heading tracking-wider transition-all ${added ? 'bg-lime text-dark' : 'border border-lime/40 text-lime hover:bg-lime hover:text-dark'}`}
          whileTap={{ scale: 0.97 }}
        >
          {added ? '✓ ADDED' : <><Plus size={14} />ADD TO CART</>}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function SportPage({ sport, navigate }) {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const programsRef = useRef(null)
  const programsInView = useInView(programsRef, { once: true, margin: '-80px' })
  const pricingRef = useRef(null)
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' })
  const bookingRef = useRef(null)
  const bookingInView = useInView(bookingRef, { once: true, margin: '-80px' })

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative min-h-[55vh] flex items-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={sport.heroImage} alt={sport.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">
            {sport.emoji} {sport.name}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-4">
            {sport.heroHeadline.split(' ').map((w, i, arr) => (
              <span key={w}>{i === arr.length - 1 ? <span className="text-lime">{w}</span> : `${w} `}</span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-muted max-w-lg mb-8">
            {sport.heroSubtext}
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 }} onClick={() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' })} className="bg-lime text-dark font-heading px-7 py-3 rounded-full tracking-wider neon-glow" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            BOOK A SESSION
          </motion.button>
        </div>
      </div>

      {/* ── Programs ── */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div ref={programsRef} className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={programsInView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Programs</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={programsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-6xl text-primary">CHOOSE YOUR PATH</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sport.programs.map((p, i) => <ProgramCard key={p.title} program={p} index={i} navigate={navigate} />)}
          </div>
        </div>
      </section>

      {/* ── Coaches — hidden for now ── */}

      {/* ── Pricing ── */}
      <section ref={pricingRef} className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={pricingInView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Pricing</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={pricingInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl text-primary">CHOOSE YOUR LEVEL</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {sport.pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className={`relative rounded-2xl p-8 ${plan.highlighted ? 'bg-lime text-dark' : 'card-surface'}`}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-dark text-lime font-heading text-xs px-4 py-1 rounded-full border border-lime tracking-widest">{plan.badge}</span>
                  </div>
                )}
                <h3 className={`font-heading text-2xl mb-4 ${plan.highlighted ? 'text-dark' : 'text-primary'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`font-heading text-5xl ${plan.highlighted ? 'text-dark' : 'text-lime'}`}>${plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-dark/70' : 'text-muted'}`}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={plan.highlighted ? 'text-dark' : 'text-lime'} strokeWidth={2.5} />
                      <span className={plan.highlighted ? 'text-dark' : 'text-muted'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-full font-heading tracking-wider text-sm ${plan.highlighted ? 'bg-dark text-lime' : 'bg-lime text-dark'}`}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking ── */}
      <section ref={bookingRef} className="py-24 px-6 md:px-16 lg:px-24 bg-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={bookingInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Get Started</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">BOOK YOUR {sport.name.toUpperCase()} SESSION</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bookingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ borderTop: '4px solid #C8F135' }}
          >
            <div style={{ background: '#ffffff' }}>
              <iframe
                src={BOOKING_URL}
                style={{ border: 0, width: '100%', height: 680, display: 'block' }}
                frameBorder="0"
                title={`Book a ${sport.name} session at JBMSPORTS`}
                allowFullScreen
              />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={bookingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted text-xs text-center mt-4"
          >
            Having trouble?{' '}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-lime underline underline-offset-2">
              Open booking page directly
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── Merch Preview ── */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">{sport.name} Gear</p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary">FEATURED {sport.name.toUpperCase()} GEAR</h2>
            </div>
            <motion.button onClick={() => navigate('shop')} className="border border-surface-border text-muted hover:text-lime hover:border-lime px-5 py-2.5 rounded-full text-sm font-heading tracking-wider transition-colors" whileHover={{ scale: 1.04 }}>
              VIEW ALL {sport.name.toUpperCase()} GEAR
            </motion.button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {sport.featuredMerch.map((item, i) => <MerchCard key={item.name} item={item} index={i} />)}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  )
}
