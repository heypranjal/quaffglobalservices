
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DigitalMarketingServices = () => {
  const marketingServices = [
    {
      emoji: "🔍",
      title: "Search Engine Optimization",
      description: "Boost your organic visibility with strategic SEO that improves rankings, drives qualified traffic, and increases conversions."
    },
    {
      emoji: "💰",
      title: "Search Engine Marketing",
      description: "Maximize ROI with targeted PPC campaigns, Google Ads management, and strategic bidding that delivers immediate results."
    },
    {
      emoji: "📱",
      title: "Social Media Management",
      description: "Build engaged communities across platforms with compelling content, strategic posting, and authentic brand interactions."
    },
    {
      emoji: "📧",
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales."
    },
    {
      emoji: "📊",
      title: "Performance Marketing",
      description: "Data-driven campaigns optimized for measurable results with detailed analytics and continuous optimization."
    },
    {
      emoji: "🎯",
      title: "Conversion Optimization",
      description: "Increase your conversion rates through A/B testing, landing page optimization, and user experience improvements."
    }
  ];

  const seoProcess = [
    {
      step: "1",
      title: "SEO Audit",
      description: "Comprehensive website analysis, keyword research, and competitor SEO assessment."
    },
    {
      step: "2",
      title: "Keyword Strategy",
      description: "Target keyword selection, search intent analysis, and content gap identification."
    },
    {
      step: "3",
      title: "On-Page Optimization",
      description: "Technical SEO fixes, content optimization, and meta tag improvements."
    },
    {
      step: "4",
      title: "Content Creation",
      description: "SEO-optimized content development aligned with target keywords and user intent."
    },
    {
      step: "5",
      title: "Link Building",
      description: "High-quality backlink acquisition through outreach and content marketing."
    },
    {
      step: "6",
      title: "Monitor & Refine",
      description: "Ranking tracking, performance analysis, and continuous optimization."
    }
  ];

  const semProcess = [
    {
      step: "1",
      title: "Account Setup",
      description: "Google Ads account structure, conversion tracking, and campaign architecture."
    },
    {
      step: "2",
      title: "Keyword Research",
      description: "Profitable keyword identification, negative keyword lists, and bid strategy planning."
    },
    {
      step: "3",
      title: "Ad Creation",
      description: "Compelling ad copy writing, extension setup, and landing page alignment."
    },
    {
      step: "4",
      title: "Campaign Launch",
      description: "Careful campaign launch with budget allocation and bidding optimization."
    },
    {
      step: "5",
      title: "Performance Monitoring",
      description: "Daily monitoring, bid adjustments, and quality score improvements."
    },
    {
      step: "6",
      title: "ROI Optimization",
      description: "Conversion rate optimization, ROAS improvement, and budget reallocation."
    }
  ];

  const socialMediaProcess = [
    {
      step: "1",
      title: "Strategy Planning",
      description: "Platform selection, audience analysis, and content strategy development."
    },
    {
      step: "2",
      title: "Content Creation",
      description: "Engaging visuals, compelling captions, and platform-specific content."
    },
    {
      step: "3",
      title: "Content Scheduling",
      description: "Optimal posting times, content calendar management, and automation setup."
    },
    {
      step: "4",
      title: "Community Management",
      description: "Active engagement, response management, and relationship building."
    },
    {
      step: "5",
      title: "Paid Social Campaigns",
      description: "Targeted ad campaigns, audience segmentation, and creative testing."
    },
    {
      step: "6",
      title: "Analytics & Growth",
      description: "Performance tracking, audience insights, and growth strategy refinement."
    }
  ];

  const emailProcess = [
    {
      step: "1",
      title: "List Building",
      description: "Lead magnets, opt-in forms, and subscriber acquisition strategies."
    },
    {
      step: "2",
      title: "Segmentation",
      description: "Audience segmentation, behavioral triggers, and personalization setup."
    },
    {
      step: "3",
      title: "Campaign Design",
      description: "Email template design, mobile optimization, and brand consistency."
    },
    {
      step: "4",
      title: "Content Creation",
      description: "Compelling subject lines, engaging content, and clear call-to-actions."
    },
    {
      step: "5",
      title: "Automation Setup",
      description: "Drip campaigns, welcome sequences, and behavioral automation workflows."
    },
    {
      step: "6",
      title: "Testing & Optimization",
      description: "A/B testing, performance analysis, and deliverability optimization."
    }
  ];

  const overallProcess = [
    {
      emoji: "🔬",
      title: "Market Research & Analysis",
      description: "We conduct comprehensive market research, competitor analysis, and audience profiling to understand your industry landscape and identify opportunities for growth and differentiation."
    },
    {
      emoji: "🎯",
      title: "Strategy Development",
      description: "Based on our research, we develop a customized digital marketing strategy with clear objectives, target audiences, channel selection, and key performance indicators."
    },
    {
      emoji: "🛠️",
      title: "Campaign Setup & Launch",
      description: "We set up tracking systems, create compelling ad creatives, configure targeting parameters, and launch campaigns across selected digital channels with precision timing."
    },
    {
      emoji: "📈",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring of campaign performance with real-time adjustments, A/B testing different elements, and optimization based on data insights to maximize ROI."
    },
    {
      emoji: "📋",
      title: "Reporting & Analysis",
      description: "Detailed monthly reports with actionable insights, performance metrics, ROI analysis, and strategic recommendations for future campaigns and improvements."
    },
    {
      emoji: "🚀",
      title: "Scale & Expand",
      description: "Once we identify winning strategies, we scale successful campaigns and expand to new channels, audiences, and markets to accelerate your growth trajectory."
    }
  ];

  const strategicApproach = [
    {
      emoji: "🎯",
      title: "Targeted Precision",
      description: "Laser-focused targeting ensures your message reaches the right people at the right time with the right offer."
    },
    {
      emoji: "📊",
      title: "Data-Driven Decisions",
      description: "Every strategy is backed by comprehensive data analysis and market insights for optimal performance."
    },
    {
      emoji: "🔄",
      title: "Continuous Optimization",
      description: "Ongoing testing and refinement ensure your campaigns consistently improve and adapt to market changes."
    },
    {
      emoji: "💡",
      title: "Creative Innovation",
      description: "Fresh, compelling creative content that cuts through the noise and resonates with your target audience."
    },
    {
      emoji: "🎨",
      title: "Multi-Channel Integration",
      description: "Seamless integration across all digital touchpoints for a cohesive brand experience and maximum reach."
    },
    {
      emoji: "📈",
      title: "ROI Focus",
      description: "Every campaign is designed with clear ROI objectives and measurable outcomes that drive business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">📈 Digital</span>{" "}
            <span className="text-gradient">Marketing Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Amplify your online presence and drive measurable growth with data-driven marketing strategies that convert prospects into loyal customers.
          </p>
        
        </div>
      </section>

      {/* Marketing Arsenal Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Marketing Arsenal</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
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

      {/* Specialized Processes Section */}
      <section className="py-12 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Specialized Processes</span>
            </h2>
          </div>

          {/* SEO Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              🔍 SEO Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoProcess.map((step, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* SEM/PPC Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              💰 SEM/PPC Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {semProcess.map((step, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              📱 Social Media Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialMediaProcess.map((step, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Email Marketing Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              📧 Email Marketing Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emailProcess.map((step, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overall Marketing Process Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Overall</span>{" "}
              <span className="text-gradient">Marketing Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overallProcess.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{step.emoji}</span>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach Section */}
      <section className="py-12 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Strategic Approach</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in holistic digital marketing that integrates multiple channels for maximum impact and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicApproach.map((approach, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{approach.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Accelerate Your Digital Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a comprehensive digital marketing strategy that drives real results for your business.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Marketing Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingServices;
