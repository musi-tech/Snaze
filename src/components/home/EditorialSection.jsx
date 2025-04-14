import Button from "../ui/button.jsx";
import { motion } from "framer-motion";

const EditorialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl uppercase mb-8 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          SNAZE Style Guide
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl uppercase mb-6">Urban Minimalism</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our latest editorial explores the intersection of street culture and minimalist luxury. 
              Bold silhouettes paired with refined essentials create a distinct aesthetic that defines 
              the modern wardrobe.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Discover how to style our key pieces for both statement impact and understated elegance.
            </p>
            <Button 
              variant="black" 
              className="uppercase tracking-wider"
            >
              Read More
            </Button>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80" 
              alt="SNAZE Editorial" 
              className="w-full transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF3366] flex items-center justify-center">
              <span className="text-white uppercase text-center text-sm tracking-wider">Snaze<br/>2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
