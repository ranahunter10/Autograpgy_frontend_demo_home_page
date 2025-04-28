'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4 px-6 lg:px-20 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width={130} height={40} />
        </Link>
      </div>

      {/* Center: Navigation inside white pill */}
      <div className="hidden md:flex items-center bg-white rounded-full py-2 px-6 gap-8">
        <Link href="#about" className="text-black text-sm font-medium hover:text-purple-600 transition">
          About us
        </Link>
        <Link href="#vision" className="text-black text-sm font-medium hover:text-purple-600 transition">
          Vision
        </Link>
        <Link href="#team" className="text-black text-sm font-medium hover:text-purple-600 transition">
          Team
        </Link>
        <Link href="#contact" className="text-black text-sm font-medium hover:text-purple-600 transition">
          Contact us
        </Link>
      </div>

      {/* Right: Sign in / Sign up */}
      <div className="flex items-center gap-4">
        <Link href="/login">
          <button className="border border-white text-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition">
            Sign in
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-purple-600 text-white rounded-full px-5 py-2 text-sm hover:bg-purple-700 transition">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
