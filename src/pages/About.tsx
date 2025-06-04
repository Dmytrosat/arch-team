
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      bio: "With over 15 years of experience, Sarah leads our design vision with a focus on sustainable architecture."
    },
    {
      name: "David Chen",
      role: "Senior Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      bio: "David specializes in commercial projects and urban planning with international experience."
    },
    {
      name: "Maria Rodriguez",
      role: "Interior Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      bio: "Maria brings artistic vision to interior spaces, creating environments that inspire and function beautifully."
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      bio: "James ensures our projects are delivered on time and within budget while maintaining the highest quality standards."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push the boundaries of architectural design while respecting environmental and social contexts."
    },
    {
      title: "Sustainability",
      description: "Every project incorporates sustainable practices and materials to minimize environmental impact."
    },
    {
      title: "Collaboration",
      description: "We work closely with clients, communities, and consultants to create meaningful spaces."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of design quality and professional service in every project."
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
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking architecture studio committed to creating spaces that inspire, 
              function beautifully, and contribute positively to their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-light mb-8 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, ArchStudio began as a small practice with a big vision: to create 
                  architecture that serves both people and planet. What started as a two-person studio 
                  has grown into a dynamic team of architects, designers, and thinkers.
                </p>
                <p>
                  Over the past decade, we've completed more than 200 projects spanning residential, 
                  commercial, and public sectors. Our work has been recognized with numerous awards 
                  and has been featured in leading architectural publications.
                </p>
                <p>
                  Today, we continue to push the boundaries of design while staying true to our core 
                  values of sustainability, innovation, and human-centered design.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=3346&q=80"
                alt="Our studio workspace"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-light mb-6 text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who bring creativity, expertise, and passion to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 text-gray-900">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-light mb-6 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our architectural philosophy is built on four fundamental principles that guide every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-medium mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
