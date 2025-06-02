import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ITServices = () => {
  const coreServices = [
    {
      emoji: "💻",
      title: "Custom Software Development",
      description: "Full-stack solutions tailored to your unique business needs. From concept to deployment, we build robust applications that scale with your growth.",
      link: "/custom-software-development"
    },
    {
      emoji: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Engaging user experiences that connect your brand with customers on-the-go.",
      link: "/mobile-app-development"
    },
    {
      emoji: "🌐",
      title: "Web Development & Management",
      description: "Modern, responsive websites and e-commerce platforms. From simple landing pages to complex web applications, we create digital experiences that convert.",
      link: "/web-development"
    },
    {
      emoji: "☁️",
      title: "Cloud Services & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines. Streamline your operations with modern DevOps practices and cloud-native solutions.",
      link: "/cloud-services"
    }
  ];

  const whyChoose = [
    {
      emoji: "🚀",
      title: "Proven Expertise",
      description: "Years of experience delivering complex projects across diverse industries"
    },
    {
      emoji: "⚡",
      title: "Agile Approach",
      description: "Fast delivery with iterative development and continuous client feedback"
    },
    {
      emoji: "🛡️",
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensures bug-free, reliable solutions"
    },
    {
      emoji: "💬",
      title: "24/7 Support",
      description: "Dedicated support team available whenever you need assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">IT & Software</span>{" "}
            <span className="text-gradient">Development Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. From custom software to cloud deployment, 
            we bring your digital vision to life with precision and innovation.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Core Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group cursor-pointer"
                onClick={() => {
                  if (service.link) {
                    window.location.href = service.link;
                  }
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{service.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  {service.link && (
                    <Button 
                      className="mt-4 bg-primary hover:bg-primary/90 text-white"
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
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="text-gradient">Quaff Global Services?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just build software – we craft digital solutions that drive real business results. 
              With a proven track record of successful projects and satisfied clients, we're your trusted partner in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our IT & Software Development services can accelerate your growth.
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

export default ITServices;
