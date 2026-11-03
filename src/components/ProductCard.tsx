import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import type { MenuItem, SizeOption, PriceOption } from '../types';
import { burgerAddons } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';

export default function ProductCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(item.sizes?.[0]);
  const [selectedPriceOption, setSelectedPriceOption] = useState<PriceOption | undefined>(
    item.priceOptions?.[0],
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [justAdded, setJustAdded] = useState(false);

  const basePrice = item.singlePrice ?? selectedSize?.price ?? selectedPriceOption?.price ?? 0;
  const addonsPrice = burgerAddons
    .filter((addon) => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0);
  const currentPrice = basePrice + (item.category === 'extras' ? 0 : addonsPrice);
  const selectedOption = selectedSize?.label ?? selectedPriceOption?.label ?? 'Único';
  const addonLabel = burgerAddons
    .filter((addon) => selectedAddons.includes(addon.id))
    .map((addon) => addon.label)
    .join(' + ');
  const currentLabel = addonLabel ? `${selectedOption} + ${addonLabel}` : selectedOption;

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((current) =>
      current.includes(addonId)
        ? current.filter((id) => id !== addonId)
        : [...current, addonId],
    );
  };

  const handleAdd = () => {
    addItem({
      productId: item.id,
      name: item.name,
      image: item.image,
      optionLabel: currentLabel,
      price: currentPrice,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-blue/10 hover:border-brand-orange/30 flex flex-col group"
    >
      <div className="relative overflow-hidden h-52 sm:h-56">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {item.badge && (
          <span className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
            {item.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 bg-brand-cream/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
          <span className="font-display text-xl text-brand-blue leading-none">{formatPrice(currentPrice)}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl sm:text-2xl text-brand-blue tracking-wide leading-tight mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-brand-blue/70 leading-relaxed mb-3 flex-1">{item.description}</p>

        {item.sizes && item.sizes.length > 0 && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {item.sizes.map((size) => (
              <button
                key={size.key}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  selectedSize?.key === size.key
                    ? 'bg-brand-blue text-brand-cream'
                    : 'bg-brand-cream text-brand-blue border border-brand-blue/30 hover:border-brand-blue'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        )}

        {item.priceOptions && item.priceOptions.length > 0 && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {item.priceOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setSelectedPriceOption(option)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  selectedPriceOption?.label === option.label
                    ? 'bg-brand-blue text-brand-cream'
                    : 'bg-brand-cream text-brand-blue border border-brand-blue/30 hover:border-brand-blue'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {item.category !== 'extras' && (
          <div className="mb-3 rounded-xl bg-brand-cream/70 border border-brand-blue/10 p-3">
            <p className="text-[11px] font-bold text-brand-blue uppercase tracking-widest mb-2">
              Sumale un adicional
            </p>
            <div className="space-y-2">
              {burgerAddons.map((addon) => {
                const checked = selectedAddons.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    className="flex items-center justify-between gap-2 cursor-pointer text-xs text-brand-blue"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddon(addon.id)}
                        className="h-4 w-4 accent-brand-orange"
                      />
                      <span className="font-semibold">{addon.label}</span>
                    </span>
                    <span className="font-bold text-brand-orange">+{formatPrice(addon.price)}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl uppercase tracking-wide text-sm transition-all ${
            justAdded
              ? 'bg-green-600 text-white'
              : 'bg-brand-orange hover:bg-brand-orangeDark text-white hover:scale-[1.02] shadow-md'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              Agregado
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Agregar al pedido
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
