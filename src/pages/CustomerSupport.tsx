
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CustomerSupport = () => {
  const services = [
    {
      emoji: "📞",
      title: "Voice Support Services",
      description: "Professional inbound and outbound call handling with trained agents who represent your brand with excellence. From customer inquiries to sales support, we ensure every conversation adds value."
    },
    {
      emoji: "💬",
      title: "Non-Voice Support",
      description: "Email support, ticket management, and back-office operations handled with precision and care. We manage your digital communications seamlessly across all channels."
    },
    {
      emoji: "🛠️",
      title: "Technical Support",
      description: "Expert technical assistance for your customers with our skilled IT support team. From troubleshooting to complex technical guidance, we've got you covered."
    },
    {
      emoji: "💻",
      title: "Live Chat Services",
      description: "Real-time customer engagement through live chat support. Instant responses, higher conversion rates, and enhanced customer satisfaction across your digital platforms."
    },
    {
      emoji: "📈",
      title: "Outbound Services",
      description: "Proactive customer outreach including lead generation, follow-ups, surveys, and retention campaigns designed to grow your business and strengthen customer relationships."
    },
    {
      emoji: "📊",
      title: "Analytics & Reporting",
      description: "Comprehensive performance metrics and insights to help you understand customer behavior, agent performance, and service quality through detailed reporting dashboards."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description: "We begin by understanding your business needs, customer demographics, and current support challenges to design a tailored solution."
    },
    {
      number: "2",
      title: "Strategy Development",
      description: "Our experts create a comprehensive support strategy including workflow design, KPI definition, and resource allocation planning."
    },
    {
      number: "3",
      title: "Team Setup & Training",
      description: "We recruit, hire, and extensively train dedicated agents who become experts in your products, services, and brand values."
    },
    {
      number: "4",
      title: "System Integration",
      description: "Seamless integration with your existing CRM, helpdesk, and communication systems to ensure smooth operations and data flow."
    },
    {
      number: "5",
      title: "Launch & Monitoring",
      description: "Careful deployment with real-time monitoring, quality assurance, and performance tracking to ensure optimal service delivery."
    },
    {
      number: "6",
      title: "Continuous Improvement",
      description: "Regular performance reviews, feedback implementation, and service optimization to maintain excellence and drive growth."
    }
  ];

  const benefits = [
    {
      emoji: "🚀",
      title: "Scalable Solutions",
      description: "Grow from 10 to 10,000 customers with our flexible infrastructure"
    },
    {
      emoji: "📈",
      title: "Performance Focus",
      description: "Data-driven improvements that directly impact your bottom line"
    },
    {
      emoji: "🤝",
      title: "True Partnership",
      description: "Dedicated account management and strategic consultation"
    },
    {
      emoji: "🔧",
      title: "Custom Solutions",
      description: "Tailored approaches that fit your unique business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Customer Support</span>{" "}
            <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive Call Center & Support Services to Elevate Your Customer Experience
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Let's Grow</span>{" "}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your success is our success. We don't just provide customer support services – we become your strategic growth partner, 
              working hand-in-hand to enhance customer satisfaction, drive retention, and fuel business expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{benefit.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Elevate Your Customer Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our customer support services can help you build stronger relationships and drive business growth.
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

export default CustomerSupport;
