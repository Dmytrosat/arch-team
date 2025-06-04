
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Sustainable Architecture",
      excerpt: "Exploring how emerging technologies and materials are shaping the next generation of eco-friendly buildings.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2965&q=80",
      author: "Sarah Mitchell",
      date: "March 15, 2024",
      category: "Sustainability",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Designing for Urban Density",
      excerpt: "How thoughtful architecture can create livable spaces in increasingly dense urban environments.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
      author: "David Chen",
      date: "March 8, 2024",
      category: "Urban Planning",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Art of Minimalist Design",
      excerpt: "Understanding how less can be more in architectural design, focusing on essential elements and clean lines.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
      author: "Maria Rodriguez",
      date: "February 28, 2024",
      category: "Design Philosophy",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Smart Buildings and IoT Integration",
      excerpt: "How Internet of Things technology is revolutionizing building management and user experience.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=5512&q=80",
      author: "James Wilson",
      date: "February 20, 2024",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Biophilic Design in Modern Architecture",
      excerpt: "Incorporating natural elements into building design to improve health and well-being.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80",
      author: "Sarah Mitchell",
      date: "February 12, 2024",
      category: "Design",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Adaptive Reuse: Breathing New Life into Old Buildings",
      excerpt: "The art and science of transforming historic structures for modern use while preserving their character.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=4392&q=80",
      author: "David Chen",
      date: "February 5, 2024",
      category: "Renovation",
      readTime: "8 min read"
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our thoughts on architecture, design trends, sustainability, 
              and the future of the built environment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-fade-in">
            <Link to={`/blog/${featuredArticle.id}`} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{featuredArticle.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {featuredArticle.date}
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="mr-2">Read Article</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-light mb-12 text-gray-900 animate-fade-in">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
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

export default Blog;
