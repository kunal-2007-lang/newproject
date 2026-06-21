'use client';
import { HeartHandshake, ShieldCheck, Users, Gift } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

export default function About() {
  const stats = [
    {
      icon: <HeartHandshake size={32} />,
      title: 'Social Welfare',
      desc: 'Dedicated to uplifting society.',
    },
    {
      icon: <Users size={32} />,
      title: 'Family Support',
      desc: 'Aiding financially weak families.',
    },
    {
      icon: <Gift size={32} />,
      title: 'Prize Schemes',
      desc: 'Organizing mega distribution events.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Registered Trust',
      desc: 'Reg No: MUZ/8976/2026.',
    },
  ];
  const sliderImages: string[] = [
    '/info-offers-image.jpeg',
    '/offers-image.jpeg',
    '/img-1.jpg',
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10  rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] outline outline-offset-4 outline-orange-100">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="w-full h-full bg-[#F8A21D]"
              >
                {sliderImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="bg-[#F8A21D]">
                    <img
                      // src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                      alt="Social Welfare"
                      src={img}
                      className="w-full h-full bg-transparent "
                    />{' '}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* <img
                // src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                alt="Social Welfare"
                src="/img-1.jpg"
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                  <p className="font-bold text-gray-800 text-lg">
                    Working together for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-orange-100 rounded-3xl -z-10 pattern-dots opacity-50"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              About{' '}
              <span className="text-orange-600">
                Sarv Samaj Kalyan Seva Trust
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Sarv Samaj Kalyan Seva Trust is a registered charitable trust
              working dedicatedly for the welfare of the society. We strongly
              believe in supporting poor families and bringing smiles to their
              faces through various initiatives.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              One of our key focuses is helping in the marriage arrangements of
              girls from financially weak backgrounds. To fund these noble
              causes, we organize transparent and exciting prize distribution
              programs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{stat.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
