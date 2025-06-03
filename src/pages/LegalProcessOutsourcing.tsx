
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LegalProcessOutsourcing = () => {
  const services = [
    {
      emoji: "📚",
      title: "Legal Research",
      description: "Comprehensive legal research services providing thorough analysis and documentation for informed decision-making.",
      features: [
        "Case law analysis and precedent research",
        "Statutory and regulatory research",
        "Comparative law studies",
        "Legal memoranda preparation",
        "Due diligence investigations"
      ]
    },
    {
      emoji: "📋",
      title: "Contract Review",
      description: "Expert contract analysis and review services ensuring compliance and risk mitigation for your business agreements.",
      features: [
        "Contract analysis and risk assessment",
        "Terms and conditions review",
        "Compliance verification",
        "Amendment recommendations",
        "Negotiation support documentation"
      ]
    },
    {
      emoji: "📝",
      title: "Document Drafting",
      description: "Professional legal document preparation tailored to your specific requirements and jurisdictional needs.",
      features: [
        "Legal agreements and contracts",
        "Corporate governance documents",
        "Compliance documentation",
        "Policy and procedure manuals",
        "Regulatory filing documents"
      ]
    },
    {
      emoji: "💡",
      title: "Patent Support",
      description: "Intellectual property research and patent application assistance to protect and maximize your innovations.",
      features: [
        "Prior art research and analysis",
        "Patent application drafting",
        "IP portfolio management",
        "Patent prosecution support",
        "Trademark and copyright services"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "We conduct a detailed consultation to understand your specific legal requirements, jurisdictional considerations, and project timelines. Our team analyzes the scope and complexity to assign the right legal experts."
    },
    {
      step: "2",
      title: "Expert Assignment",
      description: "Based on the practice area and complexity, we assign qualified legal professionals with relevant expertise. Each team member has specialized knowledge in the required legal domain and jurisdiction."
    },
    {
      step: "3",
      title: "Research & Analysis",
      description: "Our legal experts conduct comprehensive research using premium legal databases, analyze relevant case law, statutes, and regulations to build a solid foundation for your legal matters."
    },
    {
      step: "4",
      title: "Document Preparation",
      description: "We prepare detailed legal documents, research memoranda, contract reviews, or patent applications with meticulous attention to accuracy, legal precedents, and compliance requirements."
    },
    {
      step: "5",
      title: "Quality Review",
      description: "Every deliverable undergoes multiple levels of quality review by senior legal professionals to ensure accuracy, completeness, and adherence to the highest legal standards."
    },
    {
      step: "6",
      title: "Delivery & Support",
      description: "We deliver the completed work with detailed explanations and provide ongoing support for any clarifications, revisions, or additional requirements that may arise."
    }
  ];

  const expertiseAreas = [
    { emoji: "🏢", title: "Corporate Law", description: "Mergers, acquisitions, corporate governance, securities law" },
    { emoji: "💼", title: "Commercial Law", description: "Contract law, commercial disputes, business transactions" },
    { emoji: "🏠", title: "Real Estate Law", description: "Property transactions, zoning, real estate litigation" },
    { emoji: "🌐", title: "Technology Law", description: "Data privacy, cybersecurity, software licensing" },
    { emoji: "⚖️", title: "Litigation Support", description: "Discovery, document review, case preparation" },
    { emoji: "🛡️", title: "Compliance", description: "Regulatory compliance, risk assessment, policy development" },
    { emoji: "💡", title: "Intellectual Property", description: "Patents, trademarks, copyrights, IP strategy" },
    { emoji: "📊", title: "Employment Law", description: "Labor relations, employment contracts, HR compliance" }
  ];

  const security = [
    { emoji: "🔒", title: "Data Encryption", description: "End-to-end encryption for all data transmission and storage" },
    { emoji: "📋", title: "NDAs & Agreements", description: "Comprehensive non-disclosure agreements with all team members" },
    { emoji: "🏢", title: "Secure Facilities", description: "Restricted access facilities with 24/7 security monitoring" },
    { emoji: "✅", title: "Compliance Standards", description: "ISO 27001 certified information security management" },
    { emoji: "🔐", title: "Access Controls", description: "Role-based access controls and multi-factor authentication" },
    { emoji: "📱", title: "Secure Communication", description: "Encrypted communication channels and secure file sharing" }
  ];

  const whyChoose = [
    { emoji: "🎓", title: "Legal Expertise", description: "Qualified attorneys and legal professionals with advanced degrees" },
    { emoji: "⚡", title: "Fast Turnaround", description: "Quick delivery without compromising on quality or accuracy" },
    { emoji: "💰", title: "Cost Savings", description: "Reduce legal costs by up to 70% compared to traditional law firms" },
    { emoji: "🔍", title: "Quality Assurance", description: "Multi-tier review process ensuring highest accuracy standards" },
    { emoji: "🌍", title: "Global Coverage", description: "Expertise across multiple jurisdictions and legal systems" },
    { emoji: "📈", title: "Scalable Solutions", description: "Flexible capacity to handle projects of any size and complexity" }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Legal Process</span>{" "}
            <span className="text-gradient">Outsourcing (LPO)</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Streamline your legal operations with our comprehensive outsourcing services. Expert legal professionals 
            delivering accuracy, compliance, and efficiency across all legal processes.
          </p>
         
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Legal Services</span>
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
                          <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
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

      {/* Process Section */}
      <section className="py-12 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">LPO Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures accuracy, confidentiality, and timely delivery of all legal services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Legal</span>{" "}
              <span className="text-gradient">Expertise Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of legal professionals specializes in diverse practice areas to serve your comprehensive legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{area.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Security &</span>{" "}
              <span className="text-gradient">Confidentiality</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of security and confidentiality to protect your sensitive legal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {security.map((item, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="text-gradient">Our LPO Services?</span>
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
      <section className="py-12 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Streamline Your Legal Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our legal experts handle your complex legal processes while you focus on growing your business.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Legal Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalProcessOutsourcing;
