import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Testimonials />
      <Footer />
      <CookieBanner />
    </div>
  );
}
