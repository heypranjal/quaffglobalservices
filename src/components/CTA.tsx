
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-10 px-6 bg-gradient-to-br from-gray-900 via-primary/10 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ready to</span>{" "}
            <span className="text-gradient">Transform</span>
            <br />
            <span className="text-white">Your Business?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our comprehensive digital solutions can accelerate your growth 
            and drive innovation across your organization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button  onClick={() => window.location.href = '/contact-us'}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-glow flex items-center group">
              <Mail className="mr-2 w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          
          </div>

          {/* Contact Info */}
<div className="w-full flex justify-center mt-8">
  <div className="flex flex-col md:flex-row gap-8 text-center">
    <div>
      <div className="text-accent font-semibold mb-2">Phone</div>
      <div className="text-gray-300">+91 9999293689</div>
    </div>
    <div>
      <div className="text-accent font-semibold mb-2">Response Time</div>
      <div className="text-gray-300">Within 24 hours</div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
