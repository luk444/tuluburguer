import { Instagram, MessageCircle, Flame } from 'lucide-react';
import { config } from '@/data/config';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Extras', href: '#extras' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const waLink = `https://wa.me/${config.whatsappNumber}`;

  return (
    <footer className="bg-brand-blueDark text-brand-cream relative">
      {/* Checkerboard top strip */}
      <div className="h-6 checkerboard-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/LogoTulu.png"
                alt="La Cocina de Tulu"
                className="w-16 h-16 object-contain"
              />
              <div className="leading-none">
                <div className="font-display text-lg tracking-wide">LA COCINA DE TULU</div>
                <div className="text-[10px] text-brand-orange font-semibold tracking-widest uppercase">
                  Hamburguesería
                </div>
              </div>
            </div>
            <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              {config.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="text-center">
            <h4 className="font-display text-lg text-brand-orange tracking-wide mb-3 uppercase">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-brand-cream/70 hover:text-brand-orange transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg text-brand-orange tracking-wide mb-3 uppercase">
              Seguinos
            </h4>
            <div className="flex justify-center md:justify-end gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href={config.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-brand-orange flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-brand-cream/60 text-xs">
              <Flame className="w-3.5 h-3.5 text-brand-orange" />
              Hecho con mucho sabor
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-cream/15 mt-10 pt-6 text-center">
          <p className="text-brand-cream/50 text-sm tracking-wide">
            LA COCINA DE TULU &copy; 2026 — HECHO CON MUCHO SABOR.
          </p>
        </div>
      </div>
    </footer>
  );
}
