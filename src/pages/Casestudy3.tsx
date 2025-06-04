import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudy3 = () => {
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

      {/* Details Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Client: Hungama - Digital Entertainment Platform</h2>
              <div className="text-gray-300 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Client Overview:</h3>
                  <p>Hungama Digital Media is a leading Indian digital entertainment company headquartered in Mumbai, founded in 1999. The company is the largest aggregator, developer, and publisher of Mobile and Digital Entertainment in India, with a digital distribution network across 32 countries.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Challenge:</h3>
                  <p>Hungama was experiencing rapid growth in content consumption and needed to scale their operations efficiently while maintaining quality standards. Key challenges included content moderation, customer support across multiple languages, data processing for recommendations, and back-office operations management.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Solution:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Content Operations: Managed content cataloging, metadata tagging, and quality assurance for thousands of music tracks and videos</li>
                    <li>Customer Support: Provided 24/7 multilingual customer service in Hindi, English, Tamil, Telugu, and Bengali</li>
                    <li>Data Processing: Handled user behavior analytics, content performance reporting, and recommendation engine data preparation</li>
                    <li>Digital Marketing Support: Managed social media presence, content creation, and promotional campaign execution</li>
                    <li>Financial Operations: Processed invoicing, vendor payments, and revenue reconciliation across multiple revenue streams</li>
                    <li>Technical Support: Provided Level 1 technical support for app users and content partners</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Service Delivery Framework:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Content Processing: 500+ content pieces processed daily with 99.8% accuracy rate</li>
                    <li>Customer Support: Handled 2,000+ customer inquiries daily with average response time of 2 minutes</li>
                    <li>Data Analytics: Generated comprehensive reports on user engagement, content performance, and market trends</li>
                    <li>Quality Assurance: Implemented multi-tier quality control ensuring brand standard compliance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Results:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>40% reduction in operational costs through efficient process optimization</li>
                    <li>Improved customer satisfaction scores from 3.2 to 4.6 (out of 5)</li>
                    <li>Increased content processing speed by 60% while maintaining quality standards</li>
                    <li>Enhanced data accuracy leading to 25% improvement in recommendation engine performance</li>
                    <li>Scaled operations to support 300% increase in user base without proportional cost increase</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Key Performance Indicators:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Operational Efficiency: 99.5% SLA compliance across all service areas</li>
                    <li>Cost Optimization: 35% reduction in per-transaction processing costs</li>
                    <li>Quality Metrics: 99.8% accuracy rate in content processing and data entry</li>
                    <li>Customer Satisfaction: 4.6/5 customer support rating with 92% first-call resolution</li>
                    <li>Scalability: Successfully handled 3x traffic increase during peak festival seasons</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technology Integration:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Implemented automated workflows reducing manual intervention by 70%</li>
                    <li>Integrated with Hungama's existing CRM and content management systems</li>
                    <li>Developed custom dashboards for real-time performance monitoring</li>
                    <li>Established secure data handling protocols complying with Indian data protection regulations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-brand-dark">
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