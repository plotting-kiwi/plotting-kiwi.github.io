export default function Services() {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific fitness goals, abilities, and lifestyle. Experience personalized attention that accelerates your results."
    },
    {
      title: "Strength Training",
      description: "Build lean muscle, increase bone density, and boost metabolism with progressive strength training programs designed for your fitness level."
    },
    {
      title: "Weight Loss",
      description: "Achieve sustainable weight loss through scientifically-backed training methods combined with nutritional guidance and lifestyle coaching."
    },
    {
      title: "Functional Movement",
      description: "Improve daily movement patterns, reduce injury risk, and enhance quality of life through functional fitness training."
    },
    {
      title: "Sports Performance",
      description: "Enhance athletic performance with sport-specific training programs designed to improve power, agility, and competitive edge."
    },
    {
      title: "Injury Recovery",
      description: "Safe, progressive rehabilitation and conditioning to help you return to full function after injury with reduced risk of re-injury."
    }
  ];

  return (
    <section className="bg-black py-20" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-gold text-center mb-16">
          Training Offerings
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-darker-gray border border-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10"
            >
              <h3 className="text-2xl font-semibold text-gold mb-4">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
