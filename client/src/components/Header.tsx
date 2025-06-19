import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-black/90'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center py-4">
          {/* Empty space for logo removal */}
          <div className="w-8"></div>
          
          {/* Navigation with inline CTA */}
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              Training Offer
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('signup')}
              className="bg-gold text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Your First Session
            </button>
          </nav>
          
          {/* Member login button */}
          <div>
            <button className="border border-gold text-gold px-4 py-2 rounded-md hover:bg-gold hover:text-black transition-all duration-300">
              Member Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
