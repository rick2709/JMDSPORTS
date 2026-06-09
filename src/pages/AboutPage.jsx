import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Target, Award, Users } from 'lucide-react'
import Footer from '../components/Footer'

const values = [
  { Icon: Heart, title: 'Passion for the Game', desc: 'Tennis is more than a sport — it\'s a way of life. We bring that energy to every session, every court, every moment.' },
  { Icon: Target, title: 'Excellence in Coaching', desc: 'Our coaches are certified, experienced, and committed to helping every player reach their potential, regardless of age or skill.' },
  { Icon: Users, title: 'Community & Inclusion', desc: 'We believe tennis should be accessible to all Zimbabweans. We run scholarship programs for talented youth who cannot afford coaching.' },
]

const gallery = [
  '/court.jpg',
  '/blackgirlracket.png',
  '/racket.jpg',
  '/balls.jpg',
  '/racket on ground.jpg',
  '/tennishand.jpg',
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
          <img src="/tennishand.jpg" alt="Tennis player on court" className="w-full h-full object-cover object-top" />
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
            JBMSPORTS was founded in Harare with a single mission: to give Zimbabwe's tennis players access to world-class coaching and premium equipment, right here at home.
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
              <p>Within two years, that group had grown to 120 students. Players who trained with Joseph began winning regional tournaments. Parents and kids started lining up for spots. It was clear — Zimbabwe was hungry for this.</p>
              <p>Today, JBMSPORTS operates across 3 premium courts in Harare, has trained 500+ players, and runs Zimbabwe's only nationally-recognised junior tennis development pipeline. We also opened Zimbabwe's first dedicated tennis equipment store, bringing world brands like Wilson, Babolat, and Nike to local players.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <img src="/blackgirlracket.png" alt="Coach Joseph Mhike" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-lime text-xs tracking-widest uppercase">Coach Joseph Mhike</p>
              <p className="text-primary font-heading text-xl">Founder & Head Coach</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">OUR VALUES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
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
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Facilities</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">OUR COURTS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightboxImg(img)}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-dark/20 hover:bg-dark/0 transition-colors" />
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
          Join Zimbabwe's fastest-growing tennis community. Our courts are open and our coaches are ready.
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
