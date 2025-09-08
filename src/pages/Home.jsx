import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Men's Outerwear",
    image:
      "https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg",
    link: "/mens-outerwear",
  },
  {
    title: "Ladies Outerwear",
    image:
      "https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg",
    link: "/ladies-outerwear",
  },
  {
    title: "Men's T-Shirts",
    image:
      "https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg",
    link: "/mens-t-shirts",
  },
  {
    title: "Ladies T-Shirts",
    image:
      "https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg",
    link: "/ladies-t-shirts",
  },
];

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-end p-6">
              <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
                {category.title}
              </h1>
              <Link to={category.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  SHOP NOW
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Home;
