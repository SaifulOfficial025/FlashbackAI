import React from "react";
import { PricingSection } from "./PricingSection";
import { StatsSection } from "./StatsSection";
import  WhyChoose from "../Home/WhyChoose";
import AnnouncementBar from "../../Shared/AnnouncementBar";
import Footer from "../../Shared/Footer";
import Testimonials from "./Testimonials";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] font-sans">
      <AnnouncementBar />
      {/* Branding Header (as per design) */}
      <header className="py-8 text-center border-b border-gray-100 bg-white">
        <span className="text-2xl font-serif font-bold text-[#7c602e] tracking-tight">
          FlashbackAI
        </span>
      </header>

      <main>
        <PricingSection />
        <StatsSection />
        <WhyChoose />
        <Testimonials />
      </main>

      {/* Simple Mini-Footer as seen in design */}
      <Footer />
    </div>
  );
}
