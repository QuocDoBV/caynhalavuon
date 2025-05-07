import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Extract hash from URL if exists
    const hash = window.location.hash;
    
    if (hash) {
      // Remove the # symbol
      const elementId = hash.slice(1);
      
      // Give time for the page to render
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to the home page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ServicesSection />
        <VisionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
