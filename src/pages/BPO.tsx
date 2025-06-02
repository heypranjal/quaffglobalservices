import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BPO = () => {
  const services = [
    {
      emoji: "📞",
      title: "Customer Support & Call Center",
      description: "24/7 professional customer service solutions",
      link: "/customer-support"
    },
    {
      emoji: "💰",
      title: "Finance & Accounting Services",
      description: "Comprehensive financial management solutions",
      link: "/finance-accounting-services"
    },
    {
      emoji: "👥",
      title: "Human Resource Outsourcing",
      description: "End-to-end HR solutions for your workforce",
      link: "/human-resource-outsourcing"
    },
    {
      emoji: "📊",
      title: "Data Entry & Management",
      description: "Accurate data processing & digital solutions",
      link: "/data-entry-management"
    }
  ];

  const whyChoose = [
    {
      emoji: "🎯",
      title: "Industry Expertise",
      description: "Years of experience across multiple industries with proven track record"
    },
    {
      emoji: "💡",
      title: "Cost Efficiency",
      description: "Reduce operational costs by up to 60% while maintaining quality standards"
    },
    {
      emoji: "🔒",
      title: "Data Security",
      description: "ISO certified processes with bank-level security protocols"
    },
    {
      emoji: "⚡",
      title: "Quick Turnaround",
      description: "Rapid deployment and scalable solutions to meet your deadlines"
    },
    {
      emoji: "🌍",
      title: "24/7 Operations",
      description: "Round-the-clock support with global time zone coverage"
    },
    {
      emoji: "📈",
      title: "Scalable Solutions",
      description: "Flexible services that grow with your business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">🚀 Business Process</span>{" "}
            <span className="text-gradient">Outsourcing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Streamline your operations, reduce costs, and focus on what matters most
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional BPO solutions tailored for your business growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{service.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.link && (
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => window.location.href = service.link}
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
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
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our BPO services can help reduce costs and improve efficiency for your business.
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

export default BPO;
