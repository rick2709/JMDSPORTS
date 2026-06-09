import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 30,
    period: '/month',
    features: ['2 sessions/week', 'Group training', 'Basic skill assessment', 'Court access', 'Community membership'],
    highlighted: false,
    cta: 'GET STARTED',
  },
  {
    name: 'Pro',
    price: 55,
    period: '/month',
    features: ['4 sessions/week', 'Group + small batch', 'Monthly progress report', 'Court access', 'Equipment discount 10%', 'WhatsApp coaching group'],
    highlighted: true,
    cta: 'JOIN PRO',
    badge: 'MOST POPULAR',
  },
  {
    name: 'Elite',
    price: 90,
    period: '/month',
    features: ['Daily training sessions', '1-on-1 coaching', 'Video analysis', 'Fitness conditioning', 'Tournament prep', 'Equipment discount 20%', 'Priority booking'],
    highlighted: false,
    cta: 'GO ELITE',
  },
]

export default function Pricing({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lime text-sm tracking-[0.3em] uppercase text-center mb-3"
        >
          Pricing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl text-primary text-center mb-4"
        >
          CHOOSE YOUR LEVEL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="text-muted text-center mb-14 max-w-md mx-auto"
        >
          Flexible monthly plans for every player. Cancel or upgrade anytime.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-lime text-dark'
                  : 'card-surface'
              }`}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-dark text-lime font-heading text-xs px-4 py-1 rounded-full border border-lime tracking-widest">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className={`font-heading text-2xl mb-1 ${plan.highlighted ? 'text-dark' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mt-4 mb-6">
                <span className={`font-heading text-5xl ${plan.highlighted ? 'text-dark' : 'text-lime'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-dark/70' : 'text-muted'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      size={16}
                      className={plan.highlighted ? 'text-dark' : 'text-lime'}
                      strokeWidth={2.5}
                    />
                    <span className={plan.highlighted ? 'text-dark' : 'text-muted'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => navigate('book')}
                className={`w-full py-3 rounded-full font-heading tracking-wider text-sm ${
                  plan.highlighted
                    ? 'bg-dark text-lime hover:bg-dark/90'
                    : 'bg-lime text-dark hover:neon-glow'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
