import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

const EditorialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#1C1C1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden" style={{ height: "500px" }}>
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                alt="SNAZE Style Guide"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay badge */}
              <div className="absolute -bottom-px -right-px bg-[#2D4A3E] p-6 w-28 h-28 flex flex-col items-center justify-center">
                <Leaf size={20} className="text-[#C8B89A] mb-1" />
                <span className="text-[#C8B89A] uppercase text-[9px] font-bold tracking-[0.2em] text-center leading-tight">
                  Snaze<br />2025
                </span>
              </div>
            </div>

            {/* Decorative accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#2D4A3E]/40" />
          </motion.div>

          {/* Text side */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-[#C8B89A] text-[10px] tracking-[0.4em] uppercase font-bold mb-5 flex items-center gap-2">
              <Leaf size={10} /> Style Guide
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Rooted in<br />
              <span className="text-[#C8B89A]">Nature.</span>
            </h2>
            <p className="text-white/60 mb-5 leading-relaxed text-sm">
              Our latest editorial explores the harmony between urban living and the natural world. Each piece is conceived not as fashion, but as a second skin — breathable, honest, and enduring.
            </p>
            <p className="text-white/60 mb-10 leading-relaxed text-sm">
              Discover how to compose looks that feel effortless yet intentional — layered textures, muted tones, and materials that age beautifully with you.
            </p>

            <button className="group inline-flex items-center gap-3 bg-transparent border border-[#C8B89A]/50 text-[#C8B89A] px-7 py-3.5 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C8B89A] hover:text-[#1C1C1A] transition-all duration-400">
              Read the Story
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
