export default function Testimonials() {
  const testimonials = [
    {
      text: "Terry's approach to personal training is truly exceptional. His 30 years of experience shows in every session. I've achieved results I never thought possible.",
      author: "Sarah Mitchell"
    },
    {
      text: "The private gym environment allows me to focus completely on my workout. Terry's guidance has transformed not just my body, but my entire relationship with fitness.",
      author: "Michael Chen"
    },
    {
      text: "Professional, knowledgeable, and genuinely caring. Terry creates personalized programs that actually work. Best investment I've made in my health.",
      author: "Jennifer Rodriguez"
    }
  ];

  return (
    <section className="bg-dark-gray py-20" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-gold text-center mb-16">
          What Our Members Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-darker-gray p-8 border-l-4 border-gold rounded-r-lg">
              <p className="text-gray-200 italic text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <h4 className="text-gold font-semibold text-right text-lg">
                - {testimonial.author}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
