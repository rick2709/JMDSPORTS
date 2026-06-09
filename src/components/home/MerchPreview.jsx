import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShoppingBag, Plus } from 'lucide-react'

const products = [
  { name: 'Wilson Pro Staff Racket', price: 85, img: '/racket.jpg', category: 'Rackets' },
  { name: 'Babolat Pure Drive Racket', price: 95, img: '/racket on ground.jpg', category: 'Rackets' },
  { name: 'Nike Court Tennis Shoes', price: 75, img: '/court.jpg', category: 'Shoes' },
  { name: 'Nike Dri-FIT Tennis Shorts', price: 35, img: '/blackgirlracket.png', category: 'Clothing' },
  { name: 'Vibration Dampeners 4-Pack', price: 8, img: '/balls.jpg', category: 'Accessories' },
  { name: 'Luxilon Tennis Strings', price: 18, img: '/tennishand.jpg', category: 'Accessories' },
]

function ProductCard({ product, index }) {
  const [added, setAdded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-surface rounded-2xl overflow-hidden flex-shrink-0 w-60 md:w-auto group"
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
          <span className="text-[10px] font-medium tracking-widest text-muted bg-dark/70 px-2 py-0.5 rounded-full uppercase">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-primary text-sm font-medium leading-snug mb-1">{product.name}</h3>
        <p className="text-lime font-heading text-lg mb-3">${product.price} USD</p>

        <motion.button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-heading tracking-wider transition-all ${
            added
              ? 'bg-lime text-dark'
              : 'border border-lime/40 text-lime hover:bg-lime hover:text-dark'
          }`}
          whileTap={{ scale: 0.97 }}
        >
          {added ? (
            <>✓ ADDED</>
          ) : (
            <>
              <Plus size={14} />
              ADD TO CART
            </>
          )}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-lime text-sm tracking-[0.3em] uppercase mb-3"
            >
              Shop The Gear
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl text-primary leading-tight"
            >
              EVERYTHING YOU
              <br />NEED ON COURT
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('shop')}
            className="flex items-center gap-2 border border-white/20 text-muted hover:text-lime hover:border-lime px-5 py-2.5 rounded-full text-sm font-heading tracking-wider transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingBag size={16} />
            VIEW ALL GEAR
          </motion.button>
        </div>

        {/* Horizontal scroll shelf */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
