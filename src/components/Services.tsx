
const Services = () => {
  const services = [
    {
      title: "Building Design",
      description: "From concept to completion, we create architectural solutions that are both innovative and practical.",
      icon: "🏗️"
    },
    {
      title: "Interior Design",
      description: "Crafting interior spaces that reflect your lifestyle while optimizing functionality and aesthetics.",
      icon: "🪑"
    },
    {
      title: "Urban Planning",
      description: "Strategic planning and design for sustainable urban development and community enhancement.",
      icon: "🏙️"
    },
    {
      title: "Sustainable Design",
      description: "Environmentally conscious architecture that reduces ecological impact without compromising design quality.",
      icon: "🌱"
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight ensuring timely delivery and quality control throughout the build process.",
      icon: "📋"
    },
    {
      title: "Consultation Services",
      description: "Expert architectural advice and feasibility studies to help you make informed design decisions.",
      icon: "💡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive architectural services tailored to meet your unique needs and vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
