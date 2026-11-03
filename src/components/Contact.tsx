import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import { config } from '@/data/config';
import { motion } from 'framer-motion';

export default function Contact() {
  const waLink = `https://wa.me/${config.whatsappNumber}`;

  return (
    <section id="contacto" className="py-16 md:py-24 bg-brand-cream relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-orange" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-wide leading-tight mb-3">
            CONTACTO
          </h2>
          <p className="text-brand-blue/70 font-medium">Hacé tu pedido o seguinos en redes</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* WhatsApp */}
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            <MessageCircle className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-display text-xl tracking-wide mb-1">WHATSAPP</div>
            <div className="text-sm opacity-90">Hacé tu pedido acá</div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href={config.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-pink-500 via-purple-500 to-brand-orange text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            <Instagram className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-display text-xl tracking-wide mb-1">INSTAGRAM</div>
            <div className="text-sm opacity-90">{config.instagramHandle}</div>
          </motion.a>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-blue text-brand-cream rounded-2xl p-6 text-center shadow-lg"
          >
            <MapPin className="w-10 h-10 mx-auto mb-3 text-brand-orange" />
            <div className="font-display text-xl tracking-wide mb-1">DIRECCIÓN</div>
            <div className="text-sm opacity-80">{config.address}</div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-brand-orange text-white rounded-2xl p-6 text-center shadow-lg"
          >
            <Clock className="w-10 h-10 mx-auto mb-3" />
            <div className="font-display text-xl tracking-wide mb-1">HORARIOS</div>
            <div className="text-sm opacity-90">{config.hours}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
