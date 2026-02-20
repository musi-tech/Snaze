import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
          alt="SNAZE 2025 Collection"
          className="w-full h-full object-cover"
        />
        {/* Layered gradient overlay for natural depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1A]/80 via-[#1C1C1A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-[#C8B89A] text-xs tracking-[0.4em] uppercase mb-6 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Spring / Summer 2025
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-9xl text-white font-black uppercase leading-none tracking-tighter mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Wear<br />
          <span className="text-[#C8B89A]">Nature.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/80 text-base md:text-lg max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Timeless pieces crafted from sustainable materials. Rooted in nature, designed for the modern wardrobe.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            to="/men"
            className="group inline-flex items-center gap-3 bg-[#C8B89A] text-[#1C1C1A] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
          >
            Shop Men's
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/ladies"
            className="group inline-flex items-center gap-3 border border-white/60 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#1C1C1A] transition-all duration-300"
          >
            Shop Women's
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-white/30"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
