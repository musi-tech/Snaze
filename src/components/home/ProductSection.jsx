import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, Share2, Plus, Minus, ArrowRight } from "lucide-react";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("burgundy");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [showSpec, setShowSpec] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const colors = [
    { name: "burgundy", hex: "bg-red-800" },
    { name: "white", hex: "bg-white" },
    { name: "gray", hex: "bg-gray-400" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Floating header that appears on scroll */}
      <div className={`fixed top-0 left-0 right-0 bg-white shadow-md transform transition-transform duration-300 z-30 py-4 px-6 flex justify-between items-center ${scrolled ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded overflow-hidden">
            <img src={require('../../assets/A12.jpeg')} alt="Product thumbnail" className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="font-semibold">THE MINIMALIST JACKET</h3>
            <p className="text-red-800 font-medium">$295.00</p>
          </div>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-red-800 transition duration-300 flex items-center space-x-2">
          <ShoppingBag className="w-4 h-4" />
          <span>ADD TO CART</span>
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-xl overflow-hidden h-96 lg:h-[600px] bg-neutral-100">
              <img src={require('../../assets/A13.jpeg')}   
                alt="Minimalist Jacket"
                className="object-cover w-full h-full"
              />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="absolute top-16 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition">
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
  {[
    require('../../assets/A11.jpeg'),
    require('../../assets/A12.jpeg'),
    require('../../assets/A13.jpeg'),
    require('../../assets/A14.jpeg'),
  ].map((src, index) => (
    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-neutral-100 cursor-pointer hover:opacity-80 transition">
      <img src={src} alt={`Product view ${index + 1}`} className="object-cover w-full h-full" />
    </div>
  ))}
</div>

          </div>
          
          {/* Right Column - Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">NEW ARRIVAL</div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">THE MINIMALIST JACKET</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">42 reviews</span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our signature piece merges urban aesthetics with minimalist design.
                Crafted from premium materials with meticulous attention to detail for the modern minimalist.
              </p>
              <div className="text-2xl font-bold text-red-800">$295.00</div>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="font-medium text-gray-800 block mb-3">COLOR</span>
                <div className="flex mt-2 space-x-3">
                  {colors.map((color) => (
                    <div 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full cursor-pointer transition transform hover:scale-110 ${color.hex} ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-red-800' : 'border border-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 mt-2 block capitalize">{selectedColor}</span>
              </div>
              
              <div>
                <span className="font-medium text-gray-800 block mb-3">SIZE</span>
                <div className="flex flex-wrap gap-3">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg transition ${
                        selectedSize === size 
                          ? "bg-black text-white ring-2 ring-black" 
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <a href="#" className="text-sm text-red-800 mt-2 inline-block underline">Size Guide</a>
              </div>
              
              <div>
                <span className="font-medium text-gray-800 block mb-3">QUANTITY</span>
                <div className="flex items-center border border-gray-300 rounded-lg w-32">
                  <button 
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-2 text-gray-600 hover:text-red-800"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-red-800"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-black text-white py-3 px-6 rounded-xl hover:bg-red-800 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-medium">ADD TO CART</span>
              </button>
              <button className="flex-1 border-2 border-black py-3 px-6 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                BUY NOW
              </button>
            </div>
            
            {/* Collapsible sections */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <button 
                  onClick={() => setShowSpec(!showSpec)} 
                  className="flex justify-between items-center w-full py-2 text-left font-medium"
                >
                  <span>Product Specifications</span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showSpec ? 'rotate-90' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${showSpec ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="py-3 text-gray-600 space-y-2">
                    <p>• Water-resistant premium cotton blend</p>
                    <p>• Two-way YKK zipper with custom pull</p>
                    <p>• Interior pocket system with hidden compartments</p>
                    <p>• Adjustable cuffs with premium metal hardware</p>
                    <p>• Machine washable at 30°C</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free shipping on orders over $150</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommendation section */}
        
      </div>
    </div>
  );
};

export default ProductPage;