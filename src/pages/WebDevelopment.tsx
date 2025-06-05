
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WebDevelopment = () => {
  const webSolutions = [
    {
      emoji: "💼",
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and showcase your brand effectively.",
      features: [
        "Responsive design for all devices",
        "SEO optimization and fast loading",
        "Content management system",
        "Contact forms and lead generation",
        "Analytics and performance tracking"
      ]
    },
    {
      emoji: "🛒",
      title: "E-commerce Platforms",
      description: "Complete online stores with secure payment processing and inventory management systems.",
      features: [
        "Shopify, WooCommerce development",
        "Payment gateway integration",
        "Inventory and order management",
        "Customer accounts and wishlists",
        "Multi-currency and shipping options"
      ]
    },
    {
      emoji: "⚡",
      title: "Web Applications",
      description: "Interactive web apps with dynamic functionality and real-time features for enhanced user engagement.",
      features: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "Real-time data synchronization",
        "User authentication and profiles",
        "Interactive dashboards and forms"
      ]
    },
    {
      emoji: "📝",
      title: "Content Management",
      description: "Easy-to-use CMS platforms that let you update content without technical knowledge.",
      features: [
        "WordPress, Drupal, custom CMS",
        "User-friendly admin interfaces",
        "Content scheduling and workflows",
        "Multi-user permissions and roles",
        "Blog and news management"
      ]
    },
    {
      emoji: "🔧",
      title: "Website Maintenance",
      description: "Ongoing support to keep your website secure, updated, and performing at its best.",
      features: [
        "Regular security updates and backups",
        "Performance monitoring and optimization",
        "Content updates and modifications",
        "Bug fixes and troubleshooting",
        "Hosting and domain management"
      ]
    },
    {
      emoji: "📈",
      title: "SEO & Optimization",
      description: "Improve your search rankings and website performance with comprehensive optimization strategies.",
      features: [
        "On-page and technical SEO",
        "Page speed optimization",
        "Mobile optimization",
        "Schema markup implementation",
        "Analytics and reporting setup"
      ]
    }
  ];

  const developmentProcess = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "Understanding your goals, audience, and requirements to create a strategic foundation for your website.",
      features: [
        "Business objectives and target audience analysis",
        "Competitor research and market analysis",
        "Content strategy and sitemap development",
        "Technical requirements assessment",
        "Project timeline and milestone planning"
      ]
    },
    {
      number: "2",
      title: "Design & User Experience",
      description: "Creating visually appealing and user-friendly designs that align with your brand and convert visitors.",
      features: [
        "Wireframing and user journey mapping",
        "Visual design and brand integration",
        "Responsive design for all devices",
        "Accessibility and usability optimization",
        "Interactive prototypes and client approval"
      ]
    },
    {
      number: "3",
      title: "Development & Integration",
      description: "Building your website with clean code, modern technologies, and seamless third-party integrations.",
      features: [
        "Frontend development with modern frameworks",
        "Backend development and database setup",
        "CMS integration and content management",
        "Third-party API and service integration",
        "E-commerce and payment gateway setup"
      ]
    },
    {
      number: "4",
      title: "Testing & Optimization",
      description: "Comprehensive testing to ensure flawless functionality, performance, and cross-browser compatibility.",
      features: [
        "Functional testing and bug resolution",
        "Performance optimization and speed testing",
        "Cross-browser and device compatibility",
        "SEO optimization and metadata setup",
        "Security testing and vulnerability assessment"
      ]
    },
    {
      number: "5",
      title: "Launch & Deployment",
      description: "Smooth website launch with proper hosting setup, domain configuration, and go-live support.",
      features: [
        "Hosting environment setup and configuration",
        "Domain and DNS configuration",
        "SSL certificate installation and security setup",
        "Analytics and tracking implementation",
        "Launch day monitoring and support"
      ]
    },
    {
      number: "6",
      title: "Maintenance & Growth",
      description: "Ongoing support, updates, and enhancements to keep your website performing optimally and growing with your business.",
      features: [
        "Regular updates and security patches",
        "Content updates and modifications",
        "Performance monitoring and optimization",
        "Backup management and disaster recovery",
        "Feature enhancements and scaling support"
      ]
    }
  ];

  const technologies = {
    Frontend: [
      "HTML5, CSS3, JavaScript",
      "React, Vue.js, Angular",
      "Bootstrap, Tailwind CSS",
      "SASS/SCSS, TypeScript"
    ],
    Backend: [
      "Node.js, PHP, Python",
      "Express.js, Laravel, Django",
      "REST APIs, GraphQL",
      "Microservices Architecture"
    ],
    "CMS Platforms": [
      "WordPress, Drupal",
      "Shopify, WooCommerce",
      "Magento, PrestaShop",
      "Custom CMS Solutions"
    ],
    Databases: [
      "MySQL, PostgreSQL",
      "MongoDB, Redis",
      "Firebase, Supabase",
      "Database Optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="text-6xl mb-6">🌐</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Web Experiences</span>{" "}
            <span className="text-gradient">That Wow</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Create stunning, high-performing websites that captivate your audience and drive business results. 
            From simple landing pages to complex e-commerce platforms, we build web solutions that work beautifully across all devices.
          </p>
        </div>
      </section>

      {/* Our Web Solutions Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Web Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webSolutions.map((solution, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{solution.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Web Development</span>{" "}
              <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From initial concept to ongoing maintenance, we follow a comprehensive process that ensures your website 
              exceeds expectations and delivers real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentProcess.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Technologies</span>{" "}
              <span className="text-gradient">We Master</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {techs.map((tech, techIndex) => (
                      <li key={techIndex} className="text-gray-300 text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Build Your Web Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a website that not only looks amazing but also drives real results for your business.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
