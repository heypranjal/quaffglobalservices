
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GraphicDesignAnimation = () => {
  const services = [
    {
      emoji: "🎨",
      title: "Brand Identity Design",
      description: "Complete brand packages including logos, color palettes, typography, and brand guidelines that establish your unique market presence."
    },
    {
      emoji: "📱",
      title: "UI/UX Design",
      description: "Intuitive user interfaces and seamless user experiences that convert visitors into customers and keep them engaged."
    },
    {
      emoji: "🎬",
      title: "Video & Animation",
      description: "Professional video editing, motion graphics, 2D/3D animations that bring your stories to life and captivate your audience."
    },
    {
      emoji: "📄",
      title: "Marketing Collateral",
      description: "Eye-catching brochures, flyers, social media graphics, and digital assets that amplify your marketing campaigns."
    },
    {
      emoji: "🏢",
      title: "Corporate Design",
      description: "Professional presentations, annual reports, and corporate materials that reflect your business sophistication."
    },
    {
      emoji: "🌐",
      title: "Digital Graphics",
      description: "Web graphics, banner ads, email templates, and digital illustrations optimized for all platforms and devices."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Research",
      description: "We dive deep into understanding your brand, target audience, competitors, and project goals. Through detailed questionnaires and strategy sessions, we gather all the insights needed to create designs that resonate with your market."
    },
    {
      number: "2",
      title: "Concept Development",
      description: "Our creative team brainstorms and develops multiple design concepts based on your brief. We create mood boards, style guides, and initial sketches to establish the visual direction before moving into detailed design work."
    },
    {
      number: "3",
      title: "Design & Creation",
      description: "We bring concepts to life using industry-leading software and techniques. Whether it's crafting logos, designing interfaces, or creating animations, every element is meticulously crafted with attention to detail and brand consistency."
    },
    {
      number: "4",
      title: "Review & Refinement",
      description: "We present our work for your feedback and collaborate closely to refine designs until they perfectly match your vision. Our iterative approach ensures every detail meets your expectations and business objectives."
    },
    {
      number: "5",
      title: "Finalization & Delivery",
      description: "Once approved, we prepare final files in all required formats and resolutions. We provide comprehensive brand guidelines, source files, and ongoing support to ensure successful implementation across all platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">🎨 Graphic Design &</span>{" "}
            <span className="text-gradient">Animation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your brand identity with stunning visuals, captivating animations, and designs that speak to your audience's hearts and minds.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* What We Create Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">What We</span>{" "}
              <span className="text-gradient">Create</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Creative</span>{" "}
              <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with stunning designs and captivating animations that make your brand unforgettable.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Project Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicDesignAnimation;
