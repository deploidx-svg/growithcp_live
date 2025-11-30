import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to build your website? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:contact@growithcp.com" className="text-blue-600 font-semibold hover:text-blue-700">
                contact@growithcp.com
              </a>
            </div>

            <div className="p-8 bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl border border-emerald-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-4">Call us for quick questions</p>
              <a href="tel:+919876543210" className="text-blue-600 font-semibold hover:text-blue-700">
                +91 9876 543 210
              </a>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-50 to-slate-50 rounded-2xl border border-orange-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">Based in multiple cities</p>
              <p className="text-blue-600 font-semibold">Available Worldwide</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Tell Us About Your Project
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Share your vision and requirements. The more details you provide, the better we can tailor our proposal to your needs.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">What happens next?</h3>
                    <ol className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>We review your inquiry and understand your needs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>Schedule a consultation call to discuss your project</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>Send a detailed proposal with timeline and pricing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>Begin building your website with regular updates</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      What type of website do you need? *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="portfolio">Portfolio Website</option>
                      <option value="business">Business Website</option>
                      <option value="ecommerce">E-Commerce Store</option>
                      <option value="branding">Branding Services</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Share your vision, requirements, design preferences, timeline, and any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How soon can you start my project?',
                a: 'We typically start projects within 1-2 weeks of agreement. Urgent projects may be prioritized based on availability.'
              },
              {
                q: 'What information do you need from me?',
                a: 'We need your vision, target audience, any design references, brand guidelines, content, and specific features you want.'
              },
              {
                q: 'Do you offer maintenance after launch?',
                a: 'Yes! We offer ongoing support packages including updates, security patches, and modifications as needed.'
              },
              {
                q: 'Can I own the website code?',
                a: 'Yes, you\'ll have full ownership of your website and can request the code anytime after launch.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
