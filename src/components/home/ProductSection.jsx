import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Plus, Minus, Leaf, Star } from "lucide-react";

const ProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("forest");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [showSpec, setShowSpec] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const colors = [
    { name: "forest", label: "Forest Green", bg: "bg-[#2D4A3E]" },
    { name: "sand", label: "Sandy Beige", bg: "bg-[#C8B89A]" },
    { name: "clay", label: "Clay Brown", bg: "bg-[#A0785A]" },
  ];

  const thumbImages = [
    require("../../assets/A11.jpeg"),
    require("../../assets/A12.jpeg"),
    require("../../assets/A13.jpeg"),
    require("../../assets/A14.jpeg"),
  ];
  const [mainImage, setMainImage] = useState(thumbImages[1]);

  return (
    <section className="py-20 md:py-28 bg-white px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2D4A3E] text-xs tracking-[0.4em] uppercase font-medium mb-2 flex items-center gap-2">
            <Leaf size={11} /> Featured Piece
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1A] uppercase tracking-tight">
            The Minimalist Jacket
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left — Gallery */}
          <motion.div
            className="lg:col-span-7 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden bg-[#F0EBE3]" style={{ height: "520px" }}>
              <img
                src={mainImage}
                alt="The Minimalist Jacket"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-5 right-5 w-10 h-10 bg-white flex items-center justify-center hover:bg-[#F0EBE3] transition-colors duration-300"
              >
                <Heart
                  size={18}
                  className={`transition-colors duration-300 ${isWishlisted ? "fill-[#2D4A3E] text-[#2D4A3E]" : "text-[#5A5A58]"}`}
                />
              </button>
              <div className="absolute bottom-5 left-5 bg-[#2D4A3E] text-[#C8B89A] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-2">
                New Arrival
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {thumbImages.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(src)}
                  className={`aspect-square overflow-hidden bg-[#F0EBE3] transition-all duration-300 ${mainImage === src ? "ring-2 ring-[#2D4A3E] ring-offset-2" : "hover:opacity-80"
                    }`}
                >
                  <img src={src} alt={`Product view ${index + 1}`} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            className="lg:col-span-5 space-y-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={13} className="text-[#C8A84B] fill-[#C8A84B]" />
                ))}
              </div>
              <span className="text-xs text-[#8A8A88] tracking-wide">42 reviews</span>
            </div>

            {/* Price & description */}
            <div>
              <p className="text-2xl font-black text-[#2D4A3E] mb-3">₹4,999</p>
              <p className="text-sm text-[#5A5A58] leading-relaxed">
                Our signature piece — a refined minimalist jacket crafted from water-resistant waxed canvas with a fully recycled lining. Designed to last a lifetime, not a season.
              </p>
            </div>

            {/* Color */}
            <div>
              <span className="text-xs font-bold text-[#1C1C1A] uppercase tracking-[0.2em] block mb-3">
                Colour — <span className="font-normal text-[#5A5A58] capitalize">{colors.find(c => c.name === selectedColor)?.label}</span>
              </span>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-9 h-9 ${color.bg} transition-all duration-300 ${selectedColor === color.name
                        ? "ring-2 ring-[#2D4A3E] ring-offset-2"
                        : "hover:scale-110"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-xs font-bold text-[#1C1C1A] uppercase tracking-[0.2em]">Size</span>
                <a href="#" className="text-xs text-[#2D4A3E] underline underline-offset-2">Size Guide</a>
              </div>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${selectedSize === size
                        ? "bg-[#1C1C1A] text-white"
                        : "bg-[#F7F3EE] text-[#3A3A38] border border-[#E0D9CF] hover:border-[#2D4A3E]"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-xs font-bold text-[#1C1C1A] uppercase tracking-[0.2em] block mb-3">Quantity</span>
              <div className="flex items-center border border-[#E0D9CF] w-32">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#3A3A38] hover:text-[#2D4A3E] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="flex-1 text-center text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#3A3A38] hover:text-[#2D4A3E] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-[#2D4A3E] text-[#C8B89A] py-4 px-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1C1C1A] transition-colors duration-300 flex items-center justify-center gap-2">
                <ShoppingBag size={15} /> Add to Bag
              </button>
              <button className="flex-1 border-2 border-[#1C1C1A] text-[#1C1C1A] py-4 px-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1C1C1A] hover:text-white transition-all duration-300">
                Buy Now
              </button>
            </div>

            {/* Specs */}
            <div className="border-t border-[#E8E0D5] pt-5">
              <button
                onClick={() => setShowSpec(!showSpec)}
                className="flex justify-between items-center w-full text-left text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1A] py-1"
              >
                <span>Product Details</span>
                <span className={`transition-transform duration-300 ${showSpec ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${showSpec ? "max-h-56 mt-3" : "max-h-0"}`}>
                <ul className="space-y-2 text-xs text-[#5A5A58] leading-relaxed">
                  <li className="flex items-start gap-2"><Leaf size={11} className="mt-0.5 text-[#2D4A3E] shrink-0" /> Water-resistant waxed canvas</li>
                  <li className="flex items-start gap-2"><Leaf size={11} className="mt-0.5 text-[#2D4A3E] shrink-0" /> 100% recycled inner lining</li>
                  <li className="flex items-start gap-2"><Leaf size={11} className="mt-0.5 text-[#2D4A3E] shrink-0" /> Two-way YKK zipper with custom pull</li>
                  <li className="flex items-start gap-2"><Leaf size={11} className="mt-0.5 text-[#2D4A3E] shrink-0" /> Adjustable cuffs, premium brass hardware</li>
                  <li className="flex items-start gap-2"><Leaf size={11} className="mt-0.5 text-[#2D4A3E] shrink-0" /> Machine washable at 30°C</li>
                </ul>
              </div>
            </div>

            {/* Shipping info */}
            <div className="bg-[#F7F3EE] p-4 space-y-2">
              <p className="text-xs text-[#3A3A38] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2D4A3E] rounded-full"></span>
                Free shipping on orders over ₹999
              </p>
              <p className="text-xs text-[#3A3A38] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2D4A3E] rounded-full"></span>
                30-day hassle-free returns
              </p>
              <p className="text-xs text-[#3A3A38] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2D4A3E] rounded-full"></span>
                Carbon-neutral delivery
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;