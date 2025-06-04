import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code,
  Briefcase,
  Star,
  Zap,
  Puzzle,
  Users,
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Code,
      title: "IT & Software Development",
      description: "Custom software solutions, web development, mobile applications, and cutting-edge technology implementations tailored to your business needs.",
      features: ["Custom Software", "Web Development", "Mobile Applications", "Technology Implementation"],
      link: "/it-services"
    },
    {
      icon: Briefcase,
      title: "Business Process Outsourcing (BPO)",
      description: "Streamline your operations with our comprehensive BPO services including customer support, data processing, and back-office solutions.",
      features: ["Customer Support", "Data Processing", "Back-office Solutions", "Operations Management"],
      link: "/bpo"
    },
    {
      icon: Star,
      title: "Digital & Creative Services",
      description: "Transform your brand with our digital marketing, graphic design, content creation, and multimedia production services.",
      features: ["Digital Marketing", "Graphic Design", "Content Creation", "Multimedia Production"],
      link: "/digital-creative-services"
    },
    {
      icon: Zap,
      title: "Technical & Professional Services",
      description: "Expert consulting, project management, technical support, and professional services to accelerate your business growth.",
      features: ["Expert Consulting", "Project Management", "Technical Support", "Professional Services"],
      link: "/technical-professional-services"
    },
    {
      icon: Users,
      title: "Our HR & Staffing Services",
      description: "Discover end-to-end HR and staffing services designed to empower your workforce and scale your business. From sourcing top-tier talent to managing the full employee lifecycle, we provide agile, customized solutions for every organizational need.",
      features: ["Talent Acquisition", "Global Hiring", "Executive Search", "HR & Payroll Solutions"],
      link: "/hr"
    },
    {
      icon: Puzzle,
      title: "Need Something Else?",
      description: "We're here to help! If you're looking for services beyond what's listed, reach out to us — we offer custom solutions tailored to your unique needs.",
      features: ["Custom Solutions", "Flexible Services", "Consultation", "Tailored Approach"],
      link: "/contact-us"
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business growth 
            and drive innovation across every aspect of your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group cursor-pointer"
              onClick={() => {
                window.location.href = service.link;
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

               <Button 
  className="w-full bg-primary hover:bg-primary/90 text-white"
  onClick={(e) => {
    e.stopPropagation();
    window.location.href = service.link;
  }}
>
  {service.title.includes("Need Something Else") ? "Contact Us" : "Learn More"}
</Button>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
