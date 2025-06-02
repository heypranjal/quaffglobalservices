
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContentWritingCopywriting = () => {
  const wordsServices = [
    {
      emoji: "📝",
      title: "Blog Writing & Articles",
      description: "Engaging, SEO-optimized blog posts and articles that establish thought leadership and drive organic traffic to your website."
    },
    {
      emoji: "🌐",
      title: "Website Content",
      description: "Compelling web copy that communicates your value proposition clearly and guides visitors towards conversion."
    },
    {
      emoji: "🛍️",
      title: "Product Descriptions",
      description: "Persuasive product copy that highlights benefits, addresses pain points, and converts browsers into buyers."
    },
    {
      emoji: "📋",
      title: "Technical Documentation",
      description: "Clear, comprehensive technical content that makes complex information accessible and actionable for your users."
    },
    {
      emoji: "📢",
      title: "Marketing Copy",
      description: "High-converting ad copy, landing pages, and marketing materials that capture attention and drive action."
    },
    {
      emoji: "📱",
      title: "Social Media Content",
      description: "Engaging social media posts and campaigns that build community, increase engagement, and amplify your brand voice."
    }
  ];

  const contentProcess = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "We deep-dive into your brand, audience, competitors, and industry to understand the context and create content that resonates."
    },
    {
      step: "2",
      title: "Content Strategy",
      description: "Develop a comprehensive content strategy with topics, tone, style guidelines, and SEO keywords aligned with your goals."
    },
    {
      step: "3",
      title: "Writing & Creation",
      description: "Our expert writers craft compelling, original content that balances creativity with strategic messaging and SEO optimization."
    },
    {
      step: "4",
      title: "Review & Refinement",
      description: "Thorough editing, fact-checking, and refinement to ensure every piece meets our quality standards and your brand voice."
    },
    {
      step: "5",
      title: "Delivery & Support",
      description: "Final content delivery with publishing guidelines, performance tracking recommendations, and ongoing content support."
    }
  ];

  const contentTypes = [
    {
      title: "SEO Blog Posts",
      description: "Research-backed articles optimized for search engines that establish authority and drive organic traffic to your website."
    },
    {
      title: "Landing Page Copy",
      description: "High-converting landing page content that captures leads and drives specific actions with compelling calls-to-action."
    },
    {
      title: "Email Campaigns",
      description: "Engaging email content that nurtures leads, retains customers, and drives repeat business with personalized messaging."
    },
    {
      title: "Case Studies",
      description: "Compelling success stories that showcase your expertise and build trust with potential customers through social proof."
    },
    {
      title: "White Papers & eBooks",
      description: "In-depth thought leadership content that positions your brand as an industry expert and generates qualified leads."
    },
    {
      title: "Press Releases",
      description: "Professional press releases that capture media attention and generate publicity for your brand announcements."
    },
    {
      title: "Script Writing",
      description: "Engaging scripts for videos, podcasts, and presentations that communicate your message clearly and memorably."
    },
    {
      title: "Sales Copy",
      description: "Persuasive sales pages and promotional content that overcomes objections and drives purchase decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">✍️ Content Writing &</span>{" "}
            <span className="text-gradient">Copywriting</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Craft compelling narratives and persuasive copy that engages your audience, builds trust, and drives conversions across all your digital touchpoints.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Start Your Content Journey
          </Button>
        </div>
      </section>

      {/* Words That Work Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Words That</span>{" "}
              <span className="text-gradient">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordsServices.map((service, index) => (
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

      {/* Content Creation Process Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Content</span>{" "}
              <span className="text-gradient">Creation Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentProcess.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">{step.step}</span>
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

      {/* Content That Converts Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Content That</span>{" "}
              <span className="text-gradient">Converts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From awareness to conversion, we create content for every stage of your customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((content, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {content.description}
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
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create compelling content that engages your audience and drives measurable results for your business.
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

export default ContentWritingCopywriting;
