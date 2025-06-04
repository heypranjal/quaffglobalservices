import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudy2 = () => {
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

      {/* Details Section */}
      <section className="py-12 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-5xl space-y-8">

          {/* Client Overview */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-gray-300">
              <h2 className="text-2xl font-bold text-white mb-2">Client: Aveine - Connected Wine Technology</h2>
              <p>
                Aveine is the creator of the world's first connected wine aerator, with a mobile application offering precise wine aeration recommendations. The app includes over 10,000 wine references and technical data including origin, grape varieties, and optimal serving temperatures.
              </p>
            </CardContent>
          </Card>

          {/* Challenge */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2">Challenge</h3>
              <p>
                Aveine faced global HR hurdles such as recruiting across borders, managing legal compliance in multiple countries, and uniting a culturally diverse team from different domains like tech, wine, and marketing.
              </p>
            </CardContent>
          </Card>

          {/* Our Solution */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2">Our Solution</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Global Talent Acquisition for sommelier consultants, app developers, and IoT engineers</li>
                <li>Compliance with employment laws in France, UK, US, and Asia</li>
                <li>Scalable HR processes for growth</li>
                <li>Cross-Cultural Training bridging wine and tech teams</li>
                <li>Performance KPIs for diverse roles</li>
                <li>International Payroll & Benefits including wine ambassadors</li>
              </ul>
            </CardContent>
          </Card>

          {/* Recruitment Highlights */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2">Recruitment Highlights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Technical: iOS/Android devs, IoT specialists, data scientists</li>
                <li>Industry Experts: Sommeliers, wine consultants, oenologists</li>
                <li>Biz Dev: Sales for restaurant/hospitality sectors</li>
                <li>Marketing: Content creators with wine/digital fluency</li>
              </ul>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>25+ hires in 8 countries within 6 months</li>
                <li>Reduced time-to-hire from 45 to 18 days</li>
                <li>95% candidate retention rate</li>
                <li>Compliance in 4 new markets</li>
                <li>Diverse team with 12 nationalities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8 text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Zero compliance issues</li>
                <li>Standardized onboarding cut training time by 40%</li>
                <li>Performance review system raised employee satisfaction by 30%</li>
                <li>Built a global-ready talent pipeline</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-brand-dark">
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
