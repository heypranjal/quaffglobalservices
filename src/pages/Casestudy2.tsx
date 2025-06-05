import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudy2 = () => {
  const solutionPoints = [
    'Global Talent Acquisition for sommelier consultants, app developers, and IoT engineers',
    'Compliance with employment laws in France, UK, US, and Asia',
    'Scalable HR processes for growth',
    'Cross-Cultural Training bridging wine and tech teams',
    'Performance KPIs for diverse roles',
    'International Payroll & Benefits including wine ambassadors'
  ];

  const recruitmentHighlights = [
    'Technical: iOS/Android devs, IoT specialists, data scientists',
    'Industry Experts: Sommeliers, wine consultants, oenologists',
    'Biz Dev: Sales for restaurant/hospitality sectors',
    'Marketing: Content creators with wine/digital fluency'
  ];

  const results = [
    '25+ hires in 8 countries within 6 months',
    'Reduced time-to-hire from 45 to 18 days',
    '95% candidate retention rate',
    'Compliance in 4 new markets',
    'Diverse team with 12 nationalities'
  ];

  const achievements = [
    'Zero compliance issues',
    'Standardized onboarding cut training time by 40%',
    'Performance review system raised employee satisfaction by 30%',
    'Built a global-ready talent pipeline'
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Case Study:</span>{" "}
            <span className="text-gradient">HR & Staffing Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Helping Aveine build a globally compliant and diverse team to support their innovative wine-tech expansion.
          </p>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client: Aveine – Connected Wine Technology</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed">
            Aveine is the creator of the world's first connected wine aerator. Their mobile app includes over 10,000 wine references and recommendations on grape variety, origin, and optimal serving temperatures.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Challenge</h2>
          <p className="text-gray-300 max-w-4xl leading-relaxed">
            Aveine needed to navigate cross-border hiring, manage employment law compliance, and build synergy between diverse teams from tech, wine, and marketing domains.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutionPoints.map((point, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  ✅ {point}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Highlights */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Recruitment Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {recruitmentHighlights.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  🧩 {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {results.map((result, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  ✅ {result}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((item, idx) => (
              <Card key={idx} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 text-gray-300 text-left text-lg">
                  ⭐ {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need Help Scaling Your Team Globally?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build a high-performing, compliant, and culturally aligned workforce for your business.
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold hover-glow"
            onClick={() => (window.location.href = '/contact-us')}
          >
            Talk to Our HR Experts
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy2;
