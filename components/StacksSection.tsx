// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Image from 'next/image';
// import Link from 'next/link';

// const StacksSection = () => {
//   return (
//     <section className="py-20 text-center bg-white text-black" id="stacks">
//       <h2 className="text-3xl md:text-5xl font-bold mb-12">Stacks unleashed Autography</h2>

//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           768: { slidesPerView: 3 }
//         }}
//         className="px-6"
//       >
//         {[1, 2, 3].map((index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
//               <Image src="/assets/tomorrow-echo-icon.svg" width={60} height={60} alt="Icon" />
//               <h3 className="text-xl font-semibold">Tomorrow's Echo</h3>
//               <p className="text-gray-600 text-sm">Inspiring letters from past to present selves</p>
//               <button className="mt-4 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-900">
//                 Learn more →
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Link href="#features" className="block mt-8 text-purple-600 underline">See all features</Link>
//     </section>
//   );
// };

// export default StacksSection;

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

const StacksSection = () => {
  const slides = [
    {
      id: 1,
      title: "Tomorrow's Echo",
      description: "Inspiring letters from past to present selves",
      icon: "/assets/message-icon.png"
    },
    {
      id: 2,
      title: "Autography",
      description: "Discover your journey through time",
      icon: "/assets/message-icon.png"
    },
    {
      id: 3,
      title: "Explorer's Echo",
      description: "Discover your journey through time",
      icon: "/assets/message-icon.png"
    },
    {
      id: 4,
      title: "Temporary's Echo",
      description: "Discover your journey through time",
      icon: "/assets/message-icon.png"
    },
    {
      id: 5,
      title: "Tomorrow's Echo",
      description: "Discover your journey through time",
      icon: "/assets/message-icon.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 text-center bg-white text-black px-4" id="stacks">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16">Explore the magic of Autography</h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            speed={600}
            loop={true}
            grabCursor={true}
            className="!overflow-visible"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="!h-auto">
                <div className="h-full bg-gray-50 rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full p-2">
                    <Image
                      src={slide.icon}
                      width={45}
                      height={45}
                      alt={`${slide.title} Icon`}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{slide.title}</h3>
                  <p className="text-gray-600 text-sm min-h-[40px]">{slide.description}</p>
                  <button className="mt-2 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors text-sm flex items-center gap-1 group">
                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <Link
          href="#features"
          className="inline-block mt-10 text-purple-600 hover:text-purple-800 transition-colors underline text-sm md:text-base"
        >
          Explore all features
        </Link>
      </div>
    </section>
  );
};

export default StacksSection;

