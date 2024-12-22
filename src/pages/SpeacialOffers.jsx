import React from 'react';
import './Offers.css';

const offers = [
  {
    id: 1,
    title: 'Buy 1 Get 1 Free',
    description: 'Get two books for the price of one! Limited time only.',
    bgColor: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Seasonal Discount',
    description: 'Flat 30% off on all mystery novels. Grab yours now!',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-red-500',
  },
  {
    id: 3,
    title: 'Flash Sale!',
    description: 'Up to 50% off on selected titles. Today only!',
    bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500',
  },
];

const SpeacialOffers = () => {
  return (
    <section className="special-offers-section py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white-900 mb-8 text-shadow animate-text-glow">
          Special Offers & Discounts
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`offer-card ${offer.bgColor} p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:rotate-3 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
              <p className="text-white text-lg">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeacialOffers;
