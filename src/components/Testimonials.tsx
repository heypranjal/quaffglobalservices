
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "ab",
      position: "CTO",
      company: "TechFlow Solutions",
      content: "Quaff Global Services transformed our brand identity completely. Their creative team delivered stunning visuals and a digital strategy that increased our online engagement by 300%. Professional, innovative, and always on time!.",
      rating: 5
    },
    {
      name: "abc",
      position: "Founder & CEO",
      company: "InnovateLab",
      content: "Finding the right talent used to be our biggest challenge. Quaff Global Services's HR team not only filled our positions quickly but also found candidates who perfectly fit our culture. They saved us months of recruitment time.",
      rating: 5
    },
    {
      name: "Ebc",
      position: "Marketing Director",
      company: "GrowthCorp",
      content: "Outsourcing our customer service to Quaff Global Services was the best decision we made. Their team handles our clients with such professionalism that satisfaction scores improved by 40%. Cost-effective and reliable!",
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
