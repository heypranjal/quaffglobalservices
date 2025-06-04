
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DataEntryManagement = () => {
  

  const crmSteps = [
    {
      number: "1",
      title: "Data Assessment",
      description: "Analyze current CRM data quality and identify gaps"
    },
    {
      number: "2",
      title: "Data Collection",
      description: "Gather customer information from multiple sources"
    },
    {
      number: "3",
      title: "Validation & Entry",
      description: "Verify accuracy and update CRM records systematically"
    },
    {
      number: "4",
      title: "Quality Control",
      description: "Review updates and ensure data consistency"
    }
  ];

  const spreadsheetSteps = [
    {
      number: "1",
      title: "Structure Review",
      description: "Evaluate current spreadsheet organization and efficiency"
    },
    {
      number: "2",
      title: "Data Entry",
      description: "Input new data and update existing records"
    },
    {
      number: "3",
      title: "Formula Optimization",
      description: "Update formulas and automate calculations"
    },
    {
      number: "4",
      title: "Format & Validate",
      description: "Apply consistent formatting and verify accuracy"
    }
  ];

  const archivingSteps = [
    {
      number: "1",
      title: "Document Inventory",
      description: "Catalog and prioritize documents for digitization"
    },
    {
      number: "2",
      title: "Scanning & Capture",
      description: "High-quality scanning with OCR processing"
    },
    {
      number: "3",
      title: "Indexing & Tagging",
      description: "Organize files with searchable metadata"
    },
    {
      number: "4",
      title: "Storage & Access",
      description: "Secure cloud storage with easy retrieval systems"
    }
  ];

  const cleansingSteps = [
    {
      number: "1",
      title: "Quality Assessment",
      description: "Identify data issues, duplicates, and inconsistencies"
    },
    {
      number: "2",
      title: "Data Standardization",
      description: "Apply consistent formats and naming conventions"
    },
    {
      number: "3",
      title: "Error Correction",
      description: "Fix inaccuracies and remove duplicate entries"
    },
    {
      number: "4",
      title: "Validation & Report",
      description: "Verify improvements and provide quality metrics"
    }
  ];

  const ProcessSteps = ({ steps, title }: { steps: typeof crmSteps; title: string }) => (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">{step.number}</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">📊 Data Entry &</span>{" "}
            <span className="text-gradient">Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your raw data into valuable business insights with our comprehensive data solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{stat.emoji}</div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CRM Updates Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CRM Updates & Management</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Keep your customer database current and actionable with our comprehensive CRM data management services. We ensure accurate customer information, lead tracking, and seamless data integration.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={crmSteps} title="🔄 Our CRM Update Process" />
        </div>
      </section>

      {/* Spreadsheet Maintenance Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">📈</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Spreadsheet Maintenance</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Optimize your spreadsheet workflows with professional maintenance services. We handle data entry, formula updates, formatting, and ensure your spreadsheets remain accurate and functional.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={spreadsheetSteps} title="📊 Our Spreadsheet Process" />
        </div>
      </section>

      {/* Digital Archiving Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🗄️</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Archiving</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your physical documents into organized digital archives. We provide secure scanning, indexing, and storage solutions that make your historical data easily accessible and searchable.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={archivingSteps} title="📁 Our Archiving Process" />
        </div>
      </section>

      {/* Data Cleansing Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🧹</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Data Cleansing & Validation</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Improve data quality with our comprehensive cleansing services. We identify and correct errors, remove duplicates, standardize formats, and ensure your data meets the highest quality standards.
              </p>
            </div>
          </div>
          
          <ProcessSteps steps={cleansingSteps} title="✨ Our Data Cleansing Process" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose Our</span>{" "}
              <span className="text-gradient">Data Services?</span>
            </h2>
          </div>

          <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 hover-glow group text-center max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                Precision & Accuracy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                99.9% accuracy rate with rigorous quality control processes and multiple validation checkpoints.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Data Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our data entry and management services can help streamline your operations and improve data quality.
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

export default DataEntryManagement;
