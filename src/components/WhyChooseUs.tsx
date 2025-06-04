
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      emoji: "🌟",
      title: "Proven Excellence",
      description: "Over a decade of delivering exceptional results across diverse industries with a track record of 98% client satisfaction."
    },
    {
      emoji: "🚀",
      title: "Innovation-Driven",
      description: "We leverage the latest technologies and methodologies to provide cutting-edge solutions that keep you ahead of the competition."
    },
    {
      emoji: "🤝",
      title: "Partnership Approach",
      description: "We don't just provide services; we become your strategic partner, understanding your goals and working together for long-term success."
    },
    {
      emoji: "🔒",
      title: "Security & Compliance",
      description: "Your data and operations are protected with enterprise-grade security measures and full compliance with international standards."
    },
    {
      emoji: "💰",
      title: "Cost-Effective Solutions",
      description: "Maximize your ROI with our efficient processes and competitive pricing without compromising on quality or service excellence."
    },
    {
      emoji: "⏰",
      title: "24/7 Support",
      description: "Round-the-clock support across multiple time zones ensures your business operations never miss a beat."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Team Members" },
    { number: "9+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 px-6 bg-brand-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="text-gradient">Quaff Global Services?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We combine strategic thinking with technical excellence to deliver 
              solutions that drive real business impact. Our client-first approach 
              ensures every project exceeds expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{reason.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-gray-800/50 border-gray-700 hover-glow">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-4">
                  Collaborative Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our diverse team brings together creative minds and technical experts 
                  to tackle complex challenges and deliver innovative solutions that 
                  drive business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
