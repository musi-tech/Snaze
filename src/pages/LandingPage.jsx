import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import MenWomenBanner from '../components/home/MenWomenBanner';
import NewArrivalsSection from '../components/home/NewArrivalsSection';
import CollectionsSection from '../components/home/CollectionsSection';
import ProductSection from '../components/home/ProductSection';
import EditorialSection from '../components/home/EditorialSection';
import NewsletterSection from '../components/home/NewsletterSection';
import InstagramFeedSection from '../components/home/InstagramFeedSection';
import Footer from '../components/layout/Footer';

function LandingPage() {
  return (
    <div className="font-sans bg-[#F7F3EE]">
      <Header />
      <HeroSection />
      <MenWomenBanner />
      <NewArrivalsSection />
      <CollectionsSection />
      <ProductSection />
      <EditorialSection />
      <NewsletterSection />
      <InstagramFeedSection />
      <Footer />
    </div>
  );
}

export default LandingPage;