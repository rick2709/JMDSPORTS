import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShoppingBag, Plus, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'

function StarRating({ count }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={10} className={i <= count ? 'text-[#F5A623] fill-[#F5A623]' : 'text-muted'} />
      ))}
    </span>
  )
}

const featured = [
  { name: 'Wilson Pro Staff 97 Racket', price: 85, condition: 'new', sport: 'Tennis', img: '/racket.jpg' },
  { name: 'Grays GX5000 Hockey Stick', price: 65, condition: 'new', sport: 'Hockey', img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=400&q=80' },
  { name: 'Speedo Fastskin Goggles', price: 28, condition: 'new', sport: 'Swimming', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80' },
  { name: 'Everlast Pro Gloves 16oz', price: 48, condition: 'new', sport: 'Boxing', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=400&q=80' },
  { name: 'Head Speed MP Racket (2022)', price: 40, condition: 'preloved', sport: 'Tennis', img: '/racket on ground.jpg', conditionRating: 4, conditionNote: 'Restrung, grip replaced' },
  { name: 'Everlast 14oz Gloves', price: 22, condition: 'preloved', sport: 'Boxing', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80', conditionRating: 4, conditionNote: 'Used 6 months, cleaned' },
]

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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-surface rounded-2xl overflow-hidden flex-shrink-0 w-60 md:w-auto group"
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(200,241,53,0.15)' }}
    >
      <div className="relative overflow-hidden aspect-square">
        <motion.img src={product.img} alt={product.name} className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className={`text-[10px] font-heading tracking-widest px-2 py-0.5 rounded-full ${isNew ? 'bg-lime text-dark' : 'bg-[#F5A623] text-dark'}`}>
            {isNew ? 'NEW' : 'PRE-LOVED'}
          </span>
          <span className="text-[10px] font-medium tracking-widest text-muted bg-dark/70 px-2 py-0.5 rounded-full uppercase">{product.sport}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-primary text-sm font-medium leading-snug mb-1">{product.name}</h3>
        {!isNew && product.conditionRating && <StarRating count={product.conditionRating} />}
        {!isNew && product.conditionNote && <p className="text-muted text-xs mt-0.5 italic">"{product.conditionNote}"</p>}
        <p className="text-lime font-heading text-lg mt-1 mb-3">${product.price} USD</p>
        <motion.button
          onClick={() => { addItem({ name: product.name, price: product.price, img: product.img }); setAdded(true); setTimeout(() => setAdded(false), 2000) }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-heading tracking-wider transition-all ${added ? 'bg-lime text-dark' : 'border border-lime/40 text-lime hover:bg-lime hover:text-dark'}`}
          whileTap={{ scale: 0.97 }}
        >
          {added ? <>✓ ADDED</> : <><Plus size={14} />ADD TO CART</>}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function MerchPreview({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-lime text-sm tracking-[0.3em] uppercase mb-3">Featured Gear</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl text-primary leading-tight">
              TOP PICKS ACROSS<br />ALL SPORTS
            </motion.h2>
          </div>
          <motion.button initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} onClick={() => navigate('shop')} className="flex items-center gap-2 border border-white/20 text-muted hover:text-lime hover:border-lime px-5 py-2.5 rounded-full text-sm font-heading tracking-wider transition-colors" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <ShoppingBag size={16} />VIEW ALL GEAR
          </motion.button>
        </div>
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
          {featured.map((product, i) => <ProductCard key={product.name} product={product} index={i} />)}
        </div>
      </div>
    </section>
  )
}
