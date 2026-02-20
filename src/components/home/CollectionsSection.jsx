import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";

const collections = [
    {
        title: "Earth Essentials",
        desc: "Timeless basics grounded in organic materials",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
        link: "/",
        tag: "Shop Now",
    },
    {
        title: "Forest Outerwear",
        desc: "Weather-ready pieces built for the outdoors",
        image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=800&q=80",
        link: "/",
        tag: "Explore",
    },
    {
        title: "Minimal Botanics",
        desc: "Soft prints and flowing silhouettes inspired by nature",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        link: "/ladies",
        tag: "Discover",
    },
];

const CollectionsSection = () => {
    return (
        <section className="py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <p className="text-[#2D4A3E] text-xs tracking-[0.3em] uppercase font-medium mb-3 flex items-center gap-2">
                            <Leaf size={11} /> Curated for You
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1A] uppercase tracking-tight leading-none">
                            Collections
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="text-xs font-semibold text-[#1C1C1A] tracking-[0.15em] uppercase border-b-2 border-[#2D4A3E] pb-0.5 hover:text-[#2D4A3E] transition-colors duration-300 self-start md:self-auto"
                    >
                        All Collections →
                    </a>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {collections.map((col, index) => (
                        <motion.div
                            key={col.title}
                            className="group relative overflow-hidden bg-[#F0EBE3]"
                            style={{ height: "480px" }}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                        >
                            <img
                                src={col.image}
                                alt={col.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/80 via-[#1C1C1A]/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-7 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">{col.title}</h3>
                                <p className="text-white/70 text-xs mb-5 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                                    {col.desc}
                                </p>
                                <Link
                                    to={col.link}
                                    className="inline-flex items-center gap-2 bg-[#C8B89A] text-[#1C1C1A] px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 group/btn"
                                >
                                    {col.tag}
                                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsSection;
