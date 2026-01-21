"use client";

import { UserCheck, BadgePercent, ThumbsUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  // ✅ Very subtle animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
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
          Why Choose Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base"
        >
          Choose us for an easy, reliable, and secure vehicle transaction. We
          make the process hassle-free and beneficial for you.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={stagger}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-8 hover:shadow-md transition"
          >
            <UserCheck size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Professionalism</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              We uphold the highest standards of professionalism through
              integrity, reliability, and respect. Our team is committed to
              delivering quality work, clear communication, and timely results
              while maintaining a courteous and ethical approach in every
              interaction.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-8 hover:shadow-md transition"
          >
            <BadgePercent size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Competitive Offers</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              We provide competitive offers that deliver exceptional value by
              combining high-quality solutions, fair pricing, and flexible
              options tailored to meet our customers&apos; needs.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-8 hover:shadow-md transition"
          >
            <ThumbsUp size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">
              Customer Satisfaction
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Customer satisfaction is our top priority. We are committed to
              understanding our clients&apos; needs, exceeding expectations, and
              building lasting relationships through responsive service and
              dependable support
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border rounded-xl p-8 hover:shadow-md transition"
          >
            <Clock size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Fast & Convenient</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              We deliver fast and convenient solutions designed to save time and
              simplify the experience, ensuring efficiency and ease at every
              step.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
