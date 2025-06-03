import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DigitalCreativeServices = () => {
  const services = [
    {
      emoji: "🎨",
      title: "Graphic Design & Animation",
      description: "Bring your brand to life with stunning visuals and captivating animations that tell your story.",
      link: "/graphic-design-animation"
    },
    {
      emoji: "📈",
      title: "Digital Marketing Services",
      description: "Amplify your reach and drive growth with data-driven marketing strategies that deliver measurable results.",
      link: "/digital-marketing-services"
    },
    {
      emoji: "✍️",
      title: "Content Writing & Copywriting",
      description: "Engage your audience with compelling, SEO-optimized content that converts visitors into customers.",
      link: "/content-writing-copywriting"
    }
  ];

  const whyChoose = [
    {
      emoji: "🏆",
      title: "Proven Expertise",
      description: "Years of experience delivering exceptional results across diverse industries and challenging projects."
    },
    {
      emoji: "🚀",
      title: "Innovation-Driven",
      description: "We stay ahead of trends, using cutting-edge tools and techniques to give you a competitive edge."
    },
    {
      emoji: "🎯",
      title: "Results-Focused",
      description: "Every strategy is data-driven and designed to achieve your specific business goals and KPIs."
    },
    {
      emoji: "🤝",
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring seamless communication and perfect alignment."
    },
    {
      emoji: "⚡",
      title: "Rapid Delivery",
      description: "Fast turnaround times without compromising quality, keeping your projects on schedule."
    },
    {
      emoji: "💡",
      title: "Creative Excellence",
      description: "Award-winning creative solutions that stand out in the market and resonate with your audience."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">🎨 Digital &</span>{" "}
            <span className="text-gradient">Creative Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your brand with cutting-edge design, strategic digital marketing, and compelling content that drives results and captivates your audience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Creative Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center cursor-pointer"
                onClick={() => {
                  if (service.link) {
                    window.location.href = service.link;
                  }
                }}
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
                  {service.link && (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = service.link;
                      }}
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="text-gradient">Quaff Global Services?</span>
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
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your creative and digital marketing needs.
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

export default DigitalCreativeServices;
