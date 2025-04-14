// SubscribeSection.jsx
import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-black text-white py-20 px-4 text-center">
      <h2 className="text-2xl md:text-4xl mb-4">JOIN THE MOVEMENT</h2>
      <p className="text-sm md:text-base mb-6">
        Subscribe to receive updates on new releases, styling guides, and exclusive offers.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-2/3 px-4 py-2 text-black rounded outline-none"
        />
        <button className="bg-[#FF3366] hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded">
          SUBSCRIBE
        </button>
      </div>
      <p className="text-xs text-gray-400 max-w-lg mx-auto">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from SNAZE.
      </p>
    </div>
  );
};

export default NewsletterSection;
