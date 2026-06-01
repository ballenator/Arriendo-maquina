import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/sections/HeroSection";
import MachinesSection from "@/app/sections/MachinesSection";
import AboutSection from "@/app/sections/AboutSection";
import ContactSection from "@/app/sections/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MachinesSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>



      <WhatsAppButton/>
      <ScrollToTop />
    </main>
  );
}