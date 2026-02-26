import React from 'react';
import {
  Gift,
  Car,
  Tractor,
  Battery,
  Wind,
  Bike,
  Smartphone,
  MonitorSpeaker,
  Laptop,
  Tv,
  MonitorPlay,
  WashingMachine,
  Flame,
  Refrigerator,
  Fan,
  Heart,
  Shirt,
  Footprints,
  Utensils,
} from 'lucide-react';

export default function Prizes() {
  const prizes = [
    { title: 'Car (Alto)', category: 'Vehicle', icon: <Car size={32} /> },
    { title: 'Tractor', category: 'Vehicle', icon: <Tractor size={32} /> },
    {
      title: 'Battery + Inverter',
      category: 'Appliance',
      icon: <Battery size={32} />,
    },
    { title: 'Air Cooler', category: 'Appliance', icon: <Wind size={32} /> },
    { title: 'Motorcycle', category: 'Vehicle', icon: <Bike size={32} /> },
    { title: 'Scooter', category: 'Vehicle', icon: <Bike size={32} /> },

    {
      title: 'Smartphone',
      category: 'Electronics',
      icon: <Smartphone size={32} />,
    },
    { title: 'AC', category: 'Appliance', icon: <Wind size={32} /> },
    { title: 'Laptop', category: 'Electronics', icon: <Laptop size={32} /> },
    { title: 'LED TV', category: 'Electronics', icon: <Tv size={32} /> },
    {
      title: 'Speaker System',
      category: 'Electronics',
      icon: <MonitorSpeaker size={32} />,
    },
    {
      title: 'Washing Machine',
      category: 'Appliance',
      icon: <WashingMachine size={32} />,
    },
    {
      title: 'Induction Cooktop',
      category: 'Appliance',
      icon: <Flame size={32} />,
    },
    {
      title: 'Refrigerator',
      category: 'Appliance',
      icon: <Refrigerator size={32} />,
    },
    { title: 'Mixer Grinder', category: 'Appliance', icon: <Fan size={32} /> },
    { title: 'Iron', category: 'Appliance', icon: <Flame size={32} /> },

    { title: 'Gold Necklace', category: 'Jewelry', icon: <Heart size={32} /> },
    { title: 'Gold Bangles', category: 'Jewelry', icon: <Heart size={32} /> },

    { title: 'Suit (Men)', category: 'Clothing', icon: <Shirt size={32} /> },
    {
      title: 'Safety Shoes',
      category: 'Footwear',
      icon: <Footprints size={32} />,
    },
    { title: 'Ladies Suit', category: 'Clothing', icon: <Shirt size={32} /> },

    {
      title: 'Dinner Set',
      category: 'Kitchenware',
      icon: <Utensils size={32} />,
    },
  ];

  return (
    <section id="prizes" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Rewards
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Mega <span className="text-orange-600">Prizes</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Participate in our lucky draw and stand a chance to win from these
            22 amazing prize categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold group-hover:bg-orange-200 group-hover:text-orange-700 transition-colors">
                {idx + 1}
              </div>

              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-600 group-hover:text-white">
                {prize.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-1">
                {prize.title}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold group-hover:text-orange-600/70">
                {prize.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
