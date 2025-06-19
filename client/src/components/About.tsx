export default function About() {
  return (
    <section className="bg-dark-gray py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gold mb-8 text-left">
              Why Choose Personal Training with Terry?
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              Experience the pinnacle of personalized fitness with Terry's expertise. My core philosophy is built on providing unparalleled one-on-one attention within the focused and motivating atmosphere of my private training space. With a rich legacy of <strong className="text-white">30 years of professional coaching experience</strong>, I am committed to your success.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Join a thriving community of over <strong className="text-white">200 members</strong> who have already embarked on their transformative journey with me. Your goals are my mission.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Welcoming Interior of Terry's Training Space" 
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
