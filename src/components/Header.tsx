import { useState, useEffect } from 'react';
import { ShoppingCart, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Extras', href: '#extras' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream shadow-lg border-b-2 border-brand-blue'
          : 'bg-brand-cream/95 backdrop-blur-sm border-b border-brand-blue/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src="/LogoTulu.png"
              alt="La Cocina de Tulu"
              className="w-14 h-14 md:w-20 md:h-20 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block leading-none">
              <div className="font-display text-brand-blue text-lg md:text-xl tracking-wide">
                LA COCINA DE TULU
              </div>
              <div className="text-[10px] text-brand-orange font-semibold tracking-widest uppercase">
                Hamburguesería
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-brand-blue hover:text-brand-orange transition-colors relative group text-sm uppercase tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="#menu"
              className="hidden md:inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold px-4 py-2.5 rounded-full text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md"
            >
              <Flame className="w-4 h-4" />
              Hacer mi pedido
            </a>

            <button
              onClick={openCart}
              className="relative bg-brand-blue hover:bg-brand-blueDark text-brand-cream p-2.5 rounded-full transition-all hover:scale-105 shadow-md"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brand-blue p-2"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-brand-blue/20 py-4 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-2 font-semibold text-brand-blue hover:text-brand-orange hover:bg-brand-cream/50 rounded-lg transition-colors uppercase text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 rounded-full uppercase text-sm tracking-wide"
            >
              <Flame className="w-4 h-4" />
              Hacer mi pedido
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
