import { Check, Star } from 'lucide-react';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '79',
      period: 'month',
      description: 'Perfect for portfolios and small personal websites.',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Hosting included',
        '30-day support'
      ],
      highlighted: false
    },
    {
      name: 'Business',
      price: '699',
      period: 'month',
      description: 'Ideal for companies, services, and growing brands.',
      features: [
        'Up to 15 pages',
        'Advanced design',
        'Full SEO optimization',
        'Custom features',
        'Premium hosting',
        'Priority support',
        'Analytics setup',
        'Social integration'
      ],
      highlighted: true
    },
    {
      name: 'E-Commerce',
      price: '1,999',
      period: 'month',
      description: 'For online shops, products, and selling.',
      features: [
        'Unlimited products',
        'Payment gateway',
        'Shopping cart',
        'Order management',
        'Inventory system',
        'Customer accounts',
        'Premium hosting',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, transparent pricing. No setup costs. Everything included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.highlighted ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-8 rounded-2xl shadow-md border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Custom Projects
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Bigger needs? We create tailored plans for enterprises and unique requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
          >
            Contact for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
