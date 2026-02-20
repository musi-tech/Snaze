import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="bg-[#2D4A3E] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf size={16} className="text-[#C8B89A]" />
            <span className="text-[#C8B89A] text-[10px] tracking-[0.4em] uppercase font-bold">Stay Connected</span>
            <Leaf size={16} className="text-[#C8B89A]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
            Join the<br />
            <span className="text-[#C8B89A]">Movement</span>
          </h2>

          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Subscribe for new arrivals, styling guides, and stories about sustainable fashion — delivered thoughtfully to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto mb-5">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 bg-white/10 text-white placeholder-white/40 text-sm border border-white/20 focus:outline-none focus:border-[#C8B89A] transition-colors duration-300"
            />
            <button className="bg-[#C8B89A] text-[#1C1C1A] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 shrink-0">
              Subscribe
            </button>
          </div>

          <p className="text-white/30 text-[11px] tracking-wide">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
