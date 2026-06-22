import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircle, ChevronDown } from 'lucide-react'
import Footer from '../components/Footer'
import { SPORTS_CONFIG, WHATSAPP_NUMBER } from '../config/sports'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const TIMES = ['Morning', 'Afternoon', 'Evening']

export default function BookPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const [selectedSport, setSelectedSport] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', ageGroup: '', time: '', days: [], notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const toggleDay = (day) => setFormData((prev) => ({
    ...prev,
    days: prev.days.includes(day) ? prev.days.filter((d) => d !== day) : [...prev.days, day],
  }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const sport = SPORTS_CONFIG.find((s) => s.id === selectedSport)
    const msg = encodeURIComponent(
      `${sport?.emoji || '🏅'} *New Booking — JBMSPORTS*\n\n` +
      `🏆 *Sport:* ${sport?.name || selectedSport}\n` +
      `📊 *Level:* ${selectedLevel}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `🧒 *Age Group:* ${formData.ageGroup || 'Not specified'}\n` +
      `📅 *Preferred Days:* ${formData.days.length ? formData.days.join(', ') : 'Not specified'}\n` +
      `⏰ *Preferred Time:* ${formData.time || 'Not specified'}\n` +
      `💬 *Notes:* ${formData.notes || 'None'}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const sport = SPORTS_CONFIG.find((s) => s.id === selectedSport)

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      <div ref={ref} className="py-20 px-6 md:px-16 max-w-4xl mx-auto">

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Reserve Your Spot</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-4">
          BOOK A<br /><span className="text-lime">SESSION</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-muted mb-12">
          Choose your sport and we'll connect you with the right coach.
        </motion.p>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card-surface rounded-2xl p-14 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
              <CheckCircle size={64} className="text-lime mx-auto mb-6" strokeWidth={1.5} />
            </motion.div>
            <h3 className="font-heading text-3xl text-lime mb-3">BOOKING RECEIVED!</h3>
            <p className="text-muted text-sm mb-8 max-w-sm mx-auto">We'll contact you via WhatsApp within 24 hours to confirm your session details.</p>
            <motion.button
              onClick={() => { setSubmitted(false); setSelectedSport(null); setSelectedLevel(null); setFormData({ name: '', email: '', phone: '', ageGroup: '', time: '', days: [], notes: '' }) }}
              className="border border-lime/40 text-lime px-6 py-2.5 rounded-full text-xs font-heading tracking-wider"
              whileHover={{ scale: 1.04 }}
            >
              BOOK ANOTHER
            </motion.button>
          </motion.div>
        ) : (
          <div className="space-y-8">

            {/* Step 1: Select Sport */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full bg-lime text-dark font-heading text-sm flex items-center justify-center">1</div>
                <h2 className="font-heading text-xl text-primary">SELECT YOUR SPORT</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SPORTS_CONFIG.map((s) => (
                  <motion.button
                    key={s.id}
                    onClick={() => { setSelectedSport(s.id); setSelectedLevel(null) }}
                    className={`relative p-5 rounded-2xl border-2 text-center transition-all ${selectedSport === s.id ? 'border-lime bg-lime/5' : 'border-surface-border hover:border-lime/50 card-surface'}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    animate={selectedSport === s.id ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <div className="text-3xl mb-2">{s.emoji}</div>
                    <div className="font-heading text-sm text-primary tracking-wider">{s.name.toUpperCase()}</div>
                    {selectedSport === s.id && (
                      <motion.div layoutId="sport-border" className="absolute inset-0 rounded-2xl border-2 border-lime pointer-events-none" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Select Level */}
            <AnimatePresence>
              {selectedSport && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-lime text-dark font-heading text-sm flex items-center justify-center">2</div>
                    <h2 className="font-heading text-xl text-primary">SELECT YOUR LEVEL</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {sport?.programs.map((p) => (
                      <motion.button
                        key={p.title}
                        onClick={() => setSelectedLevel(p.title)}
                        className={`p-5 rounded-2xl border-2 text-left transition-all ${selectedLevel === p.title ? 'border-lime bg-lime/5' : 'border-surface-border hover:border-lime/50 card-surface'}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="text-xs font-heading tracking-widest text-lime mb-1 block">{p.tag}</span>
                        <div className="font-heading text-base text-primary">{p.title}</div>
                        <div className="text-muted text-xs mt-1">{p.price}</div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Full Form */}
            <AnimatePresence>
              {selectedLevel && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-lime text-dark font-heading text-sm flex items-center justify-center">3</div>
                    <h2 className="font-heading text-xl text-primary">YOUR DETAILS</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Farai Mutasa' },
                        { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: '+263 77 123 4567' },
                      ].map((f) => (
                        <div key={f.id}>
                          <label className="block text-xs tracking-widest uppercase text-muted mb-2">{f.label}</label>
                          <input type={f.type} required placeholder={f.placeholder} value={formData[f.id]} onChange={(e) => setFormData({ ...formData, [f.id]: e.target.value })} className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 focus:border-lime/60 outline-none transition-all" />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-2">Email Address</label>
                      <input type="email" required placeholder="farai@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 focus:border-lime/60 outline-none transition-all" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-muted mb-2">Age Group</label>
                        <div className="relative">
                          <select value={formData.ageGroup} onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })} className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm appearance-none cursor-pointer outline-none">
                            <option value="">Select</option>
                            <option>Under 12</option>
                            <option>12–17</option>
                            <option>Adult 18+</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-muted mb-2">Preferred Time</label>
                        <div className="flex gap-2">
                          {TIMES.map((t) => (
                            <motion.button key={t} type="button" onClick={() => setFormData({ ...formData, time: t })} className={`flex-1 py-2.5 rounded-xl text-xs font-heading transition-all ${formData.time === t ? 'bg-lime text-dark' : 'border border-surface-border text-muted hover:border-lime hover:text-lime'}`} whileTap={{ scale: 0.95 }}>
                              {t}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-3">Preferred Days</label>
                      <div className="flex flex-wrap gap-2">
                        {DAYS.map((day) => (
                          <motion.button key={day} type="button" onClick={() => toggleDay(day)} className={`px-3 py-1.5 rounded-full text-xs font-heading tracking-wider transition-all ${formData.days.includes(day) ? 'bg-lime text-dark' : 'border border-surface-border text-muted hover:border-lime hover:text-lime'}`} whileTap={{ scale: 0.93 }}>
                            {day}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-2">Additional Notes</label>
                      <textarea rows={3} placeholder="Skill level, goals, questions..." value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 resize-none focus:border-lime/60 outline-none transition-all" />
                    </div>

                    <motion.button type="submit" className="w-full bg-lime text-dark font-heading py-4 rounded-full tracking-widest neon-glow text-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      CONFIRM BOOKING
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}
      </div>

      <Footer navigate={navigate} />
    </main>
  )
}
