"use client";

import { Car, Tag, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesWeProvide() {
  // ✅ Light animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="bg-white py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-[#07589E]"
        >
          Services We Provide
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus molestie sapien, at fringilla ligula commodo quis.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={stagger}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-10 hover:shadow-md transition"
          >
            <Car size={50} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Buy a Car</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien, at fringilla ligula commodo
              quis.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-10 hover:shadow-md transition"
          >
            <Tag size={50} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Sell a Car</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien, at fringilla ligula commodo
              quis.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-10 hover:shadow-md transition"
          >
            <DollarSign size={50} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Best Pricing</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien, at fringilla ligula commodo
              quis.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
