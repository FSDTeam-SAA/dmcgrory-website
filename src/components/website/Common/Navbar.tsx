"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/questionnaire", label: "Questionnaire" },
    { href: "/privacy-policy", label: "Privacy & Policy" },
  ];

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FleetCore"
              width={160}
              height={50}
              className="h-auto w-[100px] md:w-[100px]"
              priority
            />
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${
                    active ? "text-[#07589E] font-semibold" : "hover:text-[#07589E]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-[#07589E] text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-[#064b85] transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
