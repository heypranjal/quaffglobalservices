import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudyHalp = () => {
  const servicesProvided = [
    {
      emoji: '🎨',
      title: 'Brand Identity Development',
      description: 'Created a powerful visual identity that embodies career transformation and professional growth.'
    },
    {
      emoji: '🌐',
      title: 'Website Design & Development',
      description: 'Built an intuitive, conversion-focused platform showcasing training programs, success stories, and career pathway guides.'
    },
    {
      emoji: '📄',
      title: 'Marketing Collateral',
      description: 'Designed case studies, brochures, and infographics that highlight transformation journeys.'
    },
    {
      emoji: '📱',
      title: 'Social Media Assets',
      description: 'Developed engaging LinkedIn, Instagram, and Facebook content featuring graduate success stories.'
    },
    {
      emoji: '🎥',
      title: 'Video Content Creation',
      description: 'Produced testimonial videos, program explainers, and guidance content.'
    },
    {
      emoji: '🧭',
      title: 'Interactive Career Tools',
      description: 'Designed assessments and visual tools to help users find their ideal career paths.'
    }
  ];

  const results = [
    '📈 180% increase in program enrollment within 6 months',
    '🚀 250% growth in qualified applicants through brand recognition',
    '⏱️ 65% longer session durations on key pages',
    '🤝 40% more employer partnerships through improved showcases',
    '🎯 85% job placement rate visibility via content marketing'
  ];

  const deliverables = [
    '🎨 Complete brand identity system focused on career transformation',
    '🌐 Responsive website with integrated assessment tools',
    '📚 Library of 75+ marketing assets including success templates',
    '🎥 12-part video series showcasing transformation stories',
    '📅 Social media calendar focused on development and growth',
    '🧭 Career mapping tools and visual pathways'
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Case Study:</span>{' '}
            <span className="text-gradient">Digital & Creative Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming career journeys through digital innovation – learn how Quaff Global Services empowered Halp to accelerate economic opportunity through compelling branding and tech solutions.
          </p>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client: Halp - World's Career Accelerator</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed">
            Halp unlocks global career opportunities and economic mobility through training and placements. Their mission is to build better futures for career changers, job seekers, and employers alike.
          </p>
        </div>
      </section>

      {/* Challenges & Solution */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesProvided.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {results.map((point, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  ✅ {point}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Key Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  🎁 {item}
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
            Have a Similar Vision?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s collaborate on a digital transformation journey that empowers your brand.
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Let’s Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyHalp;
