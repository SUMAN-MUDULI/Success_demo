import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Success Mantrr" className="w-10 h-10" />
          <span className="text-md md:text-xl font-bold text-mantrrBlue">
            Smart Savings <span className="text-green-600">by Success Mantrr</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
          <a
            href="https://wa.me/8342991246?text=Hi%20I%20am%20interested%20in%20earning%20with%20SuccessMantrr"
            target="_blank"
            rel="noreferrer"
            className="ml-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} aria-label="menu" className="md:hidden p-2">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t bg-white shadow">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
            <a
              href="https://wa.me/8342991246?text=Hi%20I%20am%20interested%20in%20earning%20with%20SuccessMantrr"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-center"
            >
            WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
