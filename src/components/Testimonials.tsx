
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      content: "Quaff Media transformed our entire digital infrastructure. Their expertise in both strategy and implementation is unmatched. Our productivity increased by 40% within the first quarter.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Founder & CEO",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      content: "The AI analytics solution they built for us revolutionized our decision-making process. Real-time insights and predictive analytics have given us a significant competitive edge.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      content: "Their digital marketing strategy delivered exceptional results. Our lead generation increased by 500% and our brand recognition soared. Truly a game-changing partnership.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-brand-dark">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Client</span>{" "}
            <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the leaders who've experienced 
            the transformative power of our solutions firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
