
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // In a real app, this would fetch data based on the ID
  const project = {
    id: 1,
    title: "Urban Residence Complex",
    category: "Residential",
    year: "2023",
    location: "New York, NY",
    client: "Urban Development Corp",
    area: "45,000 sq ft",
    description: "A groundbreaking residential complex that redefines urban living through sustainable design and innovative community spaces. This project seamlessly blends modern architecture with environmental consciousness.",
    challenge: "The challenge was to create affordable housing that doesn't compromise on design quality while incorporating sustainable features and community amenities within a limited urban footprint.",
    solution: "Our solution involved a modular design approach with green rooftops, solar panels, and shared community spaces that foster social interaction while maintaining privacy.",
    images: [
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=5389&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2965&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80"
    ],
    features: [
      "LEED Platinum certified",
      "Solar panel integration",
      "Green roof systems",
      "Rainwater collection",
      "Community garden spaces",
      "Electric vehicle charging stations"
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <section className="pt-20 pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            to="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 animate-fade-in"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg animate-fade-in">
            <img 
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-6 text-gray-900">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium text-gray-900">{project.client}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Area</p>
                    <p className="font-medium text-gray-900">{project.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Category</p>
                    <p className="font-medium text-gray-900">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-light mb-8 text-gray-900 animate-fade-in">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-900 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
