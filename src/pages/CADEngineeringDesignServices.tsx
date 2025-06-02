
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CADEngineeringDesignServices = () => {
  const services = [
    {
      emoji: "🏗️",
      title: "Architectural Drawings",
      description: "Professional architectural plans and construction documentation for residential and commercial projects.",
      features: [
        "Floor plans and elevations",
        "Construction documentation",
        "Building permits and approvals",
        "3D architectural visualization",
        "Code compliance verification"
      ]
    },
    {
      emoji: "⚙️",
      title: "Mechanical Design",
      description: "Comprehensive mechanical engineering solutions from concept development to manufacturing-ready designs.",
      features: [
        "Product development and prototyping",
        "Assembly and component design",
        "Stress analysis and simulation",
        "Manufacturing drawings",
        "Design optimization"
      ]
    },
    {
      emoji: "🏢",
      title: "BIM Services",
      description: "Building Information Modeling for enhanced project coordination and lifecycle management.",
      features: [
        "3D BIM modeling and coordination",
        "Clash detection and resolution",
        "4D scheduling integration",
        "Quantity takeoffs and estimation",
        "Facility management models"
      ]
    },
    {
      emoji: "📐",
      title: "Product Modeling",
      description: "Advanced 3D modeling and visualization for product design and development across industries.",
      features: [
        "Parametric 3D modeling",
        "Photorealistic rendering",
        "Virtual prototyping",
        "Design validation and testing",
        "Manufacturing support"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Project Brief & Requirements",
      description: "We begin with a detailed consultation to understand your project goals, specifications, constraints, and timeline requirements."
    },
    {
      number: "2",
      title: "Concept Development",
      description: "Our design team creates initial concepts and sketches, exploring multiple design alternatives and approaches for your review."
    },
    {
      number: "3",
      title: "3D Modeling & Visualization",
      description: "We develop detailed 3D models using industry-standard CAD software, providing realistic visualizations of the final design."
    },
    {
      number: "4",
      title: "Design Validation",
      description: "Comprehensive testing and analysis including stress testing, performance simulation, and compliance verification."
    },
    {
      number: "5",
      title: "Technical Documentation",
      description: "Creation of detailed drawings, specifications, and documentation required for manufacturing or construction."
    },
    {
      number: "6",
      title: "Final Delivery & Support",
      description: "Complete project delivery with all files, documentation, and ongoing support for implementation and modifications."
    }
  ];

  const software = [
    { emoji: "🎯", name: "AutoCAD" },
    { emoji: "🔧", name: "SolidWorks" },
    { emoji: "🏗️", name: "Revit" },
    { emoji: "📊", name: "Inventor" },
    { emoji: "🎨", name: "3ds Max" },
    { emoji: "⚡", name: "ANSYS" },
    { emoji: "🔬", name: "CATIA" },
    { emoji: "🌟", name: "SketchUp" }
  ];

  const whyChoose = [
    {
      emoji: "🎯",
      title: "Precision Engineering",
      description: "Accurate designs with tolerances meeting industry standards"
    },
    {
      emoji: "⚡",
      title: "Fast Turnaround",
      description: "Quick project completion without compromising quality"
    },
    {
      emoji: "💡",
      title: "Innovation Focus",
      description: "Creative solutions that push design boundaries"
    },
    {
      emoji: "🔄",
      title: "Unlimited Revisions",
      description: "Free revisions until you're completely satisfied"
    },
    {
      emoji: "🏆",
      title: "Expert Team",
      description: "Certified engineers with 15+ years of experience"
    },
    {
      emoji: "💰",
      title: "Cost Effective",
      description: "Save up to 60% compared to hiring in-house designers"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">CAD &</span>{" "}
            <span className="text-gradient">Engineering Design Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your ideas into precise technical drawings and 3D models with our expert engineering design team. 
            From concept to completion, we bring your vision to life.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Design Services</span>
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
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-400">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            {feature}
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

      {/* Design Process Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Design Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your design projects are completed efficiently and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Industry-Leading</span>{" "}
              <span className="text-gradient">Software & Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We utilize the latest professional-grade software to ensure the highest quality and compatibility in our deliverables.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {software.map((tool, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{tool.emoji}</span>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-accent transition-colors duration-300">
                    {tool.name}
                  </h3>
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
              <span className="text-gradient">Our Design Services?</span>
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
            Let's Grow Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into precise technical drawings and innovative designs? 
            Let our expert engineering team bring your vision to life.
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

export default CADEngineeringDesignServices;
