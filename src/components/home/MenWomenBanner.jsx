import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MenWomenBanner = () => {
    return (
        <section className="w-full flex flex-col md:flex-row overflow-hidden" style={{ height: "90vh", minHeight: "600px" }}>

            {/* ── MEN'S SIDE ─────────────────────────────────── */}
            <motion.div
                className="relative flex-1 group overflow-hidden cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=85"
                    alt="Men's Collection"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/80 via-[#1C1C1A]/20 to-transparent transition-all duration-500 group-hover:via-[#1C1C1A]/30" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8B89A] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-600">
                        <p className="text-[#C8B89A] text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
                            SS 2025 — Men
                        </p>
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-5">
                            Men's
                        </h2>
                        <p className="text-white/70 text-sm mb-8 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                            Structured silhouettes, natural textures, and earth-inspired tones curated for the modern man.
                        </p>
                        <Link
                            to="/men"
                            className="inline-flex items-center gap-3 bg-[#C8B89A] text-[#1C1C1A] px-7 py-3.5 font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300 group/btn"
                        >
                            Explore Men's
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Corner label */}
                <div className="absolute top-8 left-8">
                    <div className="border border-white/30 text-white/70 text-[10px] font-bold tracking-[0.3em] px-3 py-1 uppercase bg-black/20 backdrop-blur-sm">
                        01 / Men
                    </div>
                </div>
            </motion.div>

            {/* ── CENTRE DIVIDER ─────────────────────────────── */}
            <div className="hidden md:flex items-center justify-center relative z-10 w-0">
                <div className="absolute w-px h-full bg-white/20" />
                <div className="relative bg-[#F7F3EE] text-[#1C1C1A] text-[9px] font-black tracking-[0.15em] px-0 py-0 uppercase rounded-full w-12 h-12 flex items-center justify-center shadow-2xl text-center leading-tight">
                    &<br />or
                </div>
            </div>

            {/* ── WOMEN'S SIDE ───────────────────────────────── */}
            <motion.div
                className="relative flex-1 group overflow-hidden cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
                    alt="Women's Collection"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/80 via-[#3A2D28]/20 to-transparent transition-all duration-500 group-hover:via-[#3A2D28]/30" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8B89A] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-600">
                        <p className="text-[#C8B89A] text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
                            SS 2025 — Women
                        </p>
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-5">
                            Women's
                        </h2>
                        <p className="text-white/70 text-sm mb-8 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                            Flowing forms, botanical prints, and organic fabrics — the feminine essence of nature.
                        </p>
                        <Link
                            to="/ladies"
                            className="inline-flex items-center gap-3 bg-[#C8B89A] text-[#1C1C1A] px-7 py-3.5 font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300 group/btn"
                        >
                            Explore Women's
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Corner label */}
                <div className="absolute top-8 right-8">
                    <div className="border border-white/30 text-white/70 text-[10px] font-bold tracking-[0.3em] px-3 py-1 uppercase bg-black/20 backdrop-blur-sm">
                        02 / Women
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default MenWomenBanner;
