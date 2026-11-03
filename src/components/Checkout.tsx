import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Store, Truck, Check, Banknote, Building2, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, buildWhatsAppMessage } from '@/utils/format';
import { config } from '@/data/config';
import type { PaymentMethod } from '@/types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Checkout({ isOpen, onClose }: CheckoutProps) {
  const { items, total, clearCart, closeCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<'retiro' | 'envio'>('retiro');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('efectivo');
  const [address, setAddress] = useState('');
  const [reference, setReference] = useState('');
  const [observations, setObservations] = useState('');
  const [sent, setSent] = useState(false);
  const surcharge = paymentMethod === 'efectivo' ? 0 : Math.round(total * 0.05);
  const finalTotal = total + surcharge;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) return;
    if (deliveryMode === 'envio' && !address.trim()) return;

    const message = buildWhatsAppMessage({
      orderItems: items.map((i) => ({
        name: i.name,
        optionLabel: i.optionLabel,
        quantity: i.quantity,
        price: i.price,
      })),
      subtotal: total,
      total: finalTotal,
      surcharge,
      paymentMethod,
      customerName,
      deliveryMode,
      address: deliveryMode === 'envio' ? address : undefined,
      reference: reference.trim() || undefined,
      observations: observations.trim() || undefined,
    });

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setSent(true);
  };

  const handleClose = () => {
    if (sent) {
      clearCart();
      closeCart();
      setSent(false);
      setCustomerName('');
      setAddress('');
      setReference('');
      setObservations('');
      setDeliveryMode('retiro');
      setPaymentMethod('efectivo');
    }
    onClose();
  };

  const nameMissing = !customerName.trim();
  const addressMissing = deliveryMode === 'envio' && !address.trim();
  const canSubmit = !nameMissing && !addressMissing && items.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-[80]"
          />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-brand-cream rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-brand-blue text-brand-cream px-6 py-4 flex items-center justify-between rounded-t-3xl sticky top-0 z-10">
                <span className="font-display text-2xl tracking-wide">FINALIZAR PEDIDO</span>
                <button onClick={handleClose} className="hover:text-brand-orange transition-colors" aria-label="Cerrar">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {sent ? (
                /* Success state */
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-display text-3xl text-brand-blue tracking-wide mb-2">
                    ¡Pedido enviado!
                  </h3>
                  <p className="text-brand-blue/70 mb-6">
                    Te redirigimos a WhatsApp para confirmar tu pedido con el local.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-brand-orange hover:bg-brand-orangeDark text-white font-bold px-8 py-3 rounded-full uppercase tracking-wide transition-all hover:scale-105"
                  >
                    Volver al inicio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  {/* Order summary */}
                  <div>
                    <h3 className="font-display text-lg text-brand-blue tracking-wide uppercase mb-3">
                      Resumen del pedido
                    </h3>
                    <div className="bg-white rounded-xl p-4 space-y-2 border border-brand-blue/10">
                      {items.map((item) => (
                        <div key={item.cartId} className="flex justify-between text-sm">
                          <span className="text-brand-blue">
                            <span className="font-bold">{item.quantity}x</span> {item.name}{' '}
                            <span className="text-brand-blue/50">({item.optionLabel})</span>
                          </span>
                          <span className="font-semibold text-brand-blue">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-brand-blue/10 pt-2 flex justify-between">
                        <span className="font-semibold text-brand-blue">Subtotal</span>
                        <span className="font-semibold text-brand-blue">{formatPrice(total)}</span>
                      </div>
                      {surcharge > 0 && (
                        <div className="flex justify-between text-sm text-brand-orange">
                          <span>Recargo por medio de pago (5%)</span>
                          <span className="font-semibold">{formatPrice(surcharge)}</span>
                        </div>
                      )}
                      <div className="border-t border-brand-blue/10 pt-2 flex justify-between">
                        <span className="font-display text-xl text-brand-blue tracking-wide">TOTAL</span>
                        <span className="font-display text-xl text-brand-orange">{formatPrice(finalTotal)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer name */}
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-wide mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Tu nombre"
                      required
                      className="w-full bg-white border-2 border-brand-blue/20 focus:border-brand-orange rounded-xl px-4 py-3 text-brand-blue outline-none transition-colors"
                    />
                  </div>

                  {/* Delivery mode */}
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-wide mb-1.5">
                      Modalidad *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDeliveryMode('retiro')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${
                          deliveryMode === 'retiro'
                            ? 'bg-brand-blue text-brand-cream shadow-md'
                            : 'bg-white text-brand-blue border-2 border-brand-blue/20 hover:border-brand-blue'
                        }`}
                      >
                        <Store className="w-4 h-4" />
                        Retiro
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMode('envio')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${
                          deliveryMode === 'envio'
                            ? 'bg-brand-blue text-brand-cream shadow-md'
                            : 'bg-white text-brand-blue border-2 border-brand-blue/20 hover:border-brand-blue'
                        }`}
                      >
                        <Truck className="w-4 h-4" />
                        Envío
                      </button>
                    </div>
                  </div>

                  {/* Payment method */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-sm font-bold text-brand-blue uppercase tracking-wide">
                        Medio de pago *
                      </label>
                      <span className="text-xs font-semibold text-brand-orange">+5% en transferencia y Mercado Pago</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {([
                        { key: 'efectivo', label: 'Efectivo', icon: Banknote },
                        { key: 'transferencia', label: 'Transferencia', icon: Building2 },
                        { key: 'mercadopago', label: 'Mercado Pago', icon: CreditCard },
                      ] as { key: PaymentMethod; label: string; icon: typeof Banknote }[]).map((method) => {
                        const Icon = method.icon;
                        const active = paymentMethod === method.key;
                        return (
                          <button
                            key={method.key}
                            type="button"
                            onClick={() => setPaymentMethod(method.key)}
                            className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-bold text-xs uppercase tracking-wide transition-all ${
                              active
                                ? 'bg-brand-blue text-brand-cream shadow-md'
                                : 'bg-white text-brand-blue border-2 border-brand-blue/20 hover:border-brand-blue'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {method.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Address (conditional) */}
                  {deliveryMode === 'envio' && (
                    <div className="animate-slide-up">
                      <label className="block text-sm font-bold text-brand-blue uppercase tracking-wide mb-1.5">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Calle y número"
                        required={deliveryMode === 'envio'}
                        className="w-full bg-white border-2 border-brand-blue/20 focus:border-brand-orange rounded-xl px-4 py-3 text-brand-blue outline-none transition-colors"
                      />
                    </div>
                  )}

                  {/* Reference */}
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-wide mb-1.5">
                      Referencias (opcional)
                    </label>
                    <input
                      type="text"
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      placeholder="Piso, departamento, entre calles..."
                      className="w-full bg-white border-2 border-brand-blue/20 focus:border-brand-orange rounded-xl px-4 py-3 text-brand-blue outline-none transition-colors"
                    />
                  </div>

                  {/* Observations */}
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-wide mb-1.5">
                      Observaciones (opcional)
                    </label>
                    <textarea
                      value={observations}
                      onChange={(e) => setObservations(e.target.value)}
                      placeholder="Sin cebolla, bien cocida, salsa extra..."
                      rows={3}
                      className="w-full bg-white border-2 border-brand-blue/20 focus:border-brand-orange rounded-xl px-4 py-3 text-brand-blue outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-brand-blue/30 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl uppercase tracking-wide transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Confirmar pedido por WhatsApp
                  </button>
                  {!canSubmit && (
                    <p className="text-center text-xs text-brand-red/80 font-medium">
                      Completá los campos obligatorios para continuar
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
