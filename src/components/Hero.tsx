import { motion } from 'framer-motion';
import { Flame, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream pt-28 pb-20 sm:pt-28 sm:pb-24 lg:pt-24 lg:pb-16">
      {/* Decorative checkerboard top strip */}
      <div className="absolute top-20 left-0 right-0 h-6 checkerboard-sm opacity-30" />

      {/* Oversized brand watermark */}
      <img
        src="/LogoTulu.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[47%] z-0 w-[min(118vw,1100px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.07] mix-blend-multiply sm:w-[min(100vw,1100px)] lg:left-[56%] lg:top-[54%] lg:w-[min(78vw,1120px)]"
      />

      {/* Decorative shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1 text-center lg:text-left pb-4 lg:pb-0"
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue text-brand-cream px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3.5 h-3.5 text-brand-orange" fill="currentColor" />
              Hamburguesería Artesanal
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-blue leading-[0.95] tracking-wide mb-4">
              LAS HAMBURGUESAS<br />
              QUE TE HACEN<br />
              <span className="text-brand-orange">VOLVER.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-blue/80 mb-8 max-w-md mx-auto lg:mx-0 font-medium">
              Carne, cheddar y mucho sabor. Bienvenido a La Cocina de Tulu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueDark text-brand-cream font-bold px-8 py-4 rounded-full text-base uppercase tracking-wide transition-all hover:scale-105 shadow-xl"
              >
                Ver el menú
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold px-8 py-4 rounded-full text-base uppercase tracking-wide transition-all hover:scale-105 shadow-xl"
              >
                <Flame className="w-5 h-5" />
                Hacer mi pedido
              </a>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Checkerboard background block */}
              <div className="absolute -top-6 -right-6 w-full h-full checkerboard rounded-3xl opacity-40" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-brand-blue">
                <img
                  src="https://images.pexels.com/photos/3915915/pexels-photo-3915915.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                  alt="Hamburguesa doble con cheddar fundido, bacon y papas fritas"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating price tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-brand-orange text-white rounded-2xl px-5 py-3 shadow-xl rotate-[-4deg]"
              >
                <div className="text-xs uppercase font-bold tracking-widest opacity-90">Desde</div>
                <div className="font-display text-3xl leading-none">$16.000</div>
              </motion.div>

              {/* Floating sticker */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-3 left-6 bg-brand-cream text-brand-blue rounded-full px-4 py-2 shadow-lg rotate-[6deg] border-2 border-brand-blue"
              >
                <div className="font-display text-sm leading-tight">¡INCLUYEN<br />PAPAS!</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom checkerboard */}
      <div className="absolute bottom-0 left-0 right-0 h-6 checkerboard-sm opacity-30" />
    </section>
  );
}
