"use client";

import {
  UserCheck,
  BadgePercent,
  ThumbsUp,
  Clock,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#07589E]">
          Why Choose Us
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Choose us for an easy, reliable, and secure vehicle transaction.
          We make the process hassle-free and beneficial for you.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <UserCheck size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">
              Professionalism
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <BadgePercent size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">
              Competitive Offers
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <ThumbsUp size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">
              Customer Satisfaction
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien
            </p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <Clock size={48} className="mx-auto text-[#07589E]" />
            <h3 className="mt-6 font-semibold text-lg">
              Fast & Convenient
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus molestie sapien
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
