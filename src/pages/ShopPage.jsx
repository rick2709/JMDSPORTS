import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Filter } from 'lucide-react'
import Footer from '../components/Footer'

const allProducts = [
  { name: 'Wilson Pro Staff 97 Racket', price: 85, category: 'Rackets', img: '/racket.jpg' },
  { name: 'Babolat Pure Drive 2024', price: 95, category: 'Rackets', img: '/racket.jpg' },
  { name: 'Head Speed MP Racket', price: 80, category: 'Rackets', img: '/racket on ground.jpg' },
  { name: 'Nike Court Zoom Shoes', price: 75, category: 'Shoes', img: '/court.jpg' },
  { name: 'Adidas Adizero Tennis Shoes', price: 70, category: 'Shoes', img: '/court.jpg' },
  { name: 'Nike Dri-FIT Shorts (Black)', price: 35, category: 'Clothing', img: '/blackgirlracket.png' },
  { name: 'Nike Court Polo Shirt', price: 45, category: 'Clothing', img: '/blackgirlracket.png' },
  { name: 'Vibration Dampeners x4 Pack', price: 8, category: 'Accessories', img: '/balls.jpg' },
  { name: 'Luxilon ALU Power Strings', price: 18, category: 'Accessories', img: '/tennishand.jpg' },
  { name: 'Overgrip Pack x3', price: 12, category: 'Accessories', img: '/tennishand.jpg' },
  { name: 'Tennis Ball Can (3 balls)', price: 6, category: 'Accessories', img: '/balls.jpg' },
  { name: 'Head Radical Tennis Bag', price: 55, category: 'Accessories', img: '/racket on ground.jpg' },
]

const categories = ['All', 'Rackets', 'Shoes', 'Clothing', 'Accessories']

function ProductCard({ product, index }) {
  const [added, setAdded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="card-surface rounded-2xl overflow-hidden"
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(200, 241, 53, 0.15)' }}
    >
      <div className="relative overflow-hidden aspect-square">
        <motion.img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-medium tracking-widest text-muted bg-dark/80 px-2 py-0.5 rounded-full uppercase">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-primary text-sm font-medium leading-snug mb-2">{product.name}</h3>
        <p className="text-lime font-heading text-xl mb-4">${product.price} USD</p>

        <motion.button
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000) }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-heading tracking-wider transition-all ${
            added ? 'bg-lime text-dark' : 'border border-lime/40 text-lime hover:bg-lime hover:text-dark'
          }`}
          whileTap={{ scale: 0.97 }}
        >
          {added ? '✓ ADDED TO CART' : <><Plus size={14} />ADD TO CART</>}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function ShopPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      {/* Hero */}
      <div
        ref={ref}
        className="relative py-20 px-6 md:px-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A3C2E 0%, #0D0D0D 60%)',
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 rounded-full blur-3xl" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-lime text-sm tracking-[0.3em] uppercase mb-3"
        >
          Gear Up
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl text-primary mb-4"
        >
          SHOP THE
          <span className="text-lime"> COURT</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="text-muted max-w-md"
        >
          Premium tennis equipment and apparel, curated by our coaches and delivered across Zimbabwe.
        </motion.p>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 md:top-[72px] z-40 bg-dark/95 backdrop-blur-md border-b border-surface-border px-6 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <Filter size={14} className="text-muted flex-shrink-0" />
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-heading tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-lime text-dark'
                  : 'border border-surface-border text-muted hover:border-lime hover:text-lime'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.p className="text-muted text-sm mb-6">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
          </motion.p>

          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </main>
  )
}
