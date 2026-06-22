import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'sports', label: 'Sports' },
  { id: 'shop', label: 'Shop' },
  { id: 'book', label: 'Book' },
  { id: 'about', label: 'About' },
]

export default function Navbar({ activePage, navigate }) {
  const { isDark } = useTheme()
  const { count, setIsOpen } = useCart()

  const navBg = isDark ? 'rgba(13,13,13,0.85)' : 'rgba(242,242,242,0.88)'
  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'

  const isActive = (id) => activePage === id || (id === 'sports' && ['tennis','hockey','swimming','boxing'].includes(activePage))

  return (
    <nav
      className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4"
      style={{ background: navBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: `1px solid ${borderColor}`, transition: 'background 0.4s ease, border-color 0.3s ease' }}
    >
      <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.02 }} onClick={() => navigate('home')}>
        <div className="w-9 h-9 bg-lime rounded-full flex items-center justify-center">
          <span className="text-[#0D0D0D] font-heading text-sm font-black">JBM</span>
        </div>
        <span className="font-heading text-xl tracking-widest text-primary">JBMSPORTS</span>
      </motion.div>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <motion.button
            key={link.id}
            onClick={() => navigate(link.id)}
            className={`relative text-sm font-medium tracking-wider uppercase transition-colors ${isActive(link.id) ? 'text-lime' : 'text-muted hover:text-primary'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {link.label}
            {isActive(link.id) && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime rounded-full" />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <motion.button onClick={() => setIsOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="relative p-2 text-muted hover:text-primary transition-colors">
          <ShoppingCart size={22} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-lime text-[#0D0D0D] text-[10px] font-bold flex items-center justify-center">{count > 9 ? '9+' : count}</span>
          )}
        </motion.button>
        <motion.button
          onClick={() => navigate('book')}
          className={`font-heading text-sm px-5 py-2 rounded-full tracking-wider transition-all ${isDark ? 'bg-lime text-[#0D0D0D] neon-glow' : 'bg-forest text-white'}`}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
        >
          BOOK NOW
        </motion.button>
      </div>
    </nav>
  )
}
