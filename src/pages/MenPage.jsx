import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ShoppingBag, Heart, Eye, Star, ChevronRight, Filter, ShoppingCart } from "lucide-react";

/* ─── Men's Product Data ─────────────────────────────── */
const filterTabs = ["ALL", "SHIRTS", "JACKETS", "TROUSERS", "CASUAL", "FORMALS"];

const menProducts = [
    { id: 1, title: "Structured Bomber Jacket", price: "₹3,499", tag: "NEW", category: "JACKETS", color: "Olive Green", image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Slim-Fit Chino Trousers", price: "₹1,899", tag: "TRENDING", category: "TROUSERS", color: "Sand Beige", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Premium Oxford Shirt", price: "₹1,299", tag: "NEW", category: "SHIRTS", color: "Classic White", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Cargo Utility Pants", price: "₹2,199", tag: "NEW", category: "CASUAL", color: "Charcoal", image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Formal Blazer", price: "₹4,999", tag: "BESTSELLER", category: "FORMALS", color: "Navy Blue", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Oversized Streetwear Tee", price: "₹899", tag: "NEW", category: "CASUAL", color: "Off White", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Denim Trucker Jacket", price: "₹3,199", tag: "TRENDING", category: "JACKETS", color: "Raw Denim", image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Linen Summer Shirt", price: "₹1,099", tag: "NEW", category: "SHIRTS", color: "Sky Blue", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80" },
];

