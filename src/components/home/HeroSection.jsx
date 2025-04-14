import Button from "../ui/button.jsx";
import { Link } from "wouter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen pt-24 md:pt-0">
      <div className="w-full h-full">
        <div className="relative h-full">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=1600&q=80" 
                alt="SNAZE Fall Collection" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
          
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-white uppercase font-bold leading-none tracking-tighter mb-4">
              Snaze<br />2025
            </h1>
            <p className="text-white text-lg md:text-xl max-w-md mb-8">
              Explore our latest collection of modern streetwear designed for those who live beyond the conventional.
            </p>
            <Link href="#new-arrivals">
              <Button 
                variant="white" 
                size="lg"
                className="uppercase tracking-wider font-medium"
              >
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
