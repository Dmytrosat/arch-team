
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "interiors", label: "Interiors" },
    { id: "urban", label: "Urban Planning" }
  ];

  const projects = [
    {
      id: 1,
      title: "Urban Residence Complex",
      category: "residential",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=5389&q=80",
      description: "A modern residential complex featuring sustainable design and community spaces.",
      year: "2023",
      location: "New York, NY"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=5657&q=80",
      description: "A glass tower that maximizes natural light while maintaining energy efficiency.",
      year: "2023",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      title: "Cultural Center",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
      description: "An innovative public space that brings art and community together.",
      year: "2022",
      location: "Chicago, IL"
    },
    {
      id: 4,
      title: "Minimalist Villa",
      category: "residential",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
      description: "A private residence showcasing clean lines and natural materials.",
      year: "2022",
      location: "Malibu, CA"
    },
    {
      id: 5,
      title: "Innovation Hub",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=5512&q=80",
      description: "A dynamic workspace designed to foster creativity and collaboration.",
      year: "2023",
      location: "Austin, TX"
    },
    {
      id: 6,
      title: "Executive Office Suite",
      category: "interiors",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=4392&q=80",
      description: "A sophisticated interior design blending functionality with elegance.",
      year: "2023",
      location: "Boston, MA"
    },
    {
      id: 7,
      title: "Waterfront District Plan",
      category: "urban",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=3346&q=80",
      description: "Comprehensive urban planning for sustainable waterfront development.",
      year: "2022",
      location: "Seattle, WA"
    },
    {
      id: 8,
      title: "Luxury Penthouse",
      category: "interiors",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=4480&q=80",
      description: "High-end interior design with panoramic city views.",
      year: "2023",
      location: "Miami, FL"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative architectural solutions that demonstrate 
              our commitment to excellence and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 capitalize">{project.category}</span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
