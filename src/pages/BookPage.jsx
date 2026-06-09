import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Clock, ChevronDown, CheckCircle } from 'lucide-react'
import Footer from '../components/Footer'

const timeSlots = ['07:00 AM', '08:30 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM']

export default function BookPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', program: '', date: '', time: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      <div ref={ref} className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">
              Reserve Your Spot
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-6">
              BOOK A<br /><span className="text-lime">SESSION</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-muted leading-relaxed mb-10">
              Fill in your details and we'll confirm your session via WhatsApp within 1 hour. All sessions are held at our premium Harare courts.
            </motion.p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { Icon: Calendar, title: 'Flexible Scheduling', desc: 'Morning, afternoon & evening slots available Mon–Sat' },
                { Icon: Clock, title: 'Quick Confirmation', desc: 'Receive WhatsApp confirmation within 60 minutes of booking' },
                { Icon: CheckCircle, title: 'Free Cancellation', desc: 'Cancel or reschedule 12+ hours before your session, no charge' },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card-surface rounded-xl p-4 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-lime" />
                  </div>
                  <div>
                    <h4 className="text-primary text-sm font-medium mb-1">{title}</h4>
                    <p className="text-muted text-xs">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-surface rounded-2xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="text-6xl mb-6"
                >
                  🎾
                </motion.div>
                <h3 className="font-heading text-3xl text-lime mb-3">SESSION BOOKED!</h3>
                <p className="text-muted text-sm mb-6">You'll receive a WhatsApp confirmation within the hour. Get ready to train hard and dominate!</p>
                <motion.button
                  onClick={() => { setSubmitted(false); setSelectedTime('') }}
                  className="border border-lime/40 text-lime px-6 py-2 rounded-full text-xs font-heading tracking-wider"
                  whileHover={{ scale: 1.04 }}
                >
                  BOOK ANOTHER
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-8 space-y-5">
                <h3 className="font-heading text-xl text-primary mb-2">Your Details</h3>

                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Farai Mutasa' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'farai@email.com' },
                  { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: '+263 77 123 4567' },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-xs tracking-widest uppercase text-muted mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={formData[f.id]}
                      onChange={(e) => setFormData({ ...formData, [f.id]: e.target.value })}
                      className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2">Program</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm appearance-none cursor-pointer transition-all"
                    >
                      <option value="">Select a program</option>
                      <option>Beginner Coaching — $30/month</option>
                      <option>Intermediate Training — $55/month</option>
                      <option>Elite / Advanced — $90/month</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm transition-all [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-3">Preferred Time</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <motion.button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 rounded-xl text-xs font-medium transition-all ${
                          selectedTime === slot
                            ? 'bg-lime text-dark'
                            : 'border border-surface-border text-muted hover:border-lime hover:text-lime'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2">Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Skill level, specific goals, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark border border-surface-border rounded-xl px-4 py-3 text-primary text-sm placeholder-muted/40 resize-none transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-lime text-dark font-heading py-4 rounded-full tracking-widest neon-glow text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONFIRM BOOKING
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </main>
  )
}
