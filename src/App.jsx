import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import CartDrawer from './components/CartDrawer'
import ProgressBar from './components/ProgressBar'
import ThemeToggle from './components/ThemeToggle'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CoachingPage from './pages/CoachingPage'
import AboutPage from './pages/AboutPage'
import BookPage from './pages/BookPage'

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
}

const pages = {
  home: HomePage,
  shop: ShopPage,
  coaching: CoachingPage,
  book: BookPage,
  about: AboutPage,
}

function AppInner() {
  const [activePage, setActivePage] = useState('home')
  const [navigating, setNavigating] = useState(false)

  const navigate = (page) => {
    if (page === activePage) return
    setNavigating(true)
    setTimeout(() => {
      setActivePage(page)
      setNavigating(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const PageComponent = pages[activePage] || HomePage

  return (
    <div className="relative min-h-screen bg-dark text-primary overflow-x-hidden">
      <ProgressBar navigating={navigating} />
      <Navbar activePage={activePage} navigate={navigate} />

      {/* Mobile floating theme toggle — top-right, above bottom nav */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <PageComponent navigate={navigate} />
        </motion.div>
      </AnimatePresence>

      <BottomNav activePage={activePage} navigate={navigate} />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </ThemeProvider>
  )
}
