'use client';

import Image from 'next/image';

const ExploreSection = () => {
  return (
    <section className="py-1 text-center bg-white text-black" id="explore">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Explore the magic of Autography</h2>

      <div className="flex flex-wrap justify-center gap-8">
        <Image src="/assets/mobile-image.png" alt="Screenshot 1" width={650} height={650} />
      </div>
    </section>
  );
};

export default ExploreSection;
