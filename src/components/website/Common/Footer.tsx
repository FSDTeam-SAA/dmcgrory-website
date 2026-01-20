"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#07589E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 text-center">

        {/* ===== Menu Links ===== */}
        <div className="flex justify-center gap-12 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/questionnaires" className="hover:underline">
            Questionnaires
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* ===== Social Icons ===== */}
        <div className="flex justify-center gap-6 mt-6">
          <Link href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:opacity-80 transition" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:opacity-80 transition" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <Youtube className="w-5 h-5 hover:opacity-80 transition" />
          </Link>
        </div>

        {/* ===== Copyright ===== */}
        <p className="mt-8 text-sm text-white/90">
          © {new Date().getFullYear()} Fleet Core. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
