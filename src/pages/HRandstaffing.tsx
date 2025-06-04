import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HRStaffingServices = () => {
  const services = [
    {
      emoji: "👥",
      title: "Talent Acquisition",
      description:
        "Find the perfect candidates through our extensive network and advanced screening processes. We match skills, culture, and ambitions seamlessly.",
      link: "/talent-acquisition",
    },
    {
      emoji: "🌍",
      title: "Global Hiring",
      description:
        "Seamless international recruitment across borders with full compliance, visa support, and cultural integration for worldwide talent acquisition.",
      link: "/global-hiring",
    },
    {
      emoji: "🎯",
      title: "Executive Search",
      description:
        "Strategic leadership recruitment for C-level and senior management positions with confidential, thorough vetting processes.",
      link: "/executive-search",
    },
    {
      emoji: "⚙️",
      title: "End to End HR Solutions",
      description:
        "Comprehensive HR transformation covering policy development, employee lifecycle management, performance systems, and organizational restructuring.",
      link: "/end-to-end-hr-solutions",
    },
    {
      emoji: "🔗",
      title: "End to End Staffing Solutions",
      description:
        "Complete staffing lifecycle management from requirement analysis to onboarding, performance tracking, and long-term retention strategies.",
      link: "/end-to-end-staffing-solutions",
    },
    {
      emoji: "💼",
      title: "Payroll Management",
      description:
        "Streamlined payroll processing, compliance management, and employee benefits administration to reduce your administrative burden.",
      link: "/payroll-management",
    },
  ];

  const whyPartner = [
    {
      emoji: "⚡",
      title: "Faster Hiring",
      description:
        "Reduce time-to-hire by 60% with our streamlined processes and pre-vetted talent pool",
    },
    {
      emoji: "💰",
      title: "Cost Effective",
      description:
        "Lower recruitment costs and eliminate hiring mistakes with our proven selection methodology",
    },
    {
      emoji: "🎯",
      title: "Quality Matches",
      description:
        "95% candidate retention rate through our comprehensive skill and culture fit assessments",
    },
    {
      emoji: "🤝",
      title: "Dedicated Support",
      description:
        "Personal account managers providing ongoing support throughout the entire hiring journey",
    },
  ];

  const whyChoose = [
    {
      emoji: "🏆",
      title: "Industry Expertise",
      description:
        "Over a decade of experience across multiple industries including technology, healthcare, finance, manufacturing, and retail.",
    },
    {
      emoji: "🌐",
      title: "Global Reach",
      description:
        "Extensive network spanning multiple countries, sourcing talent locally and internationally with compliance and cultural sensitivity.",
    },
    {
      emoji: "🔍",
      title: "Advanced Technology",
      description:
        "AI-powered matching, background checks, and real-time analytics ensure precise hiring decisions.",
    },
    {
      emoji: "⚡",
      title: "Rapid Response",
      description:
        "24-48 hour initial candidate presentation for urgent needs. Dedicated teams for critical and emergency placements.",
    },
    {
      emoji: "🎓",
      title: "Continuous Learning",
      description:
        "Training and development programs for placed candidates to ensure ongoing value and up-to-date skills.",
    },
    {
      emoji: "🛡️",
      title: "Compliance Guarantee",
      description:
        "100% compliance with labor laws, immigration, and regulations. We handle legal complexities so you can focus on your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transform Your Workforce
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Connecting exceptional talent with forward-thinking companies through innovative HR and staffing solutions.
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              HR & Staffing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
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

      {/* Why Partner With Us Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference of working with industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyPartner.map((reason, index) => (
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

      {/* Why Choose Quaff Global Services */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="text-gradient">Quaff Global Services?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your trusted partner in building exceptional teams
            </p>
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
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our HR experts and staffing specialists help you build resilient, high-performing teams across the globe.
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

export default HRStaffingServices;
