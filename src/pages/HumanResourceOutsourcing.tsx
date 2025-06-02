
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HumanResourceOutsourcing = () => {
  const stats = [
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "HR Support" },
    { value: "500+", label: "Companies Served" },
    { value: "48hrs", label: "Average Response" }
  ];

  const recruitmentSteps = [
    {
      number: "1",
      title: "Needs Analysis",
      description: "Understand role requirements and company culture fit"
    },
    {
      number: "2",
      title: "Sourcing & Posting",
      description: "Multi-platform job posting and active candidate sourcing"
    },
    {
      number: "3",
      title: "Screening & Assessment",
      description: "Resume review, phone interviews, and skill assessments"
    },
    {
      number: "4",
      title: "Final Selection",
      description: "Present top candidates and coordinate final interviews"
    }
  ];

  const onboardingSteps = [
    {
      number: "1",
      title: "Pre-boarding Prep",
      description: "Prepare documentation, workspace, and welcome materials"
    },
    {
      number: "2",
      title: "First Day Setup",
      description: "Complete paperwork, system access, and introductions"
    },
    {
      number: "3",
      title: "Training & Integration",
      description: "Role-specific training and cultural orientation"
    },
    {
      number: "4",
      title: "30-60-90 Follow-up",
      description: "Regular check-ins and performance milestone reviews"
    }
  ];

  const backgroundCheckSteps = [
    {
      number: "1",
      title: "Authorization",
      description: "Obtain candidate consent and legal documentation"
    },
    {
      number: "2",
      title: "Verification",
      description: "Employment history, education, and reference checks"
    },
    {
      number: "3",
      title: "Screening",
      description: "Criminal records, credit checks, and social media review"
    },
    {
      number: "4",
      title: "Report Delivery",
      description: "Comprehensive report with recommendations"
    }
  ];

  const dataManagementSteps = [
    {
      number: "1",
      title: "Data Collection",
      description: "Gather and digitize employee information securely"
    },
    {
      number: "2",
      title: "Organization",
      description: "Structure data in compliant, searchable formats"
    },
    {
      number: "3",
      title: "Maintenance",
      description: "Regular updates, backups, and accuracy verification"
    },
    {
      number: "4",
      title: "Reporting",
      description: "Generate insights and compliance reports as needed"
    }
  ];

  const whyChoose = [
    {
      emoji: "⚡",
      title: "Faster Hiring",
      description: "Reduce time-to-hire by 40% with our streamlined recruitment process and extensive candidate network."
    },
    {
      emoji: "💰",
      title: "Cost Effective",
      description: "Lower your HR costs by up to 30% while accessing enterprise-level HR expertise and tools."
    },
    {
      emoji: "📈",
      title: "Scalable Solutions",
      description: "Grow your team seamlessly with HR services that scale with your business needs."
    },
    {
      emoji: "🛡️",
      title: "Compliance Assurance",
      description: "Stay compliant with employment laws and regulations with our expert guidance."
    },
    {
      emoji: "🎯",
      title: "Quality Talent",
      description: "Access top-tier candidates through our extensive network and proven screening methods."
    },
    {
      emoji: "🔄",
      title: "Process Optimization",
      description: "Continuously improve HR processes with data-driven insights and best practices."
    }
  ];

  const ProcessSteps = ({ steps, title }: { steps: typeof recruitmentSteps; title: string }) => (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">{step.number}</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">👥 Human Resource</span>{" "}
            <span className="text-gradient">Outsourcing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Complete HR solutions to attract, manage, and retain top talent while you focus on growing your business
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Services Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recruitment Services</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Find and attract the best talent with our comprehensive recruitment solutions. From job posting to final selection, we handle the entire hiring process to bring you qualified candidates.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={recruitmentSteps} title="🔍 Our Recruitment Process" />
        </div>
      </section>

      {/* Employee Onboarding Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🚀</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Employee Onboarding</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ensure smooth integration of new hires with our structured onboarding process. We create positive first impressions and accelerate time-to-productivity for new employees.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={onboardingSteps} title="📋 Our Onboarding Process" />
        </div>
      </section>

      {/* Background Checks Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🔒</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Background Checks</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Protect your organization with thorough background verification services. We conduct comprehensive checks to ensure you hire trustworthy and qualified candidates.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={backgroundCheckSteps} title="🛡️ Our Background Check Process" />
        </div>
      </section>

      {/* Employee Data Management Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">📊</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Employee Data Management</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Secure and organized employee information management. We maintain accurate records, ensure compliance, and provide easy access to critical HR data when you need it.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={dataManagementSteps} title="💾 Our Data Management Process" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose Our</span>{" "}
              <span className="text-gradient">HRO Services?</span>
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
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our HR outsourcing services can help you attract top talent and streamline your HR processes.
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

export default HumanResourceOutsourcing;
