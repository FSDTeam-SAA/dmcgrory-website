"use client";

import { Car, Tag, DollarSign } from "lucide-react";

export default function ServicesWeProvide() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#07589E]">
          Services We Provide
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus molestie sapien, at fringilla ligula commodo quis.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border rounded-xl p-10 hover:shadow-md transition">
            <Car size={50} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Buy a Car</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien, at fringilla ligula commodo
              quis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-10 hover:shadow-md transition">
            <Tag size={50} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Sell a Car</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien, at fringilla ligula commodo
              quis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-10 hover:shadow-md transition">
            <DollarSign size={50} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">Buy a Car</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien, at fringilla ligula commodo
              quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
