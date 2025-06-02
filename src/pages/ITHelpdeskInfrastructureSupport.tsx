
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ITHelpdeskInfrastructureSupport = () => {
  const services = [
    {
      emoji: "🖥️",
      title: "Remote Desktop Support",
      description: "Instant access and resolution of technical issues from anywhere in the world.",
      features: [
        "Real-time screen sharing and control",
        "Software installation and updates",
        "Performance optimization",
        "User training and guidance",
        "Multi-platform compatibility"
      ]
    },
    {
      emoji: "⚙️",
      title: "System Administration",
      description: "Complete management of your IT infrastructure for optimal performance and security.",
      features: [
        "Server monitoring and maintenance",
        "Network configuration and security",
        "User account management",
        "Backup and disaster recovery",
        "Software licensing and compliance"
      ]
    },
    {
      emoji: "🔧",
      title: "Hardware Troubleshooting",
      description: "Expert diagnosis and resolution of hardware-related issues and failures.",
      features: [
        "Component failure diagnosis",
        "Performance bottleneck analysis",
        "Hardware compatibility testing",
        "Replacement recommendations",
        "Preventive maintenance planning"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Issue Identification",
      description: "Our team quickly assesses and categorizes your technical issue through multiple communication channels including phone, email, and chat support."
    },
    {
      step: "2",
      title: "Priority Assessment",
      description: "We evaluate the business impact and urgency level to prioritize resolution efforts and allocate appropriate resources."
    },
    {
      step: "3",
      title: "Remote Diagnosis",
      description: "Using secure remote access tools, we perform comprehensive diagnostics to identify root causes and potential solutions."
    },
    {
      step: "4",
      title: "Solution Implementation",
      description: "Our certified technicians implement the optimal solution while keeping you informed throughout the entire process."
    },
    {
      step: "5",
      title: "Testing & Verification",
      description: "We thoroughly test the implemented solution to ensure complete functionality and system stability before closure."
    },
    {
      step: "6",
      title: "Documentation & Follow-up",
      description: "Complete documentation of the issue and solution is provided, along with proactive follow-up to prevent future occurrences."
    }
  ];

  const whyChoose = [
    {
      emoji: "⚡",
      title: "Rapid Response",
      description: "Average response time under 15 minutes"
    },
    {
      emoji: "🏆",
      title: "Expert Team",
      description: "Certified IT professionals with 10+ years experience"
    },
    {
      emoji: "🔒",
      title: "Secure Access",
      description: "Enterprise-grade security protocols and encryption"
    },
    {
      emoji: "📊",
      title: "Detailed Reporting",
      description: "Comprehensive analytics and performance reports"
    },
    {
      emoji: "💰",
      title: "Cost Effective",
      description: "Reduce IT costs by up to 40% compared to in-house teams"
    },
    {
      emoji: "🌐",
      title: "24/7 Availability",
      description: "Round-the-clock support across all time zones"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">IT Helpdesk &</span>{" "}
            <span className="text-gradient">Infrastructure Support</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Keep your business technology running smoothly with our comprehensive 24/7 IT support services. 
            From troubleshooting to system optimization, we've got you covered.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Get IT Support
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Support Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              <span className="text-white">Our IT</span>{" "}
              <span className="text-gradient">Support Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We follow a systematic approach to ensure quick resolution and minimal downtime for your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.step}</span>
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="text-gradient">Our IT Support?</span>
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
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get reliable, professional IT support that keeps your business running smoothly 24/7.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Support Plan
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITHelpdeskInfrastructureSupport;
