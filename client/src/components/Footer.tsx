export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-16 border-t border-gray-800" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-gold font-semibold text-xl mb-4">Contact Terry</h4>
            <div className="space-y-3 text-gray-400">
              <p>Phone: (555) 123-4567</p>
              <p>Email: terry@personaltraining.com</p>
              <p>123 Fitness Street<br />Health City, HC 12345</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold text-xl mb-4">Training Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 6:00 AM - 8:00 PM</li>
              <li>Saturday: 7:00 AM - 6:00 PM</li>
              <li>Sunday: 8:00 AM - 4:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Training Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  About Terry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('signup')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold text-xl mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Terry's Personal Training. All rights reserved. | 
            <a href="#" className="text-gray-400 hover:text-gold hover:underline transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="text-gray-400 hover:text-gold hover:underline transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
