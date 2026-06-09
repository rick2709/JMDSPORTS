import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Target, TrendingUp, Award, ChevronDown } from 'lucide-react'
import Footer from '../components/Footer'

const programs = [
  {
    title: 'Beginner Coaching',
    age: 'Ages 6–16 & Adults',
    icon: Target,
    price: '$30/month',
    img: '/blackgirlracket.png',
    description: 'Perfect for complete newcomers. Our beginner program teaches all the fundamentals — grip, stance, footwork, rallying, and serving — in a fun, pressure-free environment.',
    features: ['Grip & footwork basics', 'Serve & return drills', 'Rally consistency', 'Court etiquette', 'Fun games & match play', 'Parent observation welcome'],
    tag: 'STARTER',
  },
  {
    title: 'Intermediate Training',
    age: 'All ages, 6+ months experience',
    icon: TrendingUp,
    price: '$55/month',
    img: '/tennishand.jpg',
    description: 'Take your existing skills to the next level. This program focuses on tactical shot selection, spin variations, net play, and competitive match strategy.',
    features: ['Topspin & slice technique', 'Net approach & volleys', 'Match strategy & tactics', 'Competitive drilling', 'Video feedback sessions', 'Small group format'],
    tag: 'POPULAR',
  },
  {
    title: 'Elite / Advanced Program',
    age: 'Competitive & tournament players',
    icon: Award,
    price: '$90/month',
    img: '/racket on ground.jpg',
    description: 'For serious competitive players. Daily high-intensity training, full video analysis, physical conditioning, and complete tournament preparation for national and regional competition.',
    features: ['Daily on-court sessions', '1-on-1 with Head Coach', 'Full video analysis', 'Fitness & conditioning', 'Tournament prep & planning', 'Mental performance coaching'],
    tag: 'ELITE',
  },
]

const coaches = [
  { name: 'Coach Joseph Mhike', title: 'Head Coach', img: '/blackgirlracket.png', exp: '15+ years' },
  { name: 'Coach Tariro Ndlovu', title: 'Juniors Specialist', img: '/tennishand.jpg', exp: '8 years' },
  { name: 'Coach Simba Chikwanda', title: 'Fitness & Conditioning', img: '/racket on ground.jpg', exp: '10 years' },
]

function ProgramCard({ program, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-surface rounded-2xl overflow-hidden"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
        <img src={program.img} alt={program.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-lime text-dark font-heading text-xs px-3 py-1 rounded-full">{program.tag}</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="text-muted text-xs tracking-widest">{program.age}</span>
          <h3 className="font-heading text-2xl text-primary">{program.title}</h3>
          <span className="text-lime font-heading text-lg">{program.price}</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted text-sm leading-relaxed mb-5">{program.description}</p>
        <ul className="grid grid-cols-2 gap-2 mb-6">
          {program.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted">
              <Check size={12} className="text-lime flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function CoachingPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `🎾 *New Booking — JBMSPORTS*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `🏆 *Program:* ${formData.program}\n` +
      `📅 *Date:* ${formData.date || 'Not specified'}\n` +
      `💬 *Message:* ${formData.message || 'None'}`
    )
    window.open(`https://wa.me/263783316659?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      {/* Hero */}
      <div ref={ref} className="relative min-h-[50vh] flex items-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/court.jpg" alt="Tennis courts aerial view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">
            World-Class Coaching
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-4">
            ELEVATE YOUR
            <span className="text-lime"> GAME</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-muted max-w-lg">
            Professional coaching programs designed for all skill levels, from first-time players to national-level competitors. Based in Harare, Zimbabwe.
          </motion.p>
        </div>
      </div>

      {/* Programs */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Programs</p>
            <h2 className="font-heading text-4xl md:text-6xl text-primary">CHOOSE YOUR PATH</h2>
          </div>
          <div className="space-y-8">
            {programs.map((p, i) => <ProgramCard key={p.title} program={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">The Team</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">YOUR COACHES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((coach, i) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="card-surface rounded-2xl overflow-hidden"
                whileHover={{ y: -6 }}
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img src={coach.img} alt={coach.name} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-primary">{coach.name}</h3>
                  <p className="text-lime text-xs tracking-wider mt-1 mb-2">{coach.title}</p>
                  <p className="text-muted text-xs">{coach.exp} experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={formRef} className="py-20 px-6 md:px-16 lg:px-24 bg-dark">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
            <p className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Get Started</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">BOOK YOUR SESSION</h2>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-surface rounded-2xl p-12 text-center"
            >
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="font-heading text-2xl text-lime mb-3">BOOKING RECEIVED!</h3>
              <p className="text-muted text-sm">We'll confirm your session via WhatsApp within 1 hour. Get ready to dominate!</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit}
              className="card-surface rounded-2xl p-8 space-y-5"
            >
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Farai Mutasa' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'farai@example.com' },
                { id: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+263 77 ...' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-xs font-medium text-muted tracking-widest uppercase mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-muted tracking-widest uppercase mb-2">Program</label>
                <div className="relative">
                  <select
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm appearance-none transition-all cursor-pointer"
                  >
                    <option value="">Select a program</option>
                    <option>Beginner Coaching</option>
                    <option>Intermediate Training</option>
                    <option>Elite / Advanced Program</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted tracking-widest uppercase mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm transition-all [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted tracking-widest uppercase mb-2">Message (optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your experience level or any goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 resize-none transition-all"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-lime text-dark font-heading py-3.5 rounded-full tracking-wider neon-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                BOOK NOW
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  )
}
