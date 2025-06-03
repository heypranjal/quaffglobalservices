import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: "IT & Software Development", slug: "it-services" },
    { name: "Business Process Outsourcing (BPO)", slug: "bpo" },
    { name: "Digital & Creative Services", slug: "digital-creative-services" },
    { name: "Technical & Professional Services", slug: "technical-professional-services" },
  ];

  const company = [
    "About Us",
    "Our Team",
    "Case Studies",
    "Careers",
    "Contact Us"
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold text-white">Quaff Global Services</span>
            </div>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming digital visions into reality through innovative technology solutions,
              strategic consulting, and creative excellence that drives business growth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-accent mr-3" />
                hello@quaffmedia.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-accent mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-accent mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/${service.slug}`}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Quaff Media. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-accent transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
