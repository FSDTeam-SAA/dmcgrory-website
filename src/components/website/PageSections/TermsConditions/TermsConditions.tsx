"use client";

import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  Database,
} from "lucide-react";

export default function TermsConditions() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-4 py-10 relative"
      style={{
        backgroundImage: "url('/images/terms-bg.jpeg')",
      }}
    >
      {/* ===== Dark Overlay (important) ===== */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-4xl mx-auto ">
        {/* ===== Header ===== */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Privacy & Policy
          </h1>
          <p className="text-sm text-gray-300">
            Last Updated: January 12, 2025
          </p>
          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, protect, and handle your information when you use our
            website and submit forms.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="space-y-5">
          <PolicyCard
            icon={<ShieldCheck className="w-5 h-5 text-blue-600" />}
            title="Information We Collect"
            description="We collect information that you voluntarily provide through our forms and questionnaires, such as name, email address, phone number, and service-related details. We do not collect sensitive personal data unless explicitly required for the service."
          />

          <PolicyCard
            icon={<Lock className="w-5 h-5 text-blue-600" />}
            title="Secure Form Submission"
            list={[
              "Processing submissions",
              "Contacting you",
              "Providing requested services",
              "Improving forms",
            ]}
          />

          <PolicyCard
            icon={<AlertTriangle className="w-5 h-5 text-blue-600" />}
            title="Spam & Abuse Prevention"
            description="We use collected information to prevent spam, abuse, and unauthorized access. All form submissions are monitored and filtered to ensure security and data integrity."
          />

          <PolicyCard
            icon={<Database className="w-5 h-5 text-blue-600" />}
            title="Data Storage & Access"
            description="Your data is securely stored and only accessible to authorized personnel. We follow industry-standard security practices to protect your information."
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Reusable Card ===== */
function PolicyCard({
  icon,
  title,
  description,
  list,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  list?: string[];
}) {
  return (
    <div className="bg-white text-gray-800 rounded-xl p-5 shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      {description && (
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      )}

      {list && (
        <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
