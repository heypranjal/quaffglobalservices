
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Users, Star } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      category: "Technology Development",
      description: "Complete digital transformation of a traditional retail business, resulting in 300% increase in online sales and improved customer experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      results: ["300% Sales Increase", "50% Faster Load Times", "99.9% Uptime"],
      tech: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Analytics",
      description: "Custom analytics platform with machine learning capabilities that helped a fintech company reduce fraud by 85% and improve decision-making.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      results: ["85% Fraud Reduction", "60% Faster Analysis", "Real-time Insights"],
      tech: ["Python", "TensorFlow", "React", "Docker"]
    },
    {
      title: "Digital Marketing Campaign Success",
      category: "Creative Marketing",
      description: "Comprehensive digital marketing strategy that increased brand awareness by 250% and generated 500% ROI for a B2B software company.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
      results: ["250% Brand Awareness", "500% ROI", "10x Lead Generation"],
      tech: ["SEO", "SEM", "Social Media", "Content Marketing"]
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Success</span>{" "}
            <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. Discover how we've helped businesses 
            transform their operations and achieve remarkable growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group overflow-hidden">
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Key Results:</h4>
                  <div className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-400">
                        <Star className="w-3 h-3 text-accent mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-primary hover:border-primary transition-all duration-300 group">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-glow">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
