
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Briefcase, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-8">
            <span className="text-accent text-sm font-semibold">Digital Excellence</span>
            <div className="w-2 h-2 bg-accent rounded-full ml-2 animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Transforming</span>
            <br />
            <span className="text-gradient">Digital Visions</span>
            <br />
            <span className="text-white">Into Reality</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge digital solutions, innovative technology development, and strategic consulting 
            that propel forward-thinking businesses into the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-glow flex items-center group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Code className="w-6 h-6 text-accent" />
              <span className="font-medium">50+ Projects</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Briefcase className="w-6 h-6 text-accent" />
              <span className="font-medium">10 Industries</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Users className="w-6 h-6 text-accent" />
              <span className="font-medium">Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
