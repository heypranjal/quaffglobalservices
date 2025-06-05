
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CustomSoftwareDevelopment = () => {
  const whatWeBuild = [
    {
      title: "Enterprise Applications",
      description: "Complex business systems, CRM, ERP, and workflow management solutions designed for large-scale operations."
    },
    {
      title: "Web Applications",
      description: "Full-stack web applications with modern frameworks, responsive design, and seamless user experiences."
    },
    {
      title: "API Development",
      description: "RESTful APIs, GraphQL endpoints, and microservices architecture for seamless system integration."
    },
    {
      title: "Database Solutions",
      description: "Custom database design, optimization, and management for efficient data storage and retrieval."
    },
    {
      title: "Legacy Modernization",
      description: "Transform outdated systems with modern technologies while preserving critical business functionality."
    },
    {
      title: "Third-party Integration",
      description: "Seamless integration with existing tools, payment gateways, and external service providers."
    }
  ];

  const developmentProcess = [
    {
      number: "1",
      title: "Discovery & Analysis",
      description: "We deep-dive into your business requirements, challenges, and goals to create a comprehensive project roadmap.",
      features: [
        "Stakeholder interviews and requirement gathering",
        "Business process analysis and documentation",
        "Technical feasibility assessment",
        "Project scope definition and timeline estimation"
      ]
    },
    {
      number: "2",
      title: "Design & Architecture",
      description: "Our architects design scalable, secure, and maintainable system architecture tailored to your specific needs.",
      features: [
        "System architecture and technology stack selection",
        "Database design and data modeling",
        "UI/UX wireframes and user journey mapping",
        "Security framework and compliance planning"
      ]
    },
    {
      number: "3",
      title: "Development & Coding",
      description: "Our expert developers bring your vision to life using best practices, clean code, and agile methodologies.",
      features: [
        "Sprint-based development with regular updates",
        "Code reviews and quality assurance",
        "Version control and documentation",
        "Regular client demonstrations and feedback"
      ]
    },
    {
      number: "4",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing ensures your software is bug-free, secure, and performs optimally under all conditions.",
      features: [
        "Unit testing and integration testing",
        "Performance and load testing",
        "Security testing and vulnerability assessment",
        "User acceptance testing and feedback incorporation"
      ]
    },
    {
      number: "5",
      title: "Deployment & Launch",
      description: "Seamless deployment to your preferred environment with minimal downtime and comprehensive launch support.",
      features: [
        "Production environment setup and configuration",
        "Data migration and system integration",
        "User training and documentation delivery",
        "Go-live support and monitoring"
      ]
    },
    {
      number: "6",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to keep your software running smoothly and evolving with your business.",
      features: [
        "24/7 technical support and bug fixes",
        "Regular updates and security patches",
        "Performance monitoring and optimization",
        "Feature enhancements and scaling support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">💻</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Build Something</span>{" "}
            <span className="text-gradient">Extraordinary</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your unique business requirements into powerful, scalable software solutions. 
            From enterprise applications to innovative startups, we craft custom software that drives 
            your success and scales with your ambitions.
          </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">What We</span>{" "}
              <span className="text-gradient">Build</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeBuild.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
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

      {/* Development Process Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Development</span>{" "}
              <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We follow a proven methodology that ensures quality, transparency, and timely delivery of your custom software solution.
            </p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-400">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a software solution that perfectly fits your business needs.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftwareDevelopment;
