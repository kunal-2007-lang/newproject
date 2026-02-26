import React from 'react';
import {
  ArrowRight,
  Ticket,
  Users,
  Trophy,
  HandHeart,
  Info,
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Entry Fee',
      desc: 'Register with a standard entry fee of ₹5100 to participate in the mega lucky draw.',
      icon: <Ticket size={28} />,
      color: 'from-blue-500 to-blue-600',
      bgSubtle: 'bg-blue-50',
    },
    {
      title: 'Add Members',
      desc: 'Each participant must add 10 more bike members under them to qualify.',
      icon: <Users size={28} />,
      color: 'from-purple-500 to-purple-600',
      bgSubtle: 'bg-purple-50',
    },
    {
      title: 'Lucky Draw',
      desc: 'The lucky draw will be conducted transparently completely online.',
      icon: <Trophy size={28} />,
      color: 'from-orange-500 to-orange-600',
      bgSubtle: 'bg-orange-50',
    },
    {
      title: 'Social Cause',
      desc: 'The proceeds are organized to support the marriage of poor girls.',
      icon: <HandHeart size={28} />,
      color: 'from-rose-500 to-rose-600',
      bgSubtle: 'bg-rose-50',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-gray-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            How It <span className="text-orange-600">Works</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A simple, transparent process designed to create winners while
            supporting a noble social cause.
          </p>
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-6 sm:p-8 shadow-xl text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -left-10 -bottom-10 opacity-20">
            <Trophy size={150} />
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold mb-2">Showroom Bike Scheme</h3>
            <p className="text-orange-100 md:text-lg">
              Participate and you could win a bike showroom scheme worth up to{' '}
              <strong className="text-white text-xl">₹1 Lakh</strong>.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
            >
              Register Now <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line for large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-200 -z-10 group-hover:bg-orange-300 transition-colors"></div>
              )}

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative z-10 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg mb-6 transform group-hover:rotate-6 transition-transform`}
                >
                  {step.icon}
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400">
                  {idx + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 flex-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
