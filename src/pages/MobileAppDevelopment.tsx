
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MobileAppDevelopment = () => {
  const platforms = [
    {
      emoji: "🍎",
      title: "iOS Development",
      description: "Native iOS apps built with Swift and Objective-C for optimal performance and seamless Apple ecosystem integration.",
      features: [
        "Native Swift & Objective-C development",
        "iOS Human Interface Guidelines compliance",
        "App Store optimization & submission",
        "Core Data & CloudKit integration",
        "Apple Pay & In-App Purchases",
        "Push notifications & background processing"
      ]
    },
    {
      emoji: "🤖",
      title: "Android Development",
      description: "Powerful Android applications using Kotlin and Java that leverage the full potential of the Android ecosystem.",
      features: [
        "Native Kotlin & Java development",
        "Material Design implementation",
        "Google Play Store deployment",
        "Firebase integration & analytics",
        "Google Pay & billing integration",
        "Android Jetpack components"
      ]
    },
    {
      emoji: "🔄",
      title: "Cross-Platform",
      description: "Efficient development with React Native and Flutter for consistent experiences across both platforms.",
      features: [
        "React Native & Flutter development",
        "Shared codebase efficiency",
        "Platform-specific optimizations",
        "Cost-effective solution",
        "Faster time-to-market",
        "Unified maintenance approach"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Strategy & Planning",
      description: "Define your app's purpose, target audience, and key features through comprehensive market research and user analysis.",
      details: [
        "Market research and competitor analysis",
        "User persona development",
        "Feature prioritization and roadmap",
        "Platform strategy (iOS, Android, or both)",
        "Monetization strategy planning"
      ]
    },
    {
      number: "2",
      title: "UX/UI Design",
      description: "Create intuitive, engaging designs that provide exceptional user experiences and align with platform guidelines.",
      details: [
        "User journey mapping and wireframing",
        "Interactive prototypes and mockups",
        "Platform-specific design guidelines",
        "Accessibility and usability testing",
        "Design system and style guide creation"
      ]
    },
    {
      number: "3",
      title: "Development & Integration",
      description: "Build robust, scalable mobile applications using the latest technologies and best coding practices.",
      details: [
        "Native or cross-platform development",
        "Backend API development and integration",
        "Database design and optimization",
        "Third-party service integrations",
        "Real-time features and push notifications"
      ]
    },
    {
      number: "4",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across multiple devices and scenarios to ensure flawless performance and user satisfaction.",
      details: [
        "Functional and usability testing",
        "Performance and load testing",
        "Device and OS compatibility testing",
        "Security testing and vulnerability assessment",
        "Beta testing with real users"
      ]
    },
    {
      number: "5",
      title: "App Store Launch",
      description: "Navigate the app store submission process and optimize your listing for maximum visibility and downloads.",
      details: [
        "App store guidelines compliance",
        "App Store Optimization (ASO)",
        "Submission and review process management",
        "Launch strategy and marketing support",
        "Post-launch monitoring and analytics"
      ]
    },
    {
      number: "6",
      title: "Support & Updates",
      description: "Ongoing maintenance, feature updates, and performance optimization to keep your app competitive and current.",
      details: [
        "Regular updates and bug fixes",
        "Performance monitoring and optimization",
        "New feature development",
        "OS compatibility updates",
        "Analytics and user feedback analysis"
      ]
    }
  ];

  const technologies = [
    { name: "Swift", type: "iOS Native" },
    { name: "Kotlin", type: "Android Native" },
    { name: "React Native", type: "Cross-Platform" },
    { name: "Flutter", type: "Cross-Platform" },
    { name: "Firebase", type: "Backend Services" },
    { name: "Node.js", type: "API Development" }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">📱 Mobile Apps</span>{" "}
            <span className="text-gradient">That Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Create engaging mobile experiences that delight users and drive business growth. From iOS to Android, 
            we build high-performance apps that connect your brand with customers wherever they are.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => window.location.href = '/#contact'}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Platform</span>{" "}
              <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{platform.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 text-center">
                    {platform.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                    {platform.description}
                  </p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
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

      {/* Process Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Mobile App</span>{" "}
              <span className="text-gradient">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From concept to App Store launch, we follow a streamlined process that ensures your mobile app succeeds in today's competitive marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 text-xs flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Technologies</span>{" "}
              <span className="text-gradient">We Use</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-xs">
                    {tech.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your mobile app vision and see how we can bring it to life with cutting-edge technology and exceptional user experience.
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

export default MobileAppDevelopment;
