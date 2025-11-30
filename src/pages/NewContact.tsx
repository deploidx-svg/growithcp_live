import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function NewContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to launch your website? Let's discuss your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                value: 'hello@webdesign.com',
                description: 'Response within 24 hours',
              },
              {
                icon: Phone,
                title: 'Call Us',
                value: '+1 (555) 123-4567',
                description: 'Mon-Fri 9AM-6PM EST',
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'Remote Worldwide',
                description: 'Serving global clients',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <GlassCard key={index} className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-maroon-400 font-semibold mb-1">{contact.value}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </GlassCard>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <GlassCard>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                    >
                      <option value="">Select a service</option>
                      <option value="starter">Starter - Landing Page</option>
                      <option value="business">Business - Multi-page Site</option>
                      <option value="ecommerce">E-Commerce - Online Store</option>
                      <option value="pro">Pro - Advanced Features</option>
                      <option value="enterprise">Enterprise - Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                    >
                      <option value="">Select budget range</option>
                      <option value="starter">₹2,999 - ₹5,999/mo</option>
                      <option value="mid">₹5,999 - ₹9,999/mo</option>
                      <option value="high">₹9,999 - ₹14,999/mo</option>
                      <option value="enterprise">₹14,999+/mo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600 resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
                    />
                  </div>

                  <GlassButton variant="primary" className="w-full justify-center" icon>
                    <Send className="w-5 h-5" />
                    Send Message
                  </GlassButton>
                </form>
              </GlassCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: 'Fast Response',
                    description: 'We respond to all inquiries within 24 hours, often much faster.',
                  },
                  {
                    icon: Phone,
                    title: 'Free Consultation',
                    description: 'Get expert advice on your project with no obligation.',
                  },
                  {
                    icon: Mail,
                    title: 'Custom Solutions',
                    description: 'Every project is unique. We tailor our approach to your needs.',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <GlassCard key={index}>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>

              <GlassCard className="mt-6">
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Monday - Friday</span>
                    <span className="text-maroon-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Saturday</span>
                    <span className="text-maroon-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Emergency support available 24/7 for Pro and Enterprise clients
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-maroon-950/40 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Skip the form and subscribe directly to get started immediately
          </p>
          <GlassButton variant="primary" href="/subscribe" icon>
            Start Your Subscription
          </GlassButton>
        </div>
      </section>
    </div>
  );
}

export default NewContact;
