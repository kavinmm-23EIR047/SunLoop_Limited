"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="navbar" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="Sunloop Energy home">
        <Image
          src="/images/sunloop-logo.webp"
          alt="Sunloop Energy"
          width={240}
          height={80}
          priority
        />
      </Link>
      <nav className="nav-links flex items-center gap-8 relative">
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <span className="flex items-center gap-1 py-4">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
          </span>
          
          {isServicesOpen && (
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl z-50">
              <div className="flex flex-col py-2">
                <Link href="/services/solar-power-plants" className="px-6 py-3 hover:bg-gray-50 text-sm border-b border-gray-100 last:border-0 hover:text-[#fd6206] transition-colors font-bold italic">
                  Solar Power Plants
                </Link>
                <Link href="/services/ev-charging-infrastructure" className="px-6 py-3 hover:bg-gray-50 text-sm border-b border-gray-100 last:border-0 hover:text-[#fd6206] transition-colors font-bold italic">
                  EV Charging Infrastructure
                </Link>
                <Link href="/services/energy-storage-systems" className="px-6 py-3 hover:bg-gray-50 text-sm border-b border-gray-100 last:border-0 hover:text-[#fd6206] transition-colors font-bold italic">
                  Energy Storage Systems
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link href="/ai-portal" className="py-4 hover:text-[#fd6206] transition-colors">AI Portal</Link>
        <Link href="/about" className="py-4 hover:text-[#fd6206] transition-colors">About</Link>
        <Link href="/contact" className="py-4 hover:text-[#fd6206] transition-colors">Contact</Link>
      </nav>
      <Link className="nav-cta bg-[#1c2748] text-white px-6 py-3 font-bold italic hover:bg-gray-800 transition-colors" href="/contact">
        Book consultation
      </Link>
    </header>
  );
}
