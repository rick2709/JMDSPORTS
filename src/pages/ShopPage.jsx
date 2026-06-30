import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { SHOP_PRODUCTS as products } from '../config/products'

function ImageCarousel({ images, name }) {
  const [current, setCurrent] = useState(0)

  const prev = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c + 1) % images.length)
  }

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={14} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === current ? '#C8F135' : 'rgba(255,255,255,0.5)' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProductCard({ product, index }) {
  const { addItem } = useCart()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({ name: product.name, price: product.price, img: product.images[0] })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="card-surface rounded-2xl overflow-hidden flex flex-col"
      whileHover={{ y: -6 }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <ImageCarousel images={product.images} name={product.name} />

        {/* Badge */}
        <div
          className="absolute top-3 left-3 text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full z-10"
          style={{ background: product.badgeColor, color: product.badgeText }}
        >
          {product.badge}
        </div>

        {/* Category pill */}
        <div className="absolute top-3 right-3 text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-black/50 text-white/80 z-10">
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-lg text-primary tracking-wide mb-1">{product.name}</h3>
        <p className="text-muted text-xs leading-relaxed mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-heading text-2xl text-lime">${product.price}</span>

          <motion.button
            onClick={handleAdd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-heading text-xs tracking-wider px-4 py-2.5 rounded-full transition-all"
            style={{
              background: added ? 'rgba(200,241,53,0.15)' : '#C8F135',
              color: added ? '#C8F135' : '#0D0D0D',
              border: added ? '1px solid #C8F135' : '1px solid transparent',
            }}
          >
            <ShoppingCart size={13} />
            {added ? 'ADDED ✓' : 'ADD TO CART'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ShopPage({ navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <main className="min-h-screen pb-24 md:pb-0 pt-20 md:pt-24">
      {/* Header */}
      <div ref={ref} className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-lime text-sm tracking-[0.3em] uppercase mb-3"
          >
            In Stock Now
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl text-primary mb-4"
          >
            THE SHOP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-md text-sm leading-relaxed"
          >
            Premium gear, sourced and stocked by JBMSPORTS. Add to cart and we'll confirm your order via WhatsApp.
          </motion.p>
        </div>
      </div>

      {/* Product grid */}
      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* WhatsApp note */}
      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-lime/20 bg-lime/5 p-8 text-center"
          >
            <p className="text-lime text-sm tracking-[0.2em] uppercase mb-2">How it works</p>
            <p className="text-primary font-heading text-xl mb-2">ADD TO CART → SEND VIA WHATSAPP</p>
            <p className="text-muted text-sm max-w-md mx-auto">
              Add your items to the cart, then tap "Send Order via WhatsApp". We'll confirm availability, size, and arrange delivery directly with you.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  )
}
