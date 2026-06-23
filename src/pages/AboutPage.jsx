import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Target, Award, Users } from 'lucide-react'
import Footer from '../components/Footer'
import { SPORTS_CONFIG } from '../config/sports'

const values = [
  { Icon: Heart, title: 'Passion for Sport', desc: 'Sport is more than competition — it\'s a way of life. We bring that energy to every session, every court, every pool, and every ring.' },
  { Icon: Target, title: 'Excellence in Coaching', desc: 'Our coaches are certified, experienced, and committed to helping every athlete reach their potential, regardless of age or skill level.' },
  { Icon: Users, title: 'Community & Inclusion', desc: 'We believe sport should be accessible to all Zimbabweans. We run scholarship programs for talented youth who cannot afford coaching.' },
  { Icon: Award, title: 'Multi-Sport Growth', desc: 'From Tennis to Hockey, Swimming to Boxing — we are constantly expanding to give Zimbabwe\'s athletes more pathways to excellence.' },
]

const gallery = [
  { src: '/court.jpg', label: 'Tennis Courts' },
  { src: SPORTS_CONFIG.find(s => s.id === 'hockey').homeCardImg, label: 'Hockey Pitch' },
  { src: SPORTS_CONFIG.find(s => s.id === 'swimming').homeCardImg, label: 'Swimming Pool' },
  { src: SPORTS_CONFIG.find(s => s.id === 'boxing').homeCardImg, label: 'Boxing Gym' },
  { src: '/tennishand.jpg', label: 'Tennis Training' },
  { src: '/blackgirlracket.png', label: 'Junior Development' },
]

export default function AboutPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [lightboxImg, setLightboxImg] = useState(null)

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      {/* Hero */}
      <div ref={ref} className="relative py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/tennishand.jpg" alt="JBMSPORTS academy" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-6">
            BUILT IN<br /><span className="text-lime">ZIMBABWE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-muted leading-relaxed text-base max-w-xl">
            JBMSPORTS was founded in Harare with a single mission: to give Zimbabwe's athletes access to world-class coaching and premium equipment across Tennis, Hockey, Swimming, Boxing — and more.
          </motion.p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-4">The Beginning</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">FROM ONE COURT TO A MOVEMENT</h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>JBMSPORTS started in 2015 when Coach Joseph Mhike returned to Harare after completing his ITF Level 3 certification abroad. With a borrowed court and a passion to share what he'd learned, he began coaching a small group of 12 students in Borrowdale.</p>
              <p>Within two years, that group had grown to 120 athletes. Players who trained with Joseph began winning regional tournaments. Parents and kids started lining up for spots. It was clear — Zimbabwe was hungry for world-class sport coaching.</p>
              <p>Today, JBMSPORTS has expanded beyond tennis into Hockey, Swimming, and Boxing, with dedicated facilities and certified coaches across all disciplines. We have trained 500+ athletes and operate Zimbabwe's only multi-sport junior development pipeline — all from right here in Harare.</p>
            </div>
          </motion.div>

          {/* 2x2 sport grid */}
          <div className="grid grid-cols-2 gap-3">
            {SPORTS_CONFIG.map((sport, i) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: '4/3' }}
                whileHover={{ scale: 1.03 }}
              >
                <img src={sport.homeCardImg} alt={sport.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <span className="text-base">{sport.emoji}</span>
                  <span className="text-white font-heading text-xs tracking-widest uppercase">{sport.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">OUR VALUES</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface rounded-2xl p-8 text-center"
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mx-auto mb-5">
                  <value.Icon size={24} className="text-lime" />
                </div>
                <h3 className="font-heading text-xl text-primary mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Across All Sports</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">OUR FACILITIES</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightboxImg(item.src)}
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-dark/20 hover:bg-dark/0 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white/80 text-xs font-heading tracking-widest uppercase">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 bg-forest text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl text-lime mb-6 neon-text-glow"
        >
          BASED IN HARARE,
          <br />BUILDING CHAMPIONS
        </motion.h2>
        <p className="text-primary/70 mb-8 max-w-md mx-auto">
          Join Zimbabwe's fastest-growing multi-sport academy. Our coaches are ready — pick your sport and get started today.
        </p>
        <motion.button
          onClick={() => navigate('book')}
          className="bg-lime text-dark font-heading px-8 py-3.5 rounded-full neon-glow tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          BOOK YOUR FIRST SESSION
        </motion.button>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightboxImg}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
          />
          <button
            className="absolute top-6 right-6 text-primary/60 hover:text-lime text-2xl font-light"
            onClick={() => setLightboxImg(null)}
          >
            ✕
          </button>
        </motion.div>
      )}

      <Footer navigate={navigate} />
    </main>
  )
}
