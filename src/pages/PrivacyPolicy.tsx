
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-8">
                Last updated: March 15, 2024
              </p>

              <h2 className="text-2xl font-medium mb-4 text-gray-900">1. Information We Collect</h2>
              <p className="mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include your name, email address, phone number, 
                and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-medium mb-4 text-gray-900">2. How We Use Your Information</h2>
              <p className="mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and comply with legal obligations.
              </p>

              <h2 className="text-2xl font-medium mb-4 text-gray-900">3. Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-medium mb-4 text-gray-900">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-medium mb-4 text-gray-900">5. Your Rights</h2>
              <p className="mb-6">
                You have the right to access, update, or delete your personal information. 
                You may also opt out of certain communications from us.
              </p>

              <h2 className="text-2xl font-medium mb-4 text-gray-900">6. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-6">
                Email: privacy@archstudio.com<br/>
                Phone: +1 (555) 123-4567<br/>
                Address: 123 Design Street, Architecture District, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
