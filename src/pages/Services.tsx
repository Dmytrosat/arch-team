
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, Home, MapPin, ClipboardCheck, Lightbulb, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Architecture Design",
      description: "From concept to completion, we create architectural solutions that are both innovative and practical, tailored to your specific needs and vision.",
      features: ["Conceptual Design", "3D Visualization", "Technical Drawings", "Code Compliance"]
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Crafting interior spaces that reflect your lifestyle while optimizing functionality, aesthetics, and user experience.",
      features: ["Space Planning", "Material Selection", "Furniture Design", "Lighting Design"]
    },
    {
      icon: MapPin,
      title: "Urban Planning",
      description: "Strategic planning and design for sustainable urban development and community enhancement projects.",
      features: ["Master Planning", "Zoning Analysis", "Infrastructure Design", "Community Engagement"]
    },
    {
      icon: ClipboardCheck,
      title: "Project Supervision",
      description: "Comprehensive project oversight ensuring timely delivery and quality control throughout the construction process.",
      features: ["Construction Management", "Quality Control", "Timeline Management", "Budget Oversight"]
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We bring fresh perspectives and cutting-edge design thinking to every project."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with clients to ensure their vision is realized in every detail."
    },
    {
      icon: Building,
      title: "Proven Track Record",
      description: "Over 200 successful projects demonstrate our commitment to excellence."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive architectural services designed to bring your vision to life 
              with precision, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-lg animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg mr-4">
                    <service.icon size={32} className="text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              Why Choose ArchStudio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart in the industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-gray-700" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-light mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
