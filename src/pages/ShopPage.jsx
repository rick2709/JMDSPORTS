import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Filter, Star } from 'lucide-react'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

function StarRating({ count }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={10} className={i <= count ? 'text-[#F5A623] fill-[#F5A623]' : 'text-muted'} />
      ))}
    </span>
  )
}

const allProducts = [
  // ── TENNIS NEW ──
  { id: 'tn1', name: 'Wilson Pro Staff 97 Racket', price: 85, sport: 'tennis', condition: 'new', img: '/racket.jpg', category: 'Rackets' },
  { id: 'tn2', name: 'Babolat Pure Drive 2024', price: 95, sport: 'tennis', condition: 'new', img: '/racket.jpg', category: 'Rackets' },
  { id: 'tn3', name: 'Nike Court Zoom Shoes', price: 75, sport: 'tennis', condition: 'new', img: '/court.jpg', category: 'Shoes' },
  { id: 'tn4', name: 'Nike Dri-FIT Tennis Shorts', price: 35, sport: 'tennis', condition: 'new', img: '/blackgirlracket.png', category: 'Clothing' },
  { id: 'tn5', name: 'Luxilon ALU Power Strings', price: 18, sport: 'tennis', condition: 'new', img: '/tennishand.jpg', category: 'Accessories' },
  { id: 'tn6', name: 'Vibration Dampeners x4', price: 8, sport: 'tennis', condition: 'new', img: '/balls.jpg', category: 'Accessories' },
  // ── TENNIS PRE-LOVED ──
  { id: 'tp1', name: 'Head Speed MP Racket (2022)', price: 40, sport: 'tennis', condition: 'preloved', img: '/racket on ground.jpg', category: 'Rackets', conditionRating: 4, conditionNote: 'Restrung, grip replaced' },
  { id: 'tp2', name: 'Wilson Clash 100 (2021)', price: 35, sport: 'tennis', condition: 'preloved', img: '/racket.jpg', category: 'Rackets', conditionRating: 3, conditionNote: 'Minor cosmetic wear on frame' },
  { id: 'tp3', name: 'Nike Court Shoes Size 10', price: 28, sport: 'tennis', condition: 'preloved', img: '/court.jpg', category: 'Shoes', conditionRating: 4, conditionNote: 'Worn 3 months, good sole' },
  { id: 'tp4', name: 'Babolat Shorts (M)', price: 12, sport: 'tennis', condition: 'preloved', img: '/blackgirlracket.png', category: 'Clothing', conditionRating: 3, conditionNote: 'Faded slightly, no damage' },

  // ── HOCKEY NEW ──
  { id: 'hn1', name: 'Grays GX5000 Hockey Stick', price: 65, sport: 'hockey', condition: 'new', img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=400&q=80', category: 'Sticks' },
  { id: 'hn2', name: 'Adidas Hockey Shoes', price: 70, sport: 'hockey', condition: 'new', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=402&q=80', category: 'Shoes' },
  { id: 'hn3', name: 'TK Total Two Goalkeeper Gloves', price: 45, sport: 'hockey', condition: 'new', img: 'https://images.unsplash.com/photo-1615218988730-dc8f6b16c7e3?w=400&q=80', category: 'Protective' },
  { id: 'hn4', name: 'Malik Hockey Shin Guards', price: 22, sport: 'hockey', condition: 'new', img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=401&q=80', category: 'Protective' },
  { id: 'hn5', name: 'Grays Hockey Ball x6', price: 15, sport: 'hockey', condition: 'new', img: 'https://images.unsplash.com/photo-1615218988730-dc8f6b16c7e3?w=401&q=80', category: 'Accessories' },
  { id: 'hn6', name: 'Adidas Hockey Jersey', price: 40, sport: 'hockey', condition: 'new', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=403&q=80', category: 'Clothing' },
  // ── HOCKEY PRE-LOVED ──
  { id: 'hp1', name: 'Grays GX3000 Stick (2022)', price: 30, sport: 'hockey', condition: 'preloved', img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=402&q=80', category: 'Sticks', conditionRating: 4, conditionNote: 'Light surface scratches' },
  { id: 'hp2', name: 'Hockey Shin Guards (M)', price: 10, sport: 'hockey', condition: 'preloved', img: 'https://images.unsplash.com/photo-1615218988730-dc8f6b16c7e3?w=402&q=80', category: 'Protective', conditionRating: 3, conditionNote: 'Used one season' },
  { id: 'hp3', name: 'Adidas Hockey Shoes Size 9', price: 32, sport: 'hockey', condition: 'preloved', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=403&q=80', category: 'Shoes', conditionRating: 4, conditionNote: 'Great condition, worn ~20x' },
  { id: 'hp4', name: 'Hockey Goalkeeper Kicker Set', price: 25, sport: 'hockey', condition: 'preloved', img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=403&q=80', category: 'Protective', conditionRating: 3, conditionNote: 'Minor foam wear' },

  // ── SWIMMING NEW ──
  { id: 'sn1', name: 'Speedo Fastskin Goggles', price: 28, sport: 'swimming', condition: 'new', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80', category: 'Eyewear' },
  { id: 'sn2', name: 'Arena Carbon Core Swimsuit', price: 55, sport: 'swimming', condition: 'new', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80', category: 'Swimwear' },
  { id: 'sn3', name: 'Speedo Swim Cap (Silicone)', price: 12, sport: 'swimming', condition: 'new', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=401&q=80', category: 'Accessories' },
  { id: 'sn4', name: 'Finis Tempo Trainer Pro', price: 38, sport: 'swimming', condition: 'new', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=401&q=80', category: 'Training Aids' },
  { id: 'sn5', name: 'Speedo Training Fins', price: 30, sport: 'swimming', condition: 'new', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=402&q=80', category: 'Training Aids' },
  { id: 'sn6', name: 'TYR Sport Swim Bag', price: 25, sport: 'swimming', condition: 'new', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=402&q=80', category: 'Bags' },
  // ── SWIMMING PRE-LOVED ──
  { id: 'sp1', name: 'Arena Powerskin Suit (M)', price: 22, sport: 'swimming', condition: 'preloved', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=403&q=80', category: 'Swimwear', conditionRating: 4, conditionNote: '5 competitions used' },
  { id: 'sp2', name: 'Speedo Training Fins Size 8', price: 14, sport: 'swimming', condition: 'preloved', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=403&q=80', category: 'Training Aids', conditionRating: 3, conditionNote: 'Some scuff marks' },
  { id: 'sp3', name: 'Swim Goggles (Anti-fog)', price: 10, sport: 'swimming', condition: 'preloved', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=404&q=80', category: 'Eyewear', conditionRating: 4, conditionNote: 'Barely used, full seal' },
  { id: 'sp4', name: 'Finis Centre Mount Snorkel', price: 16, sport: 'swimming', condition: 'preloved', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=404&q=80', category: 'Training Aids', conditionRating: 3, conditionNote: 'Good condition, cleaned' },

  // ── BOXING NEW ──
  { id: 'bn1', name: 'Everlast Pro Style Gloves 16oz', price: 48, sport: 'boxing', condition: 'new', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=400&q=80', category: 'Gloves' },
  { id: 'bn2', name: 'Title Boxing Headgear', price: 55, sport: 'boxing', condition: 'new', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80', category: 'Protective' },
  { id: 'bn3', name: 'Ringside Heavy Bag 70lb', price: 90, sport: 'boxing', condition: 'new', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=401&q=80', category: 'Equipment' },
  { id: 'bn4', name: 'Nike Boxing Shoes', price: 65, sport: 'boxing', condition: 'new', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=404&q=80', category: 'Shoes' },
  { id: 'bn5', name: 'Everlast Hand Wraps x2 pairs', price: 14, sport: 'boxing', condition: 'new', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=401&q=80', category: 'Accessories' },
  { id: 'bn6', name: 'Venum Challenger Mouthguard', price: 18, sport: 'boxing', condition: 'new', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=402&q=80', category: 'Protective' },
  // ── BOXING PRE-LOVED ──
  { id: 'bp1', name: 'Everlast 14oz Gloves', price: 22, sport: 'boxing', condition: 'preloved', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=403&q=80', category: 'Gloves', conditionRating: 4, conditionNote: 'Used 6 months, cleaned' },
  { id: 'bp2', name: 'Boxing Headgear (M)', price: 20, sport: 'boxing', condition: 'preloved', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=402&q=80', category: 'Protective', conditionRating: 3, conditionNote: 'Light padding wear' },
  { id: 'bp3', name: 'Title Speed Bag', price: 18, sport: 'boxing', condition: 'preloved', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=404&q=80', category: 'Equipment', conditionRating: 4, conditionNote: 'Good shape, minor scuffs' },
  { id: 'bp4', name: 'Ringside Boxing Shoes Size 10', price: 28, sport: 'boxing', condition: 'preloved', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=403&q=80', category: 'Shoes', conditionRating: 4, conditionNote: 'Worn ~15 sessions' },
]

const SPORTS = ['all', 'tennis', 'hockey', 'swimming', 'boxing']
const SPORT_LABELS = { all: 'ALL SPORTS', tennis: '🎾 TENNIS', hockey: '🏒 HOCKEY', swimming: '🏊 SWIMMING', boxing: '🥊 BOXING' }
const SPORT_NAMES = { tennis: 'TENNIS', hockey: 'HOCKEY', swimming: 'SWIMMING', boxing: 'BOXING' }
const CONDITIONS = ['all', 'new', 'preloved']
const CONDITION_LABELS = { all: 'ALL', new: '🟢 NEW', preloved: '🟡 PRE-LOVED' }

function ProductCard({ product, index }) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const isNew = product.condition === 'new'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
      className="card-surface rounded-2xl overflow-hidden"
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(200,241,53,0.15)' }}
    >
      <div className="relative overflow-hidden aspect-square">
        <motion.img src={product.img} alt={product.name} className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className={`text-[10px] font-heading tracking-widest px-2 py-0.5 rounded-full ${isNew ? 'bg-lime text-dark' : 'bg-[#F5A623] text-dark'}`}>
            {isNew ? 'NEW' : 'PRE-LOVED'}
          </span>
          <span className="text-[10px] font-medium tracking-widest text-muted bg-dark/80 px-2 py-0.5 rounded-full uppercase">
            {product.sport}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-primary text-sm font-medium leading-snug mb-1">{product.name}</h3>
        {!isNew && product.conditionRating && (
          <>
            <StarRating count={product.conditionRating} />
            <p className="text-muted text-xs mt-1 italic">"{product.conditionNote}"</p>
          </>
        )}
        <p className="text-lime font-heading text-xl mt-2 mb-4">${product.price} <span className="text-sm font-body">USD</span></p>
        <motion.button
          onClick={() => { addItem({ name: product.name, price: product.price, img: product.img }); setAdded(true); setTimeout(() => setAdded(false), 2000) }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-heading tracking-wider transition-all ${added ? 'bg-lime text-dark' : 'border border-lime/40 text-lime hover:bg-lime hover:text-dark'}`}
          whileTap={{ scale: 0.97 }}
        >
          {added ? '✓ ADDED TO CART' : <><Plus size={14} />ADD TO CART</>}
        </motion.button>
      </div>
    </motion.div>
  )
}

function SportSection({ sportId, products, activeCond }) {
  const newProducts = products.filter((p) => p.sport === sportId && p.condition === 'new')
  const prelovedProducts = products.filter((p) => p.sport === sportId && p.condition === 'preloved')
  const showNew = activeCond === 'all' || activeCond === 'new'
  const showPreloved = activeCond === 'all' || activeCond === 'preloved'

  if ((showNew && newProducts.length === 0) && (showPreloved && prelovedProducts.length === 0)) return null

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-surface-border" />
        <h2 className="font-heading text-xl text-lime tracking-widest">{SPORT_NAMES[sportId]} GEAR</h2>
        <div className="flex-1 h-px bg-surface-border" />
      </div>

      {showNew && newProducts.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-lime" />
            <h3 className="font-heading text-base text-primary tracking-widest">NEW {SPORT_NAMES[sportId]} GEAR</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {newProducts.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      )}

      {showPreloved && prelovedProducts.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
            <h3 className="font-heading text-base text-primary tracking-widest">PRE-LOVED {SPORT_NAMES[sportId]} GEAR</h3>
          </div>
          <p className="text-muted text-xs mb-5">Quality second-hand gear, inspected and ready to play.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {prelovedProducts.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ShopPage({ navigate }) {
  const [activeSport, setActiveSport] = useState('all')
  const [activeCond, setActiveCond] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filteredProducts = allProducts.filter((p) => {
    const sportMatch = activeSport === 'all' || p.sport === activeSport
    const condMatch = activeCond === 'all' || p.condition === activeCond
    return sportMatch && condMatch
  })

  const activeSports = activeSport === 'all' ? ['tennis', 'hockey', 'swimming', 'boxing'] : [activeSport]

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      {/* Hero */}
      <div ref={ref} className="relative py-20 px-6 md:px-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A3C2E 0%, #0D0D0D 60%)' }}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 rounded-full blur-3xl" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Gear Up</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-5xl md:text-7xl text-primary mb-4">
          SHOP THE <span className="text-lime">COURT</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-muted max-w-md">
          New and pre-loved equipment across all sports. Curated by our coaches, delivered across Zimbabwe.
        </motion.p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 md:top-[72px] z-40 bg-dark/95 backdrop-blur-md border-b border-surface-border px-6 md:px-16 py-3">
        <div className="max-w-7xl mx-auto space-y-2">
          {/* Row 1: Sport */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            <Filter size={13} className="text-muted flex-shrink-0" />
            {SPORTS.map((s) => (
              <motion.button key={s} onClick={() => setActiveSport(s)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-heading tracking-widest transition-all ${activeSport === s ? 'bg-lime text-dark' : 'border border-surface-border text-muted hover:border-lime hover:text-lime'}`}
                whileTap={{ scale: 0.95 }}>
                {SPORT_LABELS[s]}
              </motion.button>
            ))}
          </div>
          {/* Row 2: Condition */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            <span className="text-muted text-xs flex-shrink-0">Condition:</span>
            {CONDITIONS.map((c) => (
              <motion.button key={c} onClick={() => setActiveCond(c)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-heading tracking-widest transition-all ${activeCond === c ? 'bg-lime text-dark' : 'border border-surface-border text-muted hover:border-lime hover:text-lime'}`}
                whileTap={{ scale: 0.95 }}>
                {CONDITION_LABELS[c]}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm mb-8">{filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''} found</p>
          <AnimatePresence mode="wait">
            <motion.div key={`${activeSport}-${activeCond}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {activeSports.map((sportId) => (
                <SportSection key={sportId} sportId={sportId} products={filteredProducts} activeCond={activeCond} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Footer navigate={navigate} />
    </main>
  )
}
