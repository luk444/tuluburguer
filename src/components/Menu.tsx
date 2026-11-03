import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';
import { menuItems, categoryLabels } from '@/data/menu';
import type { MenuItem } from '@/types';
import ProductCard from './ProductCard';

type TabKey = 'todas' | MenuItem['category'];

const tabs: { key: TabKey; label: string }[] = [
  { key: 'todas', label: 'Todas' },
  { key: 'clasicas', label: categoryLabels.clasicas },
  { key: 'especiales', label: categoryLabels.especiales },
  { key: 'extras', label: categoryLabels.extras },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<TabKey>('todas');

  const filtered = useMemo(() => {
    if (activeTab === 'todas') return menuItems;
    return menuItems.filter((i) => i.category === activeTab);
  }, [activeTab]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-cream relative">
      {/* Top decorative strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-brand-cream px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Flame className="w-3.5 h-3.5 text-brand-orange" />
            Nuestro Menú
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-wide leading-tight mb-3">
            ARMÁ TU PEDIDO
          </h2>
          <div className="inline-block bg-brand-orange text-white font-bold px-5 py-2 rounded-full text-sm uppercase tracking-wide shadow-md">
            ¡Todos los combos incluyen papas!
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-2 flex-wrap justify-center bg-white p-2 rounded-2xl shadow-md border border-brand-blue/10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${
                  activeTab === tab.key
                    ? 'bg-brand-blue text-brand-cream shadow-md'
                    : 'text-brand-blue hover:bg-brand-cream'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
