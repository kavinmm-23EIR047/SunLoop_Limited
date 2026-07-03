import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-3 gap-8 py-16 w-full max-w-[1600px] mx-auto px-6 border-t border-gray-200 mt-12">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/sunloop-logo.webp"
          alt="Sunloop Energy"
          width={140}
          height={140}
        />
        <p className="text-gray-600 max-w-sm italic">
          AI powered renewable energy infrastructure for modern enterprises. Built with precision and intelligence.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-[#1c2748] italic mb-2">Services</h4>
        <Link href="/services/solar-power-plants" className="text-gray-600 hover:text-[#fd6206] transition-colors italic">Solar Power Plants</Link>
        <Link href="/services/ev-charging-infrastructure" className="text-gray-600 hover:text-[#fd6206] transition-colors italic">EV Charging Infrastructure</Link>
        <Link href="/services/energy-storage-systems" className="text-gray-600 hover:text-[#fd6206] transition-colors italic">Energy Storage Systems</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-[#1c2748] italic mb-2">Company</h4>
        <Link href="/about" className="text-gray-600 hover:text-[#fd6206] transition-colors italic">About Us</Link>
        <Link href="/contact" className="text-gray-600 hover:text-[#fd6206] transition-colors italic">Contact</Link>
        <Link href="/ai-portal" className="text-gray-600 hover:text-[#fd6206] transition-colors italic">AI Portal</Link>
      </div>
    </footer>
  );
}
