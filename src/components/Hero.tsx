
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in">
          ARCH<span className="font-normal">STUDIO</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in">
          Creating spaces that inspire and endure
        </p>
        <Link to="/contact">
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 text-lg animate-fade-in"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
