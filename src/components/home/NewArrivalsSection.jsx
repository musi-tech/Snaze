import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Leaf } from "lucide-react";

const categories = ["ALL", "TOPS", "OUTERWEAR", "BOTTOMS", "ESSENTIALS", "ACCESSORIES"];

const products = [
  {
    id: 1,
    title: "Linen Cargo Trousers",
    color: "Stone Beige",
    price: "₹3,499",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    category: "BOTTOMS",
    material: "100% Linen",
  },
  {
    id: 2,
    title: "Organic Cotton Tee",
    color: "Sage Green",
    price: "₹1,299",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    category: "TOPS",
    material: "Organic Cotton",
  },
  {
    id: 3,
    title: "Earth Tone Hoodie",
    color: "Clay",
    price: "₹2,199",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=800&q=80",
    category: "ESSENTIALS",
    material: "Recycled Fleece",
  },
  {
    id: 4,
    title: "Waxed Canvas Jacket",
    color: "Forest",
    price: "₹5,499",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=800&q=80",
    category: "OUTERWEAR",
    material: "Waxed Canvas",
  },
  {
    id: 5,
    title: "Natural Dye Shirt",
    color: "Terracotta",
    price: "₹1,899",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    category: "TOPS",
    material: "Natural Dye Cotton",
  },
  {
    id: 6,
    title: "Botanical Print Sweatshirt",
    color: "Cream",
    price: "₹2,499",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80",
    category: "ESSENTIALS",
    material: "100% Cotton",
  },
];

const NewArrivalsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[#2D4A3E] text-xs tracking-[0.3em] uppercase font-medium mb-3 flex items-center gap-2">
              <Leaf size={12} />
              Sustainably Made
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1A] uppercase tracking-tight leading-none">
              New Arrivals
            </h2>
          </div>
          <div className="flex items-center gap-6">
            {cartItems.length > 0 && (
              <span className="text-xs text-[#2D4A3E] font-semibold tracking-wider">
                {cartItems.length} item{cartItems.length > 1 ? "s" : ""} added
              </span>
            )}
            <a
              href="#"
              className="text-xs font-semibold text-[#1C1C1A] tracking-[0.15em] uppercase border-b-2 border-[#2D4A3E] pb-0.5 hover:text-[#2D4A3E] transition-colors duration-300"
            >
              View All →
            </a>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-2 md:gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${selectedCategory === cat
                  ? "bg-[#2D4A3E] text-[#C8B89A]"
                  : "bg-white text-[#5A5A58] border border-[#E0D9CF] hover:border-[#2D4A3E] hover:text-[#2D4A3E]"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-80 bg-[#F0EBE3]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-[#1C1C1A]/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-11 h-11 bg-white text-[#1C1C1A] flex items-center justify-center hover:bg-[#2D4A3E] hover:text-white transition-colors duration-300"
                    >
                      <ShoppingBag size={16} />
                    </button>
                    <button className="w-11 h-11 bg-white text-[#1C1C1A] flex items-center justify-center hover:bg-[#2D4A3E] hover:text-white transition-colors duration-300">
                      <Eye size={16} />
                    </button>
                  </div>

                  {/* NEW tag */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-[#2D4A3E] text-[#C8B89A] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Product info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-[#1C1C1A] tracking-wide uppercase">{product.title}</h3>
                    <p className="text-sm font-bold text-[#2D4A3E] ml-2 shrink-0">{product.price}</p>
                  </div>
                  <p className="text-xs text-[#8A8A88] mb-1">{product.color}</p>
                  <p className="text-xs text-[#2D4A3E] font-medium flex items-center gap-1">
                    <Leaf size={10} /> {product.material}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-5 w-full py-3 bg-[#1C1C1A] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#2D4A3E] transition-colors duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all md:flex"
                  >
                    <ShoppingBag size={12} /> Add to Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;