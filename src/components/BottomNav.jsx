import { motion } from 'framer-motion'
import { Home, Trophy, ShoppingBag, Calendar, User } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

const tabs = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'sports', label: 'Sports', Icon: Trophy },
  { id: 'shop', label: 'Shop', Icon: ShoppingBag },
  { id: 'book', label: 'Book', Icon: Calendar },
  { id: 'about', label: 'About', Icon: User },
]

const SPORT_IDS = ['tennis', 'hockey', 'swimming', 'boxing']

export default function BottomNav({ activePage, navigate }) {
  const { isDark } = useTheme()
  const { count, setIsOpen } = useCart()

  const isActive = (id) => activePage === id || (id === 'sports' && SPORT_IDS.includes(activePage))

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        background: isDark ? 'rgba(13,13,13,0.88)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #E0E0E0',
        transition: 'background 0.4s ease, border-color 0.3s ease',
      }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map(({ id, label, Icon }) => {
          const active = isActive(id)
          const isShop = id === 'shop'
          return (
            <motion.button
              key={id}
              onClick={() => {
                if (isShop && activePage === 'shop') { setIsOpen(true); return }
                navigate(id)
              }}
              className="flex flex-col items-center gap-0.5 min-w-[44px] py-1 px-2 relative"
              whileTap={{ scale: 0.8 }}
            >
              {active && <motion.div layoutId="bottom-indicator" className="absolute inset-0 bg-lime/10 rounded-xl" />}
              <div className="relative">
                <Icon size={22} strokeWidth={active ? 2.5 : 1.5} className={active ? 'text-lime' : 'text-muted'} fill={active ? 'rgba(200,241,53,0.15)' : 'none'} />
                {isShop && count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-lime text-[#0D0D0D] text-[9px] font-bold flex items-center justify-center">{count > 9 ? '9+' : count}</span>
                )}
              </div>
              <span className={`text-[10px] font-medium tracking-wide ${active ? 'text-lime' : 'text-muted'}`}>{label}</span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
