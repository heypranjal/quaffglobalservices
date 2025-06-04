import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import sarthak from '../assets/sarthak.jpg';
import shashank from '../assets/shashank.jpeg';
import utkarsh from '../assets/utkarsh.jpeg';
import palak from '../assets/palakarora.jpg';

import {
  Users,
  Globe,
  Award,
  Target,
  Code,
  Headphones,
  DollarSign,
  Palette,
  Settings,
  UserCheck,
  Building,
  Star,
  Clock,
  Shield,
  TrendingUp,
  Linkedin
} from 'lucide-react';

const AboutUs = () => {
  const foundingTeam = [
    {
      icon: "🎓",
      title: "IIT Delhi Graduate",
      description: "Bringing world-class technical excellence and engineering innovation"
    },
    {
      icon: "💻",
      title: "Digital Veteran (10+ Years)",
      description: "Deep expertise in digital transformation and emerging technologies"
    },
    {
      icon: "👔",
      title: "Business Leader (30+ Years)",
      description: "Extensive experience in building and scaling successful enterprises"
    },
    {
      icon: "⚙️",
      title: "Software & IT Expert (15+ Years)",
      description: "Proven track record in software development and IT infrastructure"
    }
  ];

  const leadershipTeam = [
    {
      icon: "🏢",
      title: "Chief Operating Officer",
      description: "Former executive from Hungama, bringing deep operational excellence",
      company: "Ex-Hungama"
    },
    {
      icon: "🎯",
      title: "Senior Strategic Advisor",
      description: "Former Senior Partner at McKinsey & Company, providing world-class strategic guidance",
      company: "Ex-McKinsey & Company"
    },
    {
      icon: "🚀",
      title: "Technology Leaders",
      description: "Senior professionals from Amazon and Airtel, contributing cutting-edge technical insights",
      company: "Ex-Amazon & Airtel"
    }
  ];

  const services = [
    {
      icon: Code,
      category: "IT",
      title: "IT & Software Development",
      services: [
        "Custom Software Development",
        "Mobile App Development (iOS & Android)",
        "Web Development & Management",
        "Cloud Services & DevOps"
      ]
    },
    {
      icon: Headphones,
      category: "BPO",
      title: "Business Process Outsourcing",
      services: [
        "Customer Support & Call Centers",
        "Finance & Accounting Services",
        "Human Resource Outsourcing",
        "Data Entry & Management"
      ]
    },
    {
      icon: Palette,
      category: "DC",
      title: "Digital & Creative Services",
      services: [
        "Graphic Design & Animation",
        "Digital Marketing Services",
        "Content Writing & Copywriting"
      ]
    },
    {
      icon: Settings,
      category: "TP",
      title: "Technical & Professional Services",
      services: [
        "IT Helpdesk & Infrastructure Support",
        "CAD & Engineering Design",
        "Legal Process Outsourcing",
        "Market Research & Analytics"
      ]
    },
    {
      icon: UserCheck,
      category: "HR",
      title: "HR & Staffing",
      services: [
        "Recruitment & Talent Acquisition",
        "Employee Onboarding & Training",
        "Performance Management",
        "Staffing Solutions & Contract Management"
      ]
    }
  ];

    const teamMembers = [
    {
      image: sarthak,
      name: "Sarthak Agarwal",
      position: "Chief Executive Officer",
      description: "With over 10 years of proven leadership experience, Sarthak drives Quaff Global Services' strategic vision and operational excellence across all service verticals. His entrepreneurial expertise and deep understanding of global markets ensure our clients receive innovative solutions that deliver measurable business impact.",
      linkedin: "https://www.linkedin.com/in/arjunreddy"
    },
    {
      image: utkarsh,
      name: "Utkarsh Agarwal",
      position: "Chief Operating Officer",
      description: "An IIT Delhi graduate with 7+ years of experience partnering with leading global brands, Utkarsh orchestrates seamless operations and client success initiatives. His technical background and international business acumen enable Quaff Global Services to deliver world-class services while maintaining the highest standards of quality and efficiency.",
    },
    {
      image: shashank,
      name: "Shashank Rai",
      position: "Chief Technology Officer",
      description: "With 15+ years of extensive experience in software development and IT infrastructure, Shashank leads our technical innovation and ensures cutting-edge solutions across all technology domains. His deep expertise in emerging technologies and scalable architectures positions Quaff Global Services at the forefront of digital transformation.",
      linkedin: "https://www.linkedin.com/in/rajeshkumar"
    },
    {
      image: palak,
      name: "Palak Arora",
      position: "Chief Digital Officer",
      description: "Bringing 6+ years of creative and digital expertise, Palak spearheads our creative services and digital marketing strategies that captivate audiences and drive engagement. Her innovative approach to brand storytelling and digital experiences helps clients build powerful connections with their target markets.",
      linkedin: "https://www.linkedin.com/in/sarahgupta"
    }
  ];



  const stats = [
    { icon: Building, number: "15+", label: "Service Categories" },
    { icon: Clock, number: "24/7", label: "Support Available" },
    { icon: Star, number: "100%", label: "Client Satisfaction Focus" },
    { icon: Globe, number: "Global", label: "Service Reach" }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

  {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-gradient">Quaff Global Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses worldwide with innovative technology solutions and comprehensive outsourcing services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Story</span>
            </h2>
            <div className="flex justify-center items-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-white">QGS</span>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Quaff Global Services was founded by a diverse team of accomplished entrepreneurs who bring together decades of combined expertise across technology, business, and digital innovation.
            </p>
          </div>

          {/* Founding Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Founding Team:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foundingTeam.map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{member.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                          {member.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Core Leadership Team:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {leadershipTeam.map((leader, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{leader.icon}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {leader.title}
                      </h4>
                      <div className="text-xs text-accent font-semibold mb-3">
                        {leader.company}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Mission</span>
            </h2>
          </div>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We are committed to providing world-class technology solutions and business process outsourcing services that enable our clients to focus on their core competencies while we handle their operational and technical challenges. Our goal is to be the trusted partner that accelerates growth and innovation for businesses of all sizes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accent mb-1">
                        {service.category}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.services.map((item, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-gray-400">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Meet Our Team */}
        {/* Meet Our Team */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Meet Our</span>{" "}
              <span className="text-gradient">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover mr-6 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="text-xl font-bold text-white mr-2 group-hover:text-accent transition-colors duration-300">
                          {member.name}
                        </h3>
                      </div>
                      <div className="text-sm font-semibold text-accent mb-3">
                        {member.position}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA + Footer */}
      <section className="py-20 px-6 bg-brand-dark text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Quaff Global Services can help accelerate your business growth with our comprehensive technology and outsourcing solutions.
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

export default AboutUs;