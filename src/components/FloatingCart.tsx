import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function FloatingCart() {
  const { itemCount, total, openCart } = useCart();

  if (itemCount === 0) return null;

  return (
    <button
      onClick={openCart}
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-brand-orange hover:bg-brand-orangeDark text-white py-3.5 px-5 rounded-2xl shadow-2xl flex items-center justify-between transition-all active:scale-95"
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-brand-orange text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        </div>
        <span className="font-bold text-sm uppercase tracking-wide">Ver pedido</span>
      </div>
      <span className="font-display text-xl">${total.toLocaleString('es-AR')}</span>
    </button>
  );
}
