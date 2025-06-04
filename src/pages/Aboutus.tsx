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

      {/* ... other sections (Hero, Story, Founding Team, Leadership, Mission, Services) ... */}

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
