import { Link } from "wouter";
import { motion } from "framer-motion";

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl uppercase mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Categories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Streetwear Category */}
          <motion.div 
            className="relative overflow-hidden group h-96 md:h-[36rem]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&h=1200&q=80" 
              alt="Streetwear Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-2xl uppercase mb-2">Streetwear</h3>
              <p className="text-white opacity-90 mb-4">Bold designs for urban expression</p>
              <Link href="/category/streetwear">
                <a className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 py-2 px-6 uppercase tracking-wider text-sm">
                  Explore
                </a>
              </Link>
            </div>
          </motion.div>
          
          {/* Minimalist Category */}
          <motion.div 
            className="relative overflow-hidden group h-96 md:h-[36rem]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&h=1200&q=80" 
              alt="Minimalist Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-2xl uppercase mb-2">Minimalist</h3>
              <p className="text-white opacity-90 mb-4">Clean lines, refined essentials</p>
              <Link href="/category/minimalist">
                <a className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 py-2 px-6 uppercase tracking-wider text-sm">
                  Explore
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
