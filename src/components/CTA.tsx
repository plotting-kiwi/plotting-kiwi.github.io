export default function CTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gold py-16" id="signup">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
          Ready to Transform Your Fitness Journey?
        </h2>
        <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who have achieved their fitness goals with Terry's personalized training approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Start Your Journey Today
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black border-2 border-black px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>
        <div className="mt-6">
          <p className="text-black">
            Questions? <button onClick={() => scrollToSection('contact')} className="underline font-semibold hover:no-underline">Contact Terry directly</button>
          </p>
        </div>
      </div>
    </section>
  );
}
