import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';
import { useState } from 'react';
import Checkout from './Checkout';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, incrementItem, decrementItem, removeItem, total, itemCount } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 bg-black/50 z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-brand-cream z-[70] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="bg-brand-blue text-brand-cream px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-orange" />
                  <span className="font-display text-xl tracking-wide">TU PEDIDO</span>
                  {itemCount > 0 && (
                    <span className="bg-brand-orange text-white text-xs font-bold rounded-full px-2 py-0.5">
                      {itemCount}
                    </span>
                  )}
                </div>
                <button onClick={closeCart} className="hover:text-brand-orange transition-colors" aria-label="Cerrar">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                      <ShoppingBag className="w-10 h-10 text-brand-blue/40" />
                    </div>
                    <h3 className="font-display text-2xl text-brand-blue tracking-wide mb-2">
                      Tu carrito está vacío
                    </h3>
                    <p className="text-brand-blue/60 text-sm mb-6">
                      Agregá hamburguesas y extras para armar tu pedido.
                    </p>
                    <button
                      onClick={closeCart}
                      className="bg-brand-orange hover:bg-brand-orangeDark text-white font-bold px-6 py-3 rounded-full uppercase text-sm tracking-wide transition-all hover:scale-105"
                    >
                      Ver el menú
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.cartId}
                        className="bg-white rounded-xl p-3 shadow-sm border border-brand-blue/10 flex gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg text-brand-blue tracking-wide leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-xs text-brand-blue/60 mb-1">{item.optionLabel}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => decrementItem(item.cartId)}
                                className="w-7 h-7 rounded-full bg-brand-cream hover:bg-brand-blue/10 flex items-center justify-center transition-colors"
                                aria-label="Restar"
                              >
                                <Minus className="w-3.5 h-3.5 text-brand-blue" />
                              </button>
                              <span className="font-bold text-brand-blue w-6 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => incrementItem(item.cartId)}
                                className="w-7 h-7 rounded-full bg-brand-cream hover:bg-brand-blue/10 flex items-center justify-center transition-colors"
                                aria-label="Sumar"
                              >
                                <Plus className="w-3.5 h-3.5 text-brand-blue" />
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="font-display text-lg text-brand-orange leading-none">
                                {formatPrice(item.price * item.quantity)}
                              </div>
                              <button
                                onClick={() => removeItem(item.cartId)}
                                className="text-brand-red/70 hover:text-brand-red text-xs flex items-center gap-1 mt-1 ml-auto"
                              >
                                <Trash2 className="w-3 h-3" />
                                Quitar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-brand-blue/15 bg-white px-5 py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl text-brand-blue tracking-wide">TOTAL</span>
                    <span className="font-display text-2xl text-brand-orange">{formatPrice(total)}</span>
                  </div>
                  <button
                    onClick={() => setCheckoutOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold py-4 rounded-xl uppercase tracking-wide transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Finalizar pedido
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={closeCart}
                    className="w-full text-brand-blue font-semibold text-sm uppercase tracking-wide hover:text-brand-orange transition-colors"
                  >
                    Seguir comprando
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout modal */}
      <Checkout isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}
