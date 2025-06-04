import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudy3 = () => {
  const solutions = [
    'Content Operations: Managed content cataloging, metadata tagging, and quality assurance for thousands of music tracks and videos',
    'Customer Support: Provided 24/7 multilingual customer service in Hindi, English, Tamil, Telugu, and Bengali',
    'Data Processing: Handled user behavior analytics, content performance reporting, and recommendation engine data preparation',
    'Digital Marketing Support: Managed social media presence, content creation, and promotional campaign execution',
    'Financial Operations: Processed invoicing, vendor payments, and revenue reconciliation across multiple revenue streams',
    'Technical Support: Provided Level 1 technical support for app users and content partners'
  ];

  const framework = [
    'Content Processing: 500+ content pieces processed daily with 99.8% accuracy rate',
    'Customer Support: Handled 2,000+ customer inquiries daily with average response time of 2 minutes',
    'Data Analytics: Generated comprehensive reports on user engagement, content performance, and market trends',
    'Quality Assurance: Implemented multi-tier quality control ensuring brand standard compliance'
  ];

  const results = [
    '40% reduction in operational costs through efficient process optimization',
    'Improved customer satisfaction scores from 3.2 to 4.6 (out of 5)',
    'Increased content processing speed by 60% while maintaining quality standards',
    'Enhanced data accuracy leading to 25% improvement in recommendation engine performance',
    'Scaled operations to support 300% increase in user base without proportional cost increase'
  ];

  const kpis = [
    'Operational Efficiency: 99.5% SLA compliance across all service areas',
    'Cost Optimization: 35% reduction in per-transaction processing costs',
    'Quality Metrics: 99.8% accuracy rate in content processing and data entry',
    'Customer Satisfaction: 4.6/5 customer support rating with 92% first-call resolution',
    'Scalability: Successfully handled 3x traffic increase during peak festival seasons'
  ];

  const tech = [
    'Implemented automated workflows reducing manual intervention by 70%',
    'Integrated with Hungama\'s existing CRM and content management systems',
    'Developed custom dashboards for real-time performance monitoring',
    'Established secure data handling protocols complying with Indian data protection regulations'
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Case Study:</span>{" "}
            <span className="text-gradient">Business Process Outsourcing (BPO)</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            How Hungama scaled its operations across 32 countries with our comprehensive BPO services.
          </p>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client: Hungama – Digital Entertainment Platform</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed">
            Hungama Digital Media is a leading Indian digital entertainment company. With a distribution network spanning 32+ countries, it is the largest aggregator, developer, and publisher of mobile and digital content in India.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Challenge</h2>
          <p className="text-gray-300 max-w-4xl leading-relaxed">
            Hungama faced exponential growth in digital content consumption. They needed to scale content moderation, customer support, back-office operations, and multi-language processing — all without compromising on quality.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutions.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  ✅ {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Framework */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Service Delivery Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {framework.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  🛠️ {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {results.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  🎯 {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {kpis.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  📊 {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Technology Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tech.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  🔧 {item}
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
            Streamline Your Operations with Our BPO Services
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we can help you scale and streamline your business with our customized outsourcing solutions.
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Talk to Our BPO Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy3;
