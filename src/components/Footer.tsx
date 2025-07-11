import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo  from '../assets/logoquaff.png';

const Footer = () => {
  const services = [
    { name: "IT & Software Development", slug: "it-services" },
    { name: "Business Process Outsourcing (BPO)", slug: "bpo" },
    { name: "Digital & Creative Services", slug: "digital-creative-services" },
    { name: "Technical & Professional Services", slug: "technical-professional-services" },
    { name: "HR & Staffing Services", slug: "hr" },
  ];

  const company = [
    { name: "About Us", slug: "about" },
    { name: "Contact Us", slug: "contact-us" },
        { name: "Our Team", slug: "about" }

  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
  <img
    src={logo}
    alt="Logo"
    className="w-10 h-10 object-contain"
  />
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
                info@quaffglobalservices.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-accent mr-3" />
                +91 9999293689
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-accent mr-3" />
                Amity Innovation center, sector-125, Noida, India
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
                    to={`/${item.slug}`}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Quaff Global Services. All rights reserved.
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
