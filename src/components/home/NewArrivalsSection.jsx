import React, { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";

const categories = ["ALL", "STREETWEAR", "MINIMALIST", "OUTERWEAR", "TOPS", "BOTTOMS"];
const products = [
  {
    id: 1,
    title: "Technical Cargo Pants",
    color: "Black",
    price: "$189.00",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&w=800&q=80",
    category: "STREETWEAR",
  },
  {
    id: 2,
    title: "Oversized Graphic Tee",
    color: "White",
    price: "$85.00",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    category: "TOPS",
  },
  {
    id: 3,
    title: "Minimalist Hoodie",
    color: "Heather Gray",
    price: "$120.00",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1509946458702-4378df1e2560?auto=format&fit=crop&w=800&q=80",
    category: "MINIMALIST",
  },
  {
    id: 4,
    title: "Utility Bomber Jacket",
    color: "Olive",
    price: "$230.00",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=800&q=80",
    category: "OUTERWEAR",
  },
  {
    id: 5,
    title: "Streetwear Cap",
    color: "Black",
    price: "$45.00",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
    category: "STREETWEAR",
  },
  {
    id: 6,
    title: "Minimalist Sweatshirt",
    color: "Cream",
    price: "$95.00",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800&q=80",
    category: "MINIMALIST",
  },
];

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    // Show a brief notification animation or feedback here
  };

  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header with cart indicator */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">NEW ARRIVALS</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
            <a
              href="#"
              className="text-sm font-medium border-b-2 border-black hover:text-pink-600 hover:border-pink-600 transition-colors duration-300"
            >
              View All
            </a>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 border rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-black text-white border-black shadow-md"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid with animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay with actions on hover */}
                <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-white text-black p-3 rounded-full hover:bg-pink-600 hover:text-white transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button 
                    className="bg-white text-black p-3 rounded-full hover:bg-pink-600 hover:text-white transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Tag label */}
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              
              {/* Product info */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-lg font-bold text-pink-600">{product.price}</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">{product.color}</p>
                
                {/* Add to cart button that appears on mobile or always visible */}
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center gap-2 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;