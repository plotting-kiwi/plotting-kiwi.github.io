export default function Hero() {
  return (
    <section className="hero-bg relative h-screen flex items-end justify-start" id="home">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero content positioned bottom-left in square layout */}
      <div className="relative z-10 ml-8 mb-16 lg:ml-16 lg:mb-24">
        <div className="bg-black/40 backdrop-blur-sm p-8 lg:p-12 rounded-lg max-w-md lg:max-w-lg">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Truly Personal<br />
            <span className="text-gold">Training with Terry</span>
          </h1>
          <p className="text-lg lg:text-xl mb-4 text-gray-200 font-light">
            Personal training in a private and supportive gym environment.
          </p>
          <div className="flex items-center mb-4 text-gold">
            <span className="text-2xl">★★★★☆</span>
            <span className="ml-2 font-semibold text-xl">4.9</span>
            <span className="ml-2 text-white">Average Rating</span>
          </div>
          <p className="text-lg text-gray-200 font-light">
            Stay fit and enjoy the good life.
          </p>
        </div>
      </div>
    </section>
  );
}
