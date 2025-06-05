import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    let result = {};
    try {
      result = await response.json();
    } catch (jsonError) {
      console.warn('Empty or invalid JSON response');
    }

    if (response.ok && (result as any).success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        address: '',
        message: '',
      });
    } else {
      toast({
        title: "Failed to send",
        description: (result as any).error || "Something went wrong.",
        variant: "destructive",
      });
    }
  } catch (err) {
    console.error('Client error:', err);
    toast({
      title: "Error",
      description: "Unable to send message. Please try again later.",
      variant: "destructive",
    });
  }
};


  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-text-light/80 mb-8">
            Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-text-light/80 text-lg mb-8">
              We're here to help you succeed. Reach out to us through any of the channels below or fill out the contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-text-light/80">info@quaffglobalservices.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-text-light/80">+91 9999293689</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                  <p className="text-text-light/80">
                    Amity Innovation center,<br />
                    Sector-125,<br />
                    Noida, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
              <CardDescription className="text-text-light/80">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Your phone number"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">Service Interest *</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange} required>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="it-software" className="text-white">IT & Software Development</SelectItem>
                      <SelectItem value="bpo" className="text-white">Business Process Outsourcing</SelectItem>
                      <SelectItem value="digital-creative" className="text-white">Digital & Creative Services</SelectItem>
                      <SelectItem value="technical-professional" className="text-white">Technical & Professional Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-white">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Your address (optional)"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or how we can help..."
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
