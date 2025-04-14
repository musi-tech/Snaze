// App.js
import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import EditorialSection from '../components/home/EditorialSection';
import Footer from '../components/layout/Footer';
import NewArrivalsSection from '../components/home/NewArrivalsSection'
import InstagramFeedSection from '../components/home/InstagramFeedSection';
import CategoriesSection from '../components/home/CategoriesSection';
import NewsletterSection from '../components/home/NewsletterSection';
import ProductSection from '../components/home/ProductSection';


function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <ProductSection />
      <EditorialSection />
      <NewsletterSection  />
      <InstagramFeedSection />
      <Footer />
    </div>
  );
}

export default LandingPage;