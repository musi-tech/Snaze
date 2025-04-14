import { motion } from "framer-motion";

const InstagramFeedSection = () => {
  const instagramPosts = [
    {
      id: 1,
      url: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=600&q=80",
      alt: "Instagram Post 1",
    },
    {
      id: 2,
      url: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&h=600&q=80",
      alt: "Instagram Post 2",
    },
    {
      id: 3,
      url: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=600&q=80",
      alt: "Instagram Post 3",
    },
    {
      id: 4,
      url: "#",
      imageUrl:
        "https://i.pinimg.com/736x/b6/6e/7d/b66e7de9667a1d4103bef0b4f00ad53d.jpg",
      alt: "Instagram Post 4",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl uppercase mb-8 tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          @SNAZE
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              className="group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={post.imageUrl}
                alt={post.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block border-b border-black pb-1 hover:text-[#FF3366] hover:border-[#FF3366] transition-colors duration-300"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
