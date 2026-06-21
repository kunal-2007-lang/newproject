'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const sliderImages = [
  '/img-1.jpg', // Car
  // 'https://images.unsplash.com/photo-1592838064575-70ed626d3a15?auto=format&fit=crop&q=80', // Tractor
  // 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80', // Bike
  // 'https://images.unsplash.com/photo-1629868417961-12f5581e263d?auto=format&fit=crop&q=80', // Scooter
  // 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80', // Laptop
  // 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80', // Gold Jewelry
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] min-h-150 flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="w-full h-full"
        >
          {sliderImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 bg-linear-to-t from-gray-900/80 via-black/50 to-transparent pointer-events-none"></div>{' '}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-medium mb-6 animate-fade-in-down shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Welcome to the Mega Prize Distribution Scheme
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
          सर्व समाज{' '}
          <span className="text-orange-500 relative">
            कल्याण
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-orange-400 opacity-70"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 Q50 20 100 10"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>{' '}
          सेवा ट्रस्ट
        </h1>

        <h2 className="text-xl md:text-3xl text-gray-200 font-medium mb-10 italic drop-shadow-lg">
          &ldquo;अगर आप में दम है तो मौका देंगे हम&rdquo;
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <a
            href="#register"
            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all transform hover:-translate-y-1"
          >
            Register Now
          </a>
          <a
            href="#prizes"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 rounded-full font-bold text-lg shadow-xl transition-all border border-transparent hover:border-gray-200 transform hover:-translate-y-1"
          >
            View Prizes
          </a>
        </div>
      </div>
    </section>
  );
}
