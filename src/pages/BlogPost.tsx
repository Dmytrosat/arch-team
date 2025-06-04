
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, this would fetch data based on the ID
  const post = {
    id: 1,
    title: "The Future of Sustainable Architecture",
    content: `
      <p>The architectural landscape is undergoing a revolutionary transformation as sustainability becomes not just a trend, but a fundamental requirement for responsible design. As we face unprecedented environmental challenges, architects and designers are pioneering innovative approaches that harmonize human needs with ecological preservation.</p>

      <h2>The Current State of Sustainable Design</h2>
      
      <p>Today's sustainable architecture goes far beyond simple energy efficiency. We're seeing integrated systems that consider the entire lifecycle of a building, from material sourcing to end-of-life recycling. This holistic approach has led to remarkable innovations in both technology and design philosophy.</p>

      <p>Modern sustainable buildings incorporate advanced materials like cross-laminated timber, recycled steel, and bio-based insulation. These materials not only reduce environmental impact but often provide superior performance characteristics compared to traditional alternatives.</p>

      <h2>Emerging Technologies and Materials</h2>

      <p>The future of sustainable architecture is being shaped by breakthrough technologies that seemed impossible just a decade ago. Smart glass that automatically adjusts transparency based on sunlight, living walls that actively purify indoor air, and structural materials that can self-repair are moving from research labs to real-world applications.</p>

      <p>Biomimicry is playing an increasingly important role, with architects studying natural systems to create more efficient building designs. From ventilation systems inspired by termite mounds to structural frameworks that mimic bird bones, nature continues to be our greatest teacher.</p>

      <h2>The Role of Data and AI</h2>

      <p>Artificial intelligence and big data are revolutionizing how we design and operate sustainable buildings. Predictive analytics help optimize energy consumption, while machine learning algorithms can identify patterns in building performance that human analysis might miss.</p>

      <p>These technologies enable buildings to become truly responsive environments that adapt to usage patterns, weather conditions, and occupant preferences in real-time, maximizing efficiency while maintaining comfort.</p>

      <h2>Looking Ahead</h2>

      <p>As we look to the future, the integration of sustainable practices in architecture will only deepen. We anticipate seeing more carbon-negative buildings, structures that generate more energy than they consume, and designs that actively contribute to ecosystem restoration.</p>

      <p>The challenge ahead is not just technical but cultural – we must shift from viewing buildings as isolated objects to understanding them as integral parts of larger ecological and social systems. This paradigm shift will define the next generation of architectural innovation.</p>
    `,
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    category: "Sustainability",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2965&q=80"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <section className="pt-20 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 animate-fade-in"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
              <button className="flex items-center hover:text-gray-900 transition-colors duration-300">
                <Share2 size={16} className="mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg animate-fade-in">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none animate-fade-in">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\s*\n/g, '</p><p>').replace(/\n/g, ' ') }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-gray-900 text-center animate-fade-in">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Biophilic Design in Modern Architecture",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80",
                category: "Design"
              },
              {
                title: "Smart Buildings and IoT Integration",
                image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=5512&q=80",
                category: "Technology"
              },
              {
                title: "The Art of Minimalist Design",
                image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
                category: "Design Philosophy"
              }
            ].map((article, index) => (
              <Link
                key={index}
                to={`/blog/${index + 2}`}
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
                    <span className="text-sm text-gray-500">{article.category}</span>
                    <h3 className="text-lg font-medium mt-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {article.title}
                    </h3>
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

export default BlogPost;
