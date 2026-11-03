import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Beef, Sandwich, CupSoda, Plus, Check } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';
import type { MenuItem, PriceOption } from '@/types';

const iconMap: Record<string, typeof Cookie> = {
  'carne-papas': Beef,
  'cheddar-toppings': CupSoda,
  'bastones-muzza': Cookie,
  nuggets: Sandwich,
  'lata-gaseosa': CupSoda,
};

function ExtraCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const Icon = iconMap[item.id] ?? Cookie;
  const [selectedOption, setSelectedOption] = useState<PriceOption | undefined>(
    item.priceOptions?.[0],
  );
  const [justAdded, setJustAdded] = useState(false);
  const price = item.singlePrice ?? selectedOption?.price ?? 0;
  const optionLabel = selectedOption?.label ?? 'Único';

  const handleAdd = () => {
    addItem({
      productId: item.id,
      name: item.name,
      image: item.image,
      optionLabel,
      price,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-brand-blue/10 hover:border-brand-orange/30 group"
    >
      <div className="relative h-32 sm:h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-brand-cream/90 flex items-center justify-center shadow">
          <Icon className="w-4 h-4 text-brand-blue" />
        </div>
      </div>
      <div className="p-3 sm:p-4 text-center">
        <h3 className="font-display text-lg sm:text-xl text-brand-blue tracking-wide leading-tight">
          {item.name}
        </h3>
        <p className="text-xs text-brand-blue/60 mt-1 line-clamp-2">{item.description}</p>
        {item.priceOptions && (
          <div className="flex justify-center gap-1.5 flex-wrap mt-2">
            {item.priceOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setSelectedOption(option)}
                className={`px-2 py-1 rounded-full text-[11px] font-bold transition-colors ${
                  selectedOption?.label === option.label
                    ? 'bg-brand-blue text-brand-cream'
                    : 'bg-brand-cream text-brand-blue border border-brand-blue/20'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        <div className="mt-2 font-display text-lg text-brand-orange">{formatPrice(price)}</div>
        <button
          onClick={handleAdd}
          className={`mt-2 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
            justAdded
              ? 'bg-green-600 text-white'
              : 'bg-brand-orange hover:bg-brand-orangeDark text-white'
          }`}
        >
          {justAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          {justAdded ? 'Agregado' : 'Agregar'}
        </button>
      </div>
    </motion.div>
  );
}

export default function Extras() {
  const extras = menuItems.filter((item) => item.category === 'extras');

  return (
    <section id="extras" className="py-16 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Acompañamientos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-wide leading-tight">
            EXTRAS PARA COMPLETAR
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {extras.map((item) => (
            <ExtraCard key={item.id} item={item} />
          ))}
        </div>

        <p className="text-center mt-8 text-brand-blue/60 text-sm font-medium">
          También podés sumar carne, papas, cheddar y toppings directamente al elegir tu hamburguesa.
        </p>
      </div>
    </section>
  );
}
