import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
  {
    id: 1,
    url: "#",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "SNAZE Style 1",
  },
  {
    id: 2,
    url: "#",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "SNAZE Style 2",
  },
  {
    id: 3,
    url: "#",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "SNAZE Style 3",
  },
  {
    id: 4,
    url: "#",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "SNAZE Style 4",
  },
  {
    id: 5,
    url: "#",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "SNAZE Style 5",
  },
  {
    id: 6,
    url: "#",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "SNAZE Style 6",
  },
];

const InstagramFeedSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Instagram size={18} className="text-[#2D4A3E]" />
            <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1A] uppercase tracking-[0.15em]">
              @snaze_official
            </h2>
          </div>
          <p className="text-[#8A8A88] text-xs tracking-widest uppercase">
            Tag us to be featured
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5 md:gap-2">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              className="group relative overflow-hidden aspect-square block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#2D4A3E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1C1C1A] tracking-[0.2em] uppercase border-b-2 border-[#2D4A3E] pb-0.5 hover:text-[#2D4A3E] transition-colors duration-300"
          >
            <Instagram size={14} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
