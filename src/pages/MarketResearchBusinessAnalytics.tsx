
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MarketResearchBusinessAnalytics = () => {
  const services = [
    {
      emoji: "📋",
      title: "Market Surveys",
      description: "Comprehensive market research and customer insights to understand your target audience and market dynamics.",
      features: [
        "Customer satisfaction surveys",
        "Brand awareness studies",
        "Market segmentation analysis",
        "Product feedback collection",
        "Consumer behavior research"
      ]
    },
    {
      emoji: "🏆",
      title: "Competitor Benchmarking",
      description: "Strategic competitive analysis to identify opportunities and position your business for success in the marketplace.",
      features: [
        "Competitive landscape mapping",
        "SWOT analysis and positioning",
        "Pricing strategy comparison",
        "Market share analysis",
        "Best practices identification"
      ]
    },
    {
      emoji: "💹",
      title: "Financial Analysis",
      description: "In-depth financial modeling and analysis to support strategic decision-making and business planning.",
      features: [
        "Financial performance metrics",
        "ROI and profitability analysis",
        "Cash flow forecasting",
        "Investment analysis",
        "Budget variance reporting"
      ]
    },
    {
      emoji: "📈",
      title: "Dashboard Reporting",
      description: "Interactive dashboards and real-time business intelligence to monitor KPIs and track performance.",
      features: [
        "Real-time data visualization",
        "Custom KPI dashboards",
        "Automated reporting systems",
        "Executive summary reports",
        "Trend analysis and forecasting"
      ]
    }
  ];

  const processSteps = [
    {
      emoji: "🎯",
      title: "Objective Setting",
      description: "Define research goals, key questions, and success metrics aligned with your business objectives."
    },
    {
      emoji: "📊",
      title: "Data Collection",
      description: "Gather primary and secondary data using surveys, interviews, and industry databases."
    },
    {
      emoji: "🔍",
      title: "Data Analysis",
      description: "Apply statistical analysis, modeling, and advanced analytics techniques to extract insights."
    },
    {
      emoji: "📈",
      title: "Visualization",
      description: "Create compelling visualizations and dashboards to communicate findings effectively."
    },
    {
      emoji: "💡",
      title: "Insights Generation",
      description: "Translate data into actionable insights and strategic recommendations."
    },
    {
      emoji: "📋",
      title: "Reporting & Delivery",
      description: "Present comprehensive reports with clear recommendations and implementation roadmap."
    }
  ];

  const methodologies = [
    {
      emoji: "📞",
      title: "Quantitative Research",
      description: "Statistical analysis, surveys, and numerical data collection for measurable insights and trend identification."
    },
    {
      emoji: "💬",
      title: "Qualitative Research",
      description: "In-depth interviews, focus groups, and observational studies for deep customer understanding."
    },
    {
      emoji: "🔄",
      title: "Mixed Methods",
      description: "Combination of quantitative and qualitative approaches for comprehensive market intelligence."
    },
    {
      emoji: "🌐",
      title: "Digital Analytics",
      description: "Web analytics, social media monitoring, and digital behavior analysis for online insights."
    },
    {
      emoji: "📈",
      title: "Predictive Modeling",
      description: "Advanced statistical models and machine learning for forecasting and scenario planning."
    },
    {
      emoji: "⚡",
      title: "Real-time Analysis",
      description: "Live data processing and instant insights for time-sensitive business decisions."
    }
  ];

  const toolCategories = [
    {
      title: "Data Analytics",
      emoji: "📊",
      tools: ["Tableau", "Power BI", "R Studio", "Python", "SPSS", "SAS"]
    },
    {
      title: "Business Intelligence",
      emoji: "📈",
      tools: ["Qlik Sense", "Looker", "IBM Cognos", "Sisense", "Domo", "Pentaho"]
    },
    {
      title: "Survey & Research",
      emoji: "📋",
      tools: ["Qualtrics", "SurveyMonkey", "Typeform", "Google Forms", "Medallia", "Confirmit"]
    },
    {
      title: "Data Management",
      emoji: "💾",
      tools: ["SQL Server", "MySQL", "MongoDB", "Oracle", "Snowflake", "BigQuery"]
    }
  ];

  const whyChoose = [
    {
      emoji: "🎓",
      title: "Expert Analysts",
      description: "PhD-level researchers and certified data scientists"
    },
    {
      emoji: "⚡",
      title: "Rapid Insights",
      description: "Quick turnaround times with actionable recommendations"
    },
    {
      emoji: "🔧",
      title: "Custom Solutions",
      description: "Tailored research methodologies for your specific needs"
    },
    {
      emoji: "💰",
      title: "Cost Effective",
      description: "Save up to 50% compared to traditional research firms"
    },
    {
      emoji: "📊",
      title: "Advanced Analytics",
      description: "Cutting-edge tools and machine learning capabilities"
    },
    {
      emoji: "🌐",
      title: "Global Reach",
      description: "Worldwide market research and data collection"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Market Research &</span>{" "}
            <span className="text-gradient">Business Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform raw data into actionable insights that drive growth and competitive advantage. 
            Make informed business decisions with our comprehensive research and analytics services.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Analytics Services</span>
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

      {/* Process Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Research &</span>{" "}
              <span className="text-gradient">Analytics Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our data-driven methodology ensures accurate insights and actionable recommendations for your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{step.emoji}</span>
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

      {/* Research Methodologies Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Research</span>{" "}
              <span className="text-gradient">Methodologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We employ diverse research methodologies to ensure comprehensive and reliable results for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{methodology.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {methodology.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {methodology.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Analytics Tools &</span>{" "}
              <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage industry-leading tools and platforms to deliver accurate, reliable, and actionable business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{category.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <span className="text-gray-300 text-sm font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose Our</span>{" "}
              <span className="text-gradient">Analytics Services?</span>
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
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Data into Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert analysts help you unlock the power of your data and drive strategic business decisions.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Analytics Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketResearchBusinessAnalytics;
