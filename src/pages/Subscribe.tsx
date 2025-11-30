import { useState } from 'react';
import { Check, CreditCard, Shield } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState('business');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    requirements: '',
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '₹2,999',
      features: ['Landing Page', 'Up to 3 sections', 'Mobile responsive', 'Basic SEO', '48hr delivery'],
    },
    {
      id: 'business',
      name: 'Business',
      price: '₹5,999',
      features: ['Multi-page site', 'Up to 5 pages', 'Contact forms', 'Analytics', 'Same-day delivery'],
      popular: true,
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      price: '₹9,999',
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Inventory', 'Same-day delivery'],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹14,999',
      features: ['Custom features', 'API integrations', 'Advanced SEO', 'Priority support', 'Same-day delivery'],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited pages', 'Custom design', 'Dedicated support', 'SLA guarantee', 'Priority delivery'],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription request:', { plan: selectedPlan, ...formData });
    alert('Thank you for subscribing! Our team will contact you shortly.');
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Start Your Subscription</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your plan and get your website delivered today
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.slice(0, 3).map((plan) => (
              <GlassCard
                key={plan.id}
                className={`cursor-pointer ${
                  selectedPlan === plan.id ? 'ring-2 ring-maroon-600 bg-maroon-950/30' : ''
                } ${plan.popular ? 'lg:scale-105' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-maroon-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl rounded-tr-xl">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedPlan === plan.id
                        ? 'border-maroon-600 bg-maroon-600'
                        : 'border-gray-600'
                    }`}
                  >
                    {selectedPlan === plan.id && (
                      <Check className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
                <div className="text-4xl font-bold text-maroon-400 mb-6">{plan.price}/mo</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-maroon-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6">Your Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
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
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-maroon-600 resize-none"
                    placeholder="Tell us about your website needs, design preferences, features, content, etc."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 glass-dark rounded-lg">
                  <Shield className="w-6 h-6 text-maroon-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Secure & Safe:</strong> Your information is encrypted and never shared with third parties.
                    </p>
                  </div>
                </div>

                <GlassButton variant="primary" className="w-full justify-center" icon>
                  <CreditCard className="w-5 h-5" />
                  Complete Subscription
                </GlassButton>

                <p className="text-center text-sm text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
