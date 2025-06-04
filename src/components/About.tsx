
const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a forward-thinking architecture studio that believes in the power of thoughtful design to transform communities and enhance human experience. Our approach combines innovative thinking with sustainable practices to create spaces that are both beautiful and functional.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2010, our team of passionate architects and designers has completed over 200 projects across residential, commercial, and public sectors. We pride ourselves on our collaborative approach, working closely with clients to bring their visions to life while exceeding their expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our unique philosophy centers on creating timeless designs that respond to their environment, utilize sustainable materials, and prioritize human well-being in every space we create.
            </p>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2965&q=80"
              alt="Modern architecture building"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
