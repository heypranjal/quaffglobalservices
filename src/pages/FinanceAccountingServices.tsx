
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FinanceAccountingServices = () => {
  const services = [
    {
      emoji: "📊",
      title: "Bookkeeping Services",
      description: "Maintain accurate financial records with our comprehensive bookkeeping solutions. We handle daily transactions, reconciliations, and financial reporting to keep your books organized and compliant.",
      process: [
        { step: "1", title: "Setup & Review", description: "Analyze current records and establish chart of accounts" },
        { step: "2", title: "Daily Entry", description: "Record transactions and categorize expenses accurately" },
        { step: "3", title: "Reconciliation", description: "Monthly bank and credit card reconciliations" },
        { step: "4", title: "Reporting", description: "Generate financial statements and insights" }
      ]
    },
    {
      emoji: "💰",
      title: "Payroll Processing",
      description: "Ensure timely and accurate payroll processing with full compliance. We handle calculations, tax withholdings, direct deposits, and all regulatory requirements.",
      process: [
        { step: "1", title: "Employee Setup", description: "Configure employee profiles and tax information" },
        { step: "2", title: "Time Collection", description: "Gather and verify timesheets and attendance data" },
        { step: "3", title: "Processing", description: "Calculate wages, taxes, and deductions accurately" },
        { step: "4", title: "Distribution", description: "Process payments and generate pay stubs" }
      ]
    },
    {
      emoji: "🔄",
      title: "AP/AR Management",
      description: "Optimize cash flow with professional accounts payable and receivable management. We handle vendor payments, customer invoicing, and collections efficiently.",
      process: [
        { step: "1", title: "Invoice Management", description: "Process and approve incoming/outgoing invoices" },
        { step: "2", title: "Payment Scheduling", description: "Optimize payment timing for cash flow" },
        { step: "3", title: "Collections", description: "Follow up on overdue accounts professionally" },
        { step: "4", title: "Reporting", description: "Provide aging reports and cash flow analysis" }
      ]
    },
    {
      emoji: "📋",
      title: "Tax Preparation",
      description: "Navigate complex tax requirements with confidence. Our expert tax preparation services ensure compliance while maximizing deductions and minimizing liabilities.",
      process: [
        { step: "1", title: "Document Review", description: "Collect and organize all tax documents" },
        { step: "2", title: "Planning", description: "Identify deductions and tax strategies" },
        { step: "3", title: "Preparation", description: "Complete accurate tax returns and forms" },
        { step: "4", title: "Filing & Support", description: "File returns and provide ongoing support" }
      ]
    }
  ];

  const softwareSolutions = [
    "QuickBooks", "Xero", "Sage", "FreshBooks", "Wave", "NetSuite"
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Finance &</span>{" "}
            <span className="text-gradient">Accounting Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional financial solutions to streamline your business operations and drive growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Service Description */}
                <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{service.emoji}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Process Steps */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Our {service.title.split(' ')[0]} Process
                  </h4>
                  {service.process.map((step, stepIndex) => (
                    <Card key={stepIndex} className="bg-gray-800/30 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-white">{step.step}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-white mb-1">{step.title}</h5>
                            <p className="text-gray-300 text-sm">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Trusted</span>{" "}
              <span className="text-gradient">Software Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softwareSolutions.map((software, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">{software.charAt(0)}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">
                    {software}
                  </h3>
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
            Ready to Streamline Your Finances?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Finance & Accounting services can help optimize your financial operations and drive business growth.
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

export default FinanceAccountingServices;
