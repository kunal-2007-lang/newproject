import React from 'react';
import { Heart } from 'lucide-react';

export default function SocialWelfare() {
  return (
    <section
      id="welfare"
      className="py-20 lg:py-28 relative overflow-hidden bg-white scroll-mt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-50 rounded-full blur-3xl opacity-50 -z-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50 -z-0 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-rose-500 mb-6 shadow-sm">
            <Heart size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Support for Poor Girls’{' '}
            <span className="text-rose-500">Marriage</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            The heart of Sarv Samaj Kalyan Seva Trust lies in its commitment to
            society. All our programs are organized to support financially weak
            families in arranging the marriages of their daughters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-rose-500 mb-4">
              100+
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Families Supported
            </h4>
            <p className="text-gray-600">
              Bringing joy and financial stability to families during crucial
              times.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-rose-500 mb-4">
              ₹0
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Hidden Costs
            </h4>
            <p className="text-gray-600">
              Pure dedication to ensuring that the funds reach those who
              actually need them.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-rose-500 mb-4">
              100%
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Transparency
            </h4>
            <p className="text-gray-600">
              Clear guidelines and processes for every scheme and distribution
              event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