const menCategories = [
    { name: "Shirts", desc: "Classic to casual", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&h=600&q=80", href: "#shirts" },
    { name: "Jackets", desc: "Bold outerwear", image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=500&h=600&q=80", href: "#jackets" },
    { name: "Trousers", desc: "Tailored fits", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&h=600&q=80", href: "#trousers" },
    { name: "Accessories", desc: "Complete the look", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500&h=600&q=80", href: "#accessories" },
];

const tagColors = {
    NEW: "bg-[#1a1a2e] text-white",
    TRENDING: "bg-amber-500 text-black",
    BESTSELLER: "bg-emerald-600 text-white",
};

/* ─── Component ──────────────────────────────────────── */
const MenPage = () => {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("charcoal");
    const [qty, setQty] = useState(1);

    const filtered = activeFilter === "ALL" ? menProducts : menProducts.filter(p => p.category === activeFilter);

    const addToCart = (p) => setCart(c => [...c, p]);
    const toggleWishlist = (id) => setWishlist(w => w.includes(id) ? w.filter(i => i !== id) : [...w, id]);

    return (
        <div className="bg-[#0f0f1a] min-h-screen font-sans">
            <Header />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="relative h-screen flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80"
                        alt="Men's Collection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/60 to-transparent" />
                </div>

                {/* Decorative accent */}
                <div className="absolute top-1/3 right-10 w-px h-48 bg-amber-400 opacity-60 hidden lg:block" />
                <div className="absolute top-1/3 right-14 text-amber-400 text-xs tracking-[0.3em] rotate-90 origin-center translate-y-20 hidden lg:block font-light">
                    AUTUMN / WINTER 2025
                </div>

                <div className="relative z-10 px-8 md:px-16 pb-20 max-w-4xl">
                    <div className="inline-block bg-amber-400 text-black text-xs font-bold px-4 py-1.5 mb-6 tracking-widest uppercase">
                        Men's Collection
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black uppercase leading-none tracking-tight mb-4">
                        Built For<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: "2px #f5f5f5" }}>
                            The Bold
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-md mb-8 leading-relaxed">
                        Premium menswear crafted for those who set trends, not follow them. Explore our exclusive 2025 collection.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="#new-arrivals"
                            className="bg-amber-400 text-black px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-amber-300 transition-colors duration-300"
                        >
                            Shop Now
                        </a>
                        <a
                            href="#categories"
                            className="border border-white text-white px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Browse Categories
                        </a>
                    </div>
                </div>

                {/* Cart indicator */}
                {cart.length > 0 && (
                    <div className="absolute top-24 right-6 z-20 bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        🛒 {cart.length} item{cart.length > 1 ? "s" : ""} in cart
                    </div>
                )}
            </section>

            {/* ── CATEGORIES ───────────────────────────────────────── */}
            <section id="categories" className="py-20 px-6 md:px-12 bg-[#0f0f1a]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">Explore</p>
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Men's<br />Categories</h2>
                        </div>
                        <Link to="/men" className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {menCategories.map((cat, i) => (
                            <a
                                key={cat.name}
                                href={cat.href}
                                className="group relative overflow-hidden rounded-xl"
                                style={{ height: i === 0 || i === 3 ? "400px" : "320px" }}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-white text-xl font-bold uppercase tracking-wide">{cat.name}</h3>
                                    <p className="text-gray-300 text-xs mt-1">{cat.desc}</p>
                                    <div className="mt-3 w-0 group-hover:w-12 h-0.5 bg-amber-400 transition-all duration-500" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEW ARRIVALS ─────────────────────────────────────── */}
            <section id="new-arrivals" className="py-20 px-6 md:px-12 bg-[#13131f]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">Fresh Drops</p>
                            <h2 className="text-4xl font-black text-white uppercase tracking-tight">New Arrivals</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter size={16} className="text-gray-400" />
                            <div className="flex flex-wrap gap-2">
                                {filterTabs.map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveFilter(tab)}
                                        className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${activeFilter === tab
                                                ? "bg-amber-400 text-black border-amber-400"
                                                : "border-gray-600 text-gray-400 hover:border-amber-400 hover:text-amber-400"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {filtered.map(product => (
                            <div key={product.id} className="group relative bg-[#1a1a2e] rounded-xl overflow-hidden">
                                {/* Image */}
                                <div className="relative overflow-hidden h-56 md:h-72">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-amber-400 text-black p-2.5 rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ShoppingCart size={18} />
                                        </button>
                                        <button
                                            onClick={() => toggleWishlist(product.id)}
                                            className={`p-2.5 rounded-full hover:scale-110 transition-transform ${wishlist.includes(product.id) ? "bg-red-500 text-white" : "bg-white text-black"}`}
                                        >
                                            <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                                        </button>
                                        <button className="bg-white text-black p-2.5 rounded-full hover:scale-110 transition-transform">
                                            <Eye size={18} />
                                        </button>
                                    </div>
                                    {product.tag && (
                                        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[product.tag] || "bg-gray-700 text-white"}`}>
                                            {product.tag}
                                        </span>
                                    )}
                                </div>
                                {/* Info */}
                                <div className="p-4">
                                    <h3 className="text-white font-semibold text-sm leading-tight">{product.title}</h3>
                                    <p className="text-gray-500 text-xs mt-1">{product.color}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-amber-400 font-bold text-base">{product.price}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-amber-400 text-black p-2 rounded-lg hover:bg-amber-300 transition-colors"
                                        >
                                            <ShoppingBag size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEATURED PRODUCT ─────────────────────────────────── */}
            <section className="py-20 px-6 md:px-12 bg-[#0f0f1a]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 text-center">Featured</p>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tight text-center mb-14">The Signature Piece</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Gallery */}
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden h-[500px]">
                                <img
                                    src="https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=900&q=80"
                                    alt="Men's Bomber Jacket"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=400&q=80",
                                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                                    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80",
                                ].map((src, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden h-28 cursor-pointer hover:opacity-80 transition-opacity">
                                        <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-6 text-white">
                            <div className="inline-block bg-amber-400/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full tracking-widest">
                                NEW ARRIVAL
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                                The Structured<br />Bomber Jacket
                            </h3>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#f59e0b" className="text-amber-400" />)}
                                <span className="text-gray-400 text-sm ml-1">58 reviews</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Crafted from premium water-resistant fabric with a structured silhouette. The signature Snaze Bomber delivers urban edge with sophisticated tailoring — perfect for the modern man who demands both style and function.
                            </p>
                            <div className="text-3xl font-black text-amber-400">₹3,499</div>

                            {/* Color */}
                            <div>
                                <p className="text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wider">Color — <span className="capitalize text-amber-400">{selectedColor}</span></p>
                                <div className="flex gap-3">
                                    {[{ name: "charcoal", hex: "bg-gray-700" }, { name: "olive", hex: "bg-olive-600 bg-[#556B2F]" }, { name: "black", hex: "bg-black border border-gray-600" }, { name: "navy", hex: "bg-blue-900" }].map(c => (
                                        <button
                                            key={c.name}
                                            onClick={() => setSelectedColor(c.name)}
                                            className={`w-8 h-8 rounded-full ${c.hex} transition-all duration-200 ${selectedColor === c.name ? "ring-2 ring-offset-2 ring-amber-400 ring-offset-[#0f0f1a] scale-110" : ""}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size */}
                            <div>
                                <p className="text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wider">Size</p>
                                <div className="flex gap-2 flex-wrap">
                                    {["XS", "S", "M", "L", "XL", "XXL"].map(sz => (
                                        <button
                                            key={sz}
                                            onClick={() => setSelectedSize(sz)}
                                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${selectedSize === sz
                                                    ? "bg-amber-400 text-black"
                                                    : "border border-gray-700 text-gray-400 hover:border-amber-400 hover:text-amber-400"
                                                }`}
                                        >
                                            {sz}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden">
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2.5 text-white hover:bg-gray-800 transition-colors text-lg font-bold">−</button>
                                    <span className="px-5 py-2.5 text-white font-semibold">{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)} className="px-4 py-2.5 text-white hover:bg-gray-800 transition-colors text-lg font-bold">+</button>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button className="flex-1 bg-amber-400 text-black py-4 rounded-xl font-black uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2">
                                    <ShoppingBag size={18} /> Add to Cart
                                </button>
                                <button className="flex-1 border-2 border-white text-white py-4 rounded-xl font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                    Buy Now
                                </button>
                            </div>

                            {/* Benefits */}
                            <div className="flex gap-6 text-xs text-gray-500 pt-2">
                                <span>✓ Free Shipping over ₹999</span>
                                <span>✓ Easy 30-day returns</span>
                                <span>✓ Cash on Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EDITORIAL ────────────────────────────────────────── */}
            <section className="py-20 px-6 md:px-12 bg-[#13131f]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Style Guide</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
                            Urban<br />Masculine<br />
                            <span className="text-gray-600">Aesthetic</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-5">
                            This season, we strip back the noise. True menswear isn't about logos — it's about silhouette, texture, and attitude. Layer a structured bomber over a clean white tee with slim chinos for the perfect urban smart-casual look.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Finish with clean sneakers or leather Chelsea boots and a minimal watch. Less is more. Edge is everything.
                        </p>
                        <div className="flex gap-4">
                            <a href="#new-arrivals" className="bg-amber-400 text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors">
                                Shop the Look
                            </a>
                            <a href="#" className="border border-gray-600 text-gray-300 px-8 py-3 font-bold uppercase tracking-wider hover:border-white hover:text-white transition-colors">
                                Read Full Guide
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                            alt="Men's Style Editorial"
                            className="w-full rounded-2xl object-cover h-[500px]"
                        />
                        <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-amber-400 rounded-2xl flex items-center justify-center">
                            <div className="text-center text-black font-black uppercase text-sm leading-tight">
                                SNAZE<br />2025<br />MEN
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ───────────────────────────────────────── */}
            <section className="py-20 px-6 bg-[#1a1a2e] text-white text-center">
                <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Exclusive Access</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">Join The Brotherhood</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">
                    Get first access to new drops, style tips, and exclusive Men's Collection offers directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 px-5 py-3 bg-white/10 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                    />
                    <button className="bg-amber-400 text-black px-8 py-3 rounded-xl font-black uppercase tracking-wider hover:bg-amber-300 transition-colors whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MenPage;
