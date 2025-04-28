'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-black text-white min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden rounded-b-[40px]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 px-6 md:px-12">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Start your legacy <br /> Autography
          </h1>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Remember who you were, <br /> Discover who you are
          </p>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 border rounded-full px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
              <Image src="/assets/google-icon.png" width={20} height={20} alt="Google Icon" />
              Continue with Google
            </button>

            <button className="flex items-center justify-center gap-2 border rounded-full px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
              <Image src="/assets/apple-icon.png" width={20} height={20} alt="Apple Icon" />
              Continue with Apple
            </button>
          </div>

          {/* Terms Text */}
          <p className="text-xs text-gray-400 mt-2">
            By clicking Continue, you agree to Autography’s <span className="underline">Terms of Service</span>, <span className="underline">Privacy Policy</span>, and use of cookies.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src="/assets/hero-book.png"
            alt="Hero Book"
            width={320}
            height={320}
            className="object-contain"
          />

          {/* Download Section */}
          <div className="text-center mt-4">
            <p className="font-semibold mb-4 text-white text-lg">Download App</p>
            <div className="flex gap-4 justify-center">
              <Image src="/assets/appstore.png" width={140} height={45} alt="App Store" />
              <Image src="/assets/playstore.png" width={140} height={45} alt="Google Play" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
