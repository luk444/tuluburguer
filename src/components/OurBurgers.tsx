import { motion } from 'framer-motion';
import { UtensilsCrossed, Beef, Flame } from 'lucide-react';

const features = [
  {
    icon: Beef,
    title: 'CARNE PREMIUM',
    text: 'Medallones jugosos preparados al momento, sellados a la plancha para mantener todo su sabor.',
  },
  {
    icon: Flame,
    title: 'CHEDDAR FUNDIDO',
    text: 'Cheddar derretido en cada capa. Mucho queso, mucho sabor, sin medias tintas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'PAPAS INCLUIDAS',
    text: 'Cada combo viene con papas crujientes. Sin sorpresas, sin extra. Dirección de la casa.',
  },
];

export default function OurBurgers() {
  return (
    <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
      {/* Decorative checkerboard */}
      <div className="absolute top-0 left-0 right-0 h-6 checkerboard-sm opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-6 checkerboard-sm opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full checkerboard rounded-3xl opacity-25" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-brand-orange">
                <img
                  src="https://images.pexels.com/photos/34407496/pexels-photo-34407496.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Hamburguesa doble gourmet con toppings frescos"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating sticker */}
              <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white rounded-2xl px-6 py-4 shadow-xl rotate-[-4deg]">
                <div className="font-display text-2xl leading-tight">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Artesanal</div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-cream tracking-wide leading-[0.95] mb-6">
              NO HACEMOS<br />
              HAMBURGUESAS<br />
              COMUNES.<br />
              <span className="text-brand-orange">HACEMOS TULU.</span>
            </h2>

            <div className="space-y-5 mt-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center ring-1 ring-brand-orange/40">
                    <f.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-brand-cream tracking-wide mb-0.5">
                      {f.title}
                    </h3>
                    <p className="text-brand-cream/70 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
