import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();
  
  const caseStudies = [
    {
      id: 'halp',
      title: "Global Career Empowerment through Digital Revamp",
      // category: "Technology Development",
      description: "Complete digital revamp of Halp's online presence to boost program enrollments, improve brand visibility, and drive career empowerment across global markets.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      results: ["180% Increase in Program Enrollments","250% Rise in Qualified Applicants","65% Longer Session Duration","40% Growth in Employer Partnerships","85% Job Placement Rate Visibility"],
      // tech: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      id: 'aveine',
      title: "HR & Staffing Expansion for Global Wine-Tech Startup",
      // category: "HR & Staffing Expansion for Global Wine-Tech Startup",
      description: "End-to-end HR transformation for Aveine, enabling global expansion through strategic recruitment, cross-cultural team building, and international compliance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      results: ["25+ Hires Across 8 Countries", "60% Faster Time-to-Hire", "95% Candidate Retention Rate", "Operations Established in 4 New Markets", "30% Boost in Employee Satisfaction"],
      // tech: ["BambooHR", "Deel", "Notion", "Slack", "ATS Platforms (Greenhouse, Lever)"]
    },
    {
      id: 'hungama',
      title: "Scalable BPO Transformation for Digital Entertainment Growth",
      // category: "Digital Entertainment BPO Transformation",
      description: "Scalable business process outsourcing for Hungama to streamline content operations, multilingual customer support, and analytics during exponential user growth.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
      results: ["40% Reduction in Operational Costs", "60% Faster Content Processing", "25% Boost in Recommendation Engine Accuracy","3x User Growth Supported Without Cost Spike", "4.6/5 Customer Satisfaction Score"],
      // tech: ["Zendesk", "Freshdesk", "Power BI", "Custom CMS Integrations"]
    }
  ];

  const handleViewDetails = (caseStudyId) => {
    navigate(`/${caseStudyId}`);
  };

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
                

                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
                  onClick={() => handleViewDetails(study.id)}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
