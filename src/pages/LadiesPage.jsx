import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ShoppingBag, Heart, Eye, Star, ChevronRight, Filter, ShoppingCart, Sparkles } from "lucide-react";

/* ─── Ladies' Product Data ───────────────────────────── */
const filterTabs = ["ALL", "DRESSES", "TOPS", "SKIRTS", "CASUAL", "FESTIVE"];

const ladiesProducts = [
    { id: 1, title: "Floral Midi Dress", price: "₹2,499", tag: "NEW", category: "DRESSES", color: "Blush Rose", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Puff-Sleeve Blouse", price: "₹1,199", tag: "TRENDING", category: "TOPS", color: "Ivory White", image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Wrap Pleated Skirt", price: "₹1,499", tag: "NEW", category: "SKIRTS", color: "Dusty Mauve", image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Linen Co-ord Set", price: "₹2,999", tag: "BESTSELLER", category: "CASUAL", color: "Sage Green", image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Sequin Festive Gown", price: "₹5,499", tag: "FESTIVE", category: "FESTIVE", color: "Champagne Gold", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Broderie Anglaise Top", price: "₹999", tag: "NEW", category: "TOPS", color: "Pure White", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "A-Line Flared Skirt", price: "₹1,299", tag: "TRENDING", category: "SKIRTS", color: "Lilac Purple", image: "https://images.unsplash.com/photo-1548549557-dbe9155f4f23?auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Slip Dress", price: "₹1,899", tag: "NEW", category: "DRESSES", color: "Terracotta", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80" },
];

const ladiesCategories = [
    { name: "Dresses", desc: "For every occasion", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&h=600&q=80", href: "#dresses" },
    { name: "Tops", desc: "Effortlessly chic", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&h=600&q=80", href: "#tops" },
    { name: "Skirts", desc: "Feminine flowing", image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?auto=format&fit=crop&w=500&h=600&q=80", href: "#skirts" },
    { name: "Accessories", desc: "The finishing touch", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&h=600&q=80", href: "#accessories" },
];

const tagColors = {
    NEW: "bg-[#c2185b] text-white",
    TRENDING: "bg-rose-400 text-white",
    BESTSELLER: "bg-purple-600 text-white",
    FESTIVE: "bg-amber-500 text-black",
};

/* ─── Component ──────────────────────────────────────── */
const LadiesPage = () => {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("blush");
    const [qty, setQty] = useState(1);

    const filtered = activeFilter === "ALL" ? ladiesProducts : ladiesProducts.filter(p => p.category === activeFilter);

    const addToCart = (p) => setCart(c => [...c, p]);
    const toggleWishlist = (id) => setWishlist(w => w.includes(id) ? w.filter(i => i !== id) : [...w, id]);

    return (
        <div className="bg-[#fff9f9] min-h-screen font-sans">
            <Header />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="relative h-screen flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80"
                        alt="Women's Collection Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-rose-900/40 to-transparent" />
                </div>

                {/* Decorative floating badge */}
                <div className="absolute top-1/3 right-10 hidden lg:flex flex-col items-center gap-2">
                    <Sparkles size={20} className="text-rose-200 opacity-70" />
                    <div className="w-px h-32 bg-rose-200 opacity-40" />
                    <p className="text-rose-200 text-xs tracking-[0.3em] rotate-90 origin-center translate-y-16 font-light opacity-70">
                        SPRING / SUMMER 2025
                    </p>
                </div>

                <div className="relative z-10 px-8 md:px-16 pb-20 max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-300/30 backdrop-blur-sm text-rose-100 text-xs font-bold px-4 py-2 mb-6 rounded-full tracking-widest uppercase">
                        <Sparkles size={12} /> Women's Collection
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black uppercase leading-none tracking-tight mb-4">
                        Wear Your<br />
                        <span className="text-rose-300">Elegance</span>
                    </h1>
                    <p className="text-rose-100 text-lg max-w-md mb-8 leading-relaxed">
                        Discover a world where fashion meets femininity. Timeless silhouettes, bold prints, and luxurious fabrics curated for the modern woman.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="#new-arrivals"
                            className="bg-rose-500 text-white px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-rose-600 transition-colors duration-300 rounded-full"
                        >
                            Shop Now
                        </a>
                        <a
                            href="#categories"
                            className="border border-white/60 backdrop-blur-sm text-white px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-white/20 transition-colors duration-300 rounded-full"
                        >
                            Browse Categories
                        </a>
                    </div>
                </div>

                {/* Cart indicator */}
                {cart.length > 0 && (
                    <div className="absolute top-24 right-6 z-20 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        🛒 {cart.length} item{cart.length > 1 ? "s" : ""} in cart
                    </div>
                )}
            </section>

            {/* ── CATEGORIES ───────────────────────────────────────── */}
            <section id="categories" className="py-20 px-6 md:px-12 bg-[#fff9f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-2">Curated For You</p>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Women's<br />Categories</h2>
                        </div>
                        <Link to="/ladies" className="text-gray-400 hover:text-rose-500 transition-colors text-sm font-medium flex items-center gap-1">
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {ladiesCategories.map((cat, i) => (
                            <a
                                key={cat.name}
                                href={cat.href}
                                className="group relative overflow-hidden rounded-3xl"
                                style={{ height: i === 1 || i === 2 ? "420px" : "340px" }}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                                    <p className="text-rose-200 text-xs mt-1">{cat.desc}</p>
                                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs text-white bg-rose-500 px-3 py-1 rounded-full font-semibold">
                                            Explore →
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEW ARRIVALS ─────────────────────────────────────── */}
            <section id="new-arrivals" className="py-20 px-6 md:px-12 bg-[#fdf0f4]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <p className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-2">Just In</p>
                            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">New Arrivals</h2>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter size={16} className="text-gray-400" />
                            {filterTabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveFilter(tab)}
                                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${activeFilter === tab
                                            ? "bg-rose-500 text-white border-rose-500"
                                            : "border-rose-200 text-gray-500 hover:border-rose-400 hover:text-rose-500"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {filtered.map(product => (
                            <div key={product.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                                {/* Image */}
                                <div className="relative overflow-hidden h-56 md:h-72">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-rose-500 text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg"
                                        >
                                            <ShoppingCart size={18} />
                                        </button>
                                        <button
                                            onClick={() => toggleWishlist(product.id)}
                                            className={`p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg ${wishlist.includes(product.id) ? "bg-red-500 text-white" : "bg-white text-gray-700"}`}
                                        >
                                            <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                                        </button>
                                        <button className="bg-white text-gray-700 p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg">
                                            <Eye size={18} />
                                        </button>
                                    </div>
                                    {product.tag && (
                                        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[product.tag] || "bg-gray-700 text-white"}`}>
                                            {product.tag}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className="absolute top-3 right-3"
                                    >
                                        <Heart size={18} className={wishlist.includes(product.id) ? "text-rose-500 fill-rose-500" : "text-white drop-shadow"} />
                                    </button>
                                </div>
                                {/* Info */}
                                <div className="p-4">
                                    <h3 className="text-gray-900 font-semibold text-sm leading-tight">{product.title}</h3>
                                    <p className="text-gray-400 text-xs mt-1">{product.color}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-rose-500 font-bold text-base">{product.price}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-rose-50 hover:bg-rose-500 text-rose-500 hover:text-white p-2 rounded-xl transition-colors"
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
            <section className="py-20 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <p className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-2 text-center">Featured</p>
                    <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight text-center mb-14">The Statement Dress</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Gallery */}
                        <div className="space-y-4">
                            <div className="relative rounded-3xl overflow-hidden h-[500px]">
                                <img
                                    src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80"
                                    alt="Floral Midi Dress"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 to-transparent" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=400&q=80",
                                    "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=400&q=80",
                                    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80",
                                ].map((src, i) => (
                                    <div key={i} className="rounded-2xl overflow-hidden h-28 cursor-pointer hover:opacity-80 transition-opacity">
                                        <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 text-xs font-bold px-3 py-1.5 rounded-full tracking-widest">
                                <Sparkles size={10} /> NEW ARRIVAL
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight">
                                Floral Grace<br />Midi Dress
                            </h3>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#f43f5e" className="text-rose-500" />)}
                                <span className="text-gray-400 text-sm ml-1">94 reviews</span>
                            </div>
                            <p className="text-gray-500 leading-relaxed">
                                Draped in a romantic floral print, this midi dress features a flowing A-line silhouette, flutter sleeves, and a cinched waist. From brunch dates to garden parties — it's effortlessly you.
                            </p>
                            <div className="text-3xl font-black text-rose-500">₹2,499</div>

                            {/* Color */}
                            <div>
                                <p className="text-gray-700 text-sm font-semibold mb-3 uppercase tracking-wider">Color — <span className="capitalize text-rose-500">{selectedColor}</span></p>
                                <div className="flex gap-3">
                                    {[{ name: "blush", hex: "bg-rose-200" }, { name: "sage", hex: "bg-[#9CAF88]" }, { name: "lavender", hex: "bg-purple-200" }, { name: "terracotta", hex: "bg-orange-400" }].map(c => (
                                        <button
                                            key={c.name}
                                            onClick={() => setSelectedColor(c.name)}
                                            className={`w-8 h-8 rounded-full ${c.hex} transition-all duration-200 border-2 ${selectedColor === c.name ? "ring-2 ring-offset-2 ring-rose-400 scale-110 border-rose-400" : "border-gray-200"}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-gray-700 text-sm font-semibold uppercase tracking-wider">Size</p>
                                    <a href="#" className="text-xs text-rose-500 underline">Size Guide</a>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {["XS", "S", "M", "L", "XL"].map(sz => (
                                        <button
                                            key={sz}
                                            onClick={() => setSelectedSize(sz)}
                                            className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${selectedSize === sz
                                                    ? "bg-rose-500 text-white border-rose-500"
                                                    : "border-gray-200 text-gray-500 hover:border-rose-400 hover:text-rose-500"
                                                }`}
                                        >
                                            {sz}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border-2 border-gray-100 rounded-2xl overflow-hidden">
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2.5 text-gray-600 hover:bg-rose-50 transition-colors text-lg font-bold">−</button>
                                    <span className="px-5 py-2.5 text-gray-900 font-semibold">{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)} className="px-4 py-2.5 text-gray-600 hover:bg-rose-50 transition-colors text-lg font-bold">+</button>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button className="flex-1 bg-rose-500 text-white py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                                    <ShoppingBag size={18} /> Add to Cart
                                </button>
                                <button className="flex-1 border-2 border-gray-900 text-gray-900 py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
                                    Buy Now
                                </button>
                            </div>

                            {/* Benefits */}
                            <div className="flex gap-4 text-xs text-gray-400 flex-wrap pt-2">
                                <span>✓ Free Shipping over ₹999</span>
                                <span>✓ Easy 30-day returns</span>
                                <span>✓ Cash on Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EDITORIAL ────────────────────────────────────────── */}
            <section className="py-20 px-6 md:px-12 bg-[#fdf0f4]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
                            alt="Women's Style Editorial"
                            className="w-full rounded-3xl object-cover h-[500px]"
                        />
                        <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-rose-500 rounded-3xl flex items-center justify-center">
                            <div className="text-center text-white font-black uppercase text-sm leading-tight">
                                SNAZE<br />2025<br />WOMEN
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <p className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-4">Style Guide</p>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                            Femme Chic<br />
                            <span className="text-rose-400">Aesthetic</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-5">
                            This season's Femme Chic guide celebrates the art of effortless dressing. Pair a floral midi dress with block heels and a wicker bag for the quintessential summer look. Add a silk scarf at the neck for a touch of vintage glamour.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            For evening, a slip dress in a rich tone with strappy sandals is all you need. Let the fabric do the talking — confidence is the best accessory.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <a href="#new-arrivals" className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-rose-600 transition-colors">
                                Shop the Look
                            </a>
                            <a href="#" className="border-2 border-rose-200 text-rose-500 px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:border-rose-500 transition-colors">
                                Read Full Guide
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ───────────────────────────────────────── */}
            <section
                className="py-20 px-6 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #c2185b 0%, #e91e8c 50%, #f06292 100%)" }}
            >
                <div className="absolute top-4 left-10 text-white/20 text-9xl font-black select-none">✿</div>
                <div className="absolute bottom-4 right-10 text-white/20 text-9xl font-black select-none">✿</div>
                <div className="relative z-10">
                    <Sparkles className="text-white/70 mx-auto mb-3" size={28} />
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-3">Join The SNAZE Circle</h2>
                    <p className="text-rose-100 mb-8 max-w-md mx-auto text-sm">
                        Be the first to know about exclusive drops, style guides, and members-only offers for women's fashion.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-5 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-rose-200 focus:outline-none focus:bg-white/30 backdrop-blur-sm"
                        />
                        <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-black uppercase tracking-wider hover:bg-rose-50 transition-colors whitespace-nowrap shadow-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LadiesPage;
