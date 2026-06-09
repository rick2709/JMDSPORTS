import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

const WA_NUMBER = '263783316659'

function buildWhatsAppMessage(items, total) {
  const lines = items.map(
    i => `• ${i.qty}x ${i.name} — $${(i.price * i.qty).toFixed(2)}`
  ).join('\n')

  return encodeURIComponent(
    `🛒 *NEW ORDER — JBM SPORTS*\n\n` +
    `*Items:*\n${lines}\n\n` +
    `─────────────────────\n` +
    `*ORDER TOTAL: $${total.toFixed(2)} USD*\n\n` +
    `Please confirm my order and arrange delivery. Thank you! 🎾`
  )
}

export default function CartDrawer() {
  const { items, removeItem, updateQty, clearCart, total, count, isOpen, setIsOpen } = useCart()
  const { isDark } = useTheme()

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage(items, total)
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 34 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md flex flex-col shadow-2xl"
            style={{
              background: isDark ? '#111111' : '#F9F9F9',
              borderLeft: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E0E0E0',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #E8E8E8' }}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} className="text-lime" />
                <span className="font-heading text-xl tracking-widest text-primary">YOUR CART</span>
                {count > 0 && (
                  <span className="bg-lime text-[#0D0D0D] text-xs font-bold px-2 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-muted hover:text-primary hover:bg-surface transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingCart size={48} className="text-muted opacity-40" />
                  <p className="text-muted text-sm">Your cart is empty.</p>
                  <p className="text-muted text-xs">Add some gear from the shop!</p>
                </div>
              ) : (
                items.map(item => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    className="flex gap-4 p-4 rounded-2xl"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.04)' : '#F0F0F0',
                      border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #E0E0E0',
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-primary text-sm font-medium leading-snug truncate pr-2">
                        {item.name}
                      </p>
                      <p className="text-lime font-heading text-base mt-0.5">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                      <p className="text-muted text-xs">${item.price.toFixed(2)} each</p>

                      {/* Qty controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQty(item.name, -1)}
                          className="w-7 h-7 rounded-full border border-surface-border text-muted hover:border-lime hover:text-lime flex items-center justify-center transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-primary text-sm font-medium w-4 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.name, +1)}
                          className="w-7 h-7 rounded-full border border-surface-border text-muted hover:border-lime hover:text-lime flex items-center justify-center transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.name)}
                      className="self-start p-1.5 text-muted hover:text-red-400 transition-colors flex-shrink-0"
                    >
                      <Trash2 size={15} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer — Order Summary */}
            {items.length > 0 && (
              <div
                className="px-6 py-5 space-y-4"
                style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #E8E8E8' }}
              >
                {/* Totals */}
                <div className="space-y-2">
                  {items.map(item => (
                    <div key={item.name} className="flex justify-between text-xs text-muted">
                      <span className="truncate pr-4">{item.qty}× {item.name}</span>
                      <span className="flex-shrink-0">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div
                    className="flex justify-between pt-3 mt-3"
                    style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E0E0E0' }}
                  >
                    <span className="font-heading tracking-wider text-primary">TOTAL</span>
                    <span className="font-heading text-lime text-lg">${total.toFixed(2)} USD</span>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <motion.button
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-heading tracking-wider text-sm bg-[#25D366] text-white shadow-lg"
                  style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
                >
                  <MessageCircle size={18} />
                  SEND ORDER VIA WHATSAPP
                </motion.button>

                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-muted hover:text-red-400 transition-colors py-1"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
