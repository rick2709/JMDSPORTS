import { motion } from 'framer-motion'
import { Globe, Share2, X, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = ['Home', 'Coaching', 'Shop', 'Book', 'About']
const coachingLinks = ['Beginner Coaching', 'Intermediate Training', 'Elite Program', 'Private Sessions', 'Junior Academy']

const pageMap = {
  'Home': 'home', 'Coaching': 'coaching', 'Shop': 'shop', 'Book': 'book', 'About': 'about',
  'Beginner Coaching': 'coaching', 'Intermediate Training': 'coaching', 'Elite Program': 'coaching',
  'Private Sessions': 'coaching', 'Junior Academy': 'coaching',
}

/* Footer is always the dark forest green in both light & dark mode */
export default function Footer({ navigate }) {
  return (
    <footer
      className="py-16 px-6 md:px-16 lg:px-24"
      style={{ backgroundColor: '#111E17', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate('home')}>
              <div className="w-9 h-9 bg-lime rounded-full flex items-center justify-center">
                <span className="font-heading text-sm font-black" style={{ color: '#0D0D0D' }}>JBM</span>
              </div>
              <span className="font-heading text-xl tracking-widest" style={{ color: '#FFFFFF' }}>JBMSPORTS</span>
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: '#7A9E8C' }}>
              Serve. Train. Dominate.<br />
              Zimbabwe's premier tennis coaching academy and equipment store, based in Harare.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Globe, label: 'Instagram' },
                { Icon: Share2, label: 'Facebook' },
                { Icon: X, label: 'Twitter/X' },
                { Icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ Icon, label }) => (
                <motion.button
                  key={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-lime"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#7A9E8C' }}
                  whileHover={{ scale: 1.1, borderColor: '#C8F135' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={14} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest mb-4" style={{ color: '#FFFFFF' }}>QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigate(pageMap[link])}
                    className="text-xs hover:text-lime transition-colors"
                    style={{ color: '#7A9E8C' }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coaching */}
          <div>
            <h4 className="font-heading text-sm tracking-widest mb-4" style={{ color: '#FFFFFF' }}>COACHING</h4>
            <ul className="space-y-2.5">
              {coachingLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigate('coaching')}
                    className="text-xs hover:text-lime transition-colors text-left"
                    style={{ color: '#7A9E8C' }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-widest mb-4" style={{ color: '#FFFFFF' }}>CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs" style={{ color: '#7A9E8C' }}>
                <MapPin size={12} className="text-lime flex-shrink-0 mt-0.5" />
                Borrowdale, Harare, Zimbabwe
              </li>
              <li className="flex items-center gap-2 text-xs" style={{ color: '#7A9E8C' }}>
                <Phone size={12} className="text-lime flex-shrink-0" />
                +263 77 123 4567
              </li>
              <li className="flex items-center gap-2 text-xs" style={{ color: '#7A9E8C' }}>
                <Mail size={12} className="text-lime flex-shrink-0" />
                info@jbmsports.co.zw
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#7A9E8C' }}
        >
          <p className="text-xs">© 2025 JBMSPORTS. All Rights Reserved.</p>
          <p className="text-xs">Made with ❤️ in Zimbabwe</p>
        </div>
      </div>
    </footer>
  )
}
