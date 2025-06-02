
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Monitor,
  Lock,
  TrendingUp,
  Users,
  DollarSign,
  Gauge
} from 'lucide-react';

const CloudServices = () => {
  const cloudPlatforms = [
    {
      icon: "🔶",
      title: "Amazon Web Services (AWS)",
      description: "Comprehensive AWS solutions for enterprises of all sizes, leveraging the world's most comprehensive cloud platform.",
      features: [
        "EC2, Lambda, and container services (ECS/EKS)",
        "RDS, DynamoDB, and data warehousing",
        "S3 storage and CloudFront CDN",
        "VPC networking and security groups",
        "CloudFormation and infrastructure as code",
        "Auto Scaling and load balancing",
        "Monitoring with CloudWatch and X-Ray"
      ]
    },
    {
      icon: "🔷",
      title: "Microsoft Azure",
      description: "Enterprise-grade Azure solutions with seamless integration to Microsoft ecosystem and hybrid cloud capabilities.",
      features: [
        "Azure Virtual Machines and App Services",
        "Azure SQL Database and Cosmos DB",
        "Azure Storage and Content Delivery Network",
        "Azure Active Directory and security",
        "Azure Resource Manager templates",
        "Azure DevOps and CI/CD pipelines",
        "Azure Monitor and Application Insights"
      ]
    },
    {
      icon: "🔴",
      title: "Google Cloud Platform (GCP)",
      description: "Innovative GCP solutions powered by Google's cutting-edge technology, AI, and machine learning capabilities.",
      features: [
        "Compute Engine and Google Kubernetes Engine",
        "Cloud SQL, Firestore, and BigQuery",
        "Cloud Storage and global CDN",
        "Identity and Access Management (IAM)",
        "Deployment Manager and Terraform",
        "Cloud Build and container registry",
        "Stackdriver monitoring and logging"
      ]
    }
  ];

  const devopsServices = [
    {
      icon: "🔄",
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines that ensure fast, reliable software delivery with zero downtime."
    },
    {
      icon: "🐳",
      title: "Containerization",
      description: "Docker containerization and Kubernetes orchestration for scalable, portable, and efficient application deployment."
    },
    {
      icon: "🏗️",
      title: "Infrastructure as Code",
      description: "Terraform and CloudFormation templates for consistent, version-controlled infrastructure provisioning and management."
    },
    {
      icon: "📊",
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring solutions with real-time alerts, performance metrics, and centralized log management."
    },
    {
      icon: "🔐",
      title: "Security & Compliance",
      description: "Security-first approach with automated vulnerability scanning, compliance monitoring, and access controls."
    },
    {
      icon: "⚡",
      title: "Auto Scaling",
      description: "Intelligent auto-scaling solutions that automatically adjust resources based on demand to optimize costs and performance."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Infrastructure Assessment",
      description: "Comprehensive analysis of your current infrastructure, applications, and development processes to identify optimization opportunities.",
      details: [
        "Current infrastructure audit and documentation",
        "Application architecture review",
        "Performance bottleneck identification",
        "Security vulnerability assessment",
        "Cost optimization analysis"
      ]
    },
    {
      number: "2",
      title: "Cloud Strategy & Planning",
      description: "Develop a comprehensive cloud migration and DevOps transformation strategy aligned with your business objectives.",
      details: [
        "Cloud platform selection and architecture design",
        "Migration roadmap and timeline planning",
        "DevOps toolchain selection and integration",
        "Security and compliance framework design",
        "Cost estimation and budget planning"
      ]
    },
    {
      number: "3",
      title: "Infrastructure Setup",
      description: "Build scalable, secure cloud infrastructure using best practices and infrastructure as code principles.",
      details: [
        "Cloud environment provisioning and configuration",
        "Network architecture and security group setup",
        "Database and storage solution implementation",
        "Load balancers and auto-scaling configuration",
        "Backup and disaster recovery setup"
      ]
    },
    {
      number: "4",
      title: "CI/CD Pipeline Implementation",
      description: "Automate your software delivery process with robust continuous integration and deployment pipelines.",
      details: [
        "Source control and branching strategy setup",
        "Automated build and testing workflows",
        "Deployment automation and rollback procedures",
        "Environment promotion and approval processes",
        "Integration testing and quality gates"
      ]
    },
    {
      number: "5",
      title: "Monitoring & Security",
      description: "Implement comprehensive monitoring, logging, and security measures to ensure optimal performance and protection.",
      details: [
        "Application and infrastructure monitoring setup",
        "Centralized logging and log analysis",
        "Alert configuration and incident response",
        "Security scanning and vulnerability management",
        "Performance optimization and tuning"
      ]
    },
    {
      number: "6",
      title: "Training & Optimization",
      description: "Empower your team with knowledge and continuously optimize your cloud and DevOps processes for maximum efficiency.",
      details: [
        "Team training and knowledge transfer",
        "Documentation and runbook creation",
        "Process optimization and best practices",
        "Continuous improvement recommendations",
        "Ongoing support and maintenance planning"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Deployment",
      description: "Reduce deployment time from hours to minutes with automated CI/CD pipelines"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Optimize cloud costs through auto-scaling and resource right-sizing"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Built-in security controls and compliance monitoring across all environments"
    },
    {
      icon: Gauge,
      title: "Improved Reliability",
      description: "99.9% uptime with automated failover and disaster recovery capabilities"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Automatically scale resources to handle traffic spikes and business growth"
    },
    {
      icon: Users,
      title: "Team Productivity",
      description: "Free your developers to focus on innovation instead of infrastructure management"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">☁️ Scale Without</span>{" "}
            <span className="text-gradient">Limits</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Accelerate your business with cloud-native solutions and automated DevOps practices. 
            From infrastructure setup to continuous deployment, we help you build, deploy, and scale applications with confidence and efficiency.
          </p>
        </div>
      </section>

      {/* Cloud Platform Expertise */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Cloud Platform</span>{" "}
              <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{platform.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {platform.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-400">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps & Automation Services */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">DevOps &</span>{" "}
              <span className="text-gradient">Automation Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Cloud & DevOps</span>{" "}
              <span className="text-gradient">Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From assessment to full automation, we follow a systematic approach that transforms your infrastructure and accelerates your development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-16">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-400">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose Our</span>{" "}
              <span className="text-gradient">Cloud & DevOps Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
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
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your cloud and DevOps requirements and build a scalable, automated infrastructure that grows with your business.
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

export default CloudServices;
