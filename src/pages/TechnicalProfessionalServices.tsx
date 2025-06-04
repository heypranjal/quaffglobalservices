import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TechnicalProfessionalServices = () => {
  const services = [
    {
      emoji: "🖥️",
      title: "IT Helpdesk & Infrastructure Support",
      description: "24/7 technical support and system management",
      link: "/it-helpdesk-infrastructure-support"
    },
    {
      emoji: "📐",
      title: "CAD & Engineering Design Services",
      description: "Precision design and modeling solutions",
      link: "/cad-engineering-design-services"
    },
    {
      emoji: "⚖️",
      title: "Legal Process Outsourcing (LPO)",
      description: "Comprehensive legal support services",
      link: "/legal-process-outsourcing"
    },
    {
      emoji: "📊",
      title: "Market Research & Business Analytics",
      description: "Data-driven insights for strategic decisions",
      link: "/market-research-business-analytics"
    }
  ];

  const whyChoose = [
    {
      emoji: "🚀",
      title: "Expert Team",
      description: "Certified professionals with years of industry experience"
    },
    {
      emoji: "⚡",
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality"
    },
    {
      emoji: "🔧",
      title: "Tailored Solutions",
      description: "Customized services that fit your specific needs"
    },
    {
      emoji: "🛡️",
      title: "Security First",
      description: "Enterprise-grade security and data protection"
    },
    {
      emoji: "💰",
      title: "Cost Effective",
      description: "Maximum value with competitive pricing"
    },
    {
      emoji: "🤝",
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Technical &</span>{" "}
            <span className="text-gradient">Professional Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering your business with comprehensive technical solutions and professional expertise. 
            From IT infrastructure to specialized consulting, we deliver excellence across every domain.
          </p>
          {/* <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Explore Our Services
          </Button> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Professional Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{service.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-white"
                        onClick={() => window.location.href = service.link}
                      >
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="text-gradient">Quaff Global Services?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((reason, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{reason.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our technical experts and professional consultants help you achieve operational excellence and drive growth.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalProfessionalServices;
