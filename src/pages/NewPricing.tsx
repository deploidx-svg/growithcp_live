import { Check, Star, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function NewPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      description: 'Perfect for personal projects and simple websites',
      features: [
        'Landing page website',
        'Up to 3 sections',
        'Mobile responsive',
        'Basic SEO setup',
        'Contact form',
        'Social links',
        'Fast hosting',
        '48-hour delivery',
        'Email support',
      ],
      limitations: ['Limited customization', 'Basic analytics'],
    },
    {
      name: 'Business',
      price: '₹5,999',
      description: 'Ideal for small businesses and startups',
      features: [
        'Multi-page website',
        'Up to 5 custom pages',
        'Advanced design',
        'Full SEO optimization',
        'Contact & inquiry forms',
        'Google Analytics',
        'Blog integration',
        'Same-day delivery',
        'Priority email support',
      ],
      popular: true,
    },
    {
      name: 'E-Commerce',
      price: '₹9,999',
      description: 'Complete online store solution',
      features: [
        'Full e-commerce site',
        'Unlimited products',
        'Shopping cart',
        'Payment gateway',
        'Order management',
        'Inventory system',
        'Customer accounts',
        'Admin dashboard',
        'Same-day delivery',
        'Priority support',
      ],
    },
    {
      name: 'Pro',
      price: '₹14,999',
      description: 'Advanced features for growing businesses',
      features: [
        'Everything in Business',
        'Custom functionality',
        'API integrations',
        'Advanced analytics',
        'A/B testing',
        'Multi-language support',
        'Custom admin panel',
        'Priority delivery (12hrs)',
        'Dedicated support',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Pro',
        'Unlimited pages',
        'Custom design system',
        'Enterprise integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'White-label option',
        'Priority delivery (6hrs)',
        '24/7 phone support',
      ],
      enterprise: true,
    },
  ];

  const comparison = [
    { feature: 'Delivery Time', starter: '48hrs', business: '24hrs', ecommerce: '24hrs', pro: '12hrs', enterprise: '6hrs' },
    { feature: 'Pages Included', starter: '1', business: '5', ecommerce: '10+', pro: '15+', enterprise: 'Unlimited' },
    { feature: 'Revisions', starter: '3', business: 'Unlimited', ecommerce: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Custom Design', starter: false, business: true, ecommerce: true, pro: true, enterprise: true },
    { feature: 'E-Commerce', starter: false, business: false, ecommerce: true, pro: true, enterprise: true },
    { feature: 'API Integration', starter: false, business: false, ecommerce: false, pro: true, enterprise: true },
    { feature: 'Dedicated Support', starter: false, business: false, ecommerce: false, pro: true, enterprise: true },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Simple Pricing</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Monthly subscriptions. Cancel anytime. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {plans.map((plan, index) => (
              <GlassCard
                key={index}
                className={`flex flex-col ${
                  plan.popular ? 'ring-2 ring-maroon-600 lg:scale-105 bg-maroon-950/20' : ''
                } ${plan.enterprise ? 'ring-2 ring-orange-600' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-maroon-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Popular
                  </div>
                )}

                {plan.enterprise && (
                  <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Enterprise
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-maroon-400">{plan.price}</div>
                    {plan.price !== 'Custom' && (
                      <p className="text-sm text-gray-500">per month</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-5 h-5 text-maroon-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && (
                    <div className="border-t border-white/10 pt-4 mb-6">
                      <p className="text-xs text-gray-500 mb-2">Limitations:</p>
                      {plan.limitations.map((limitation, idx) => (
                        <p key={idx} className="text-xs text-gray-600">
                          • {limitation}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <GlassButton
                  variant={plan.popular ? 'primary' : 'outline'}
                  href={plan.enterprise ? '/contact' : '/subscribe'}
                  className="w-full justify-center"
                >
                  {plan.enterprise ? 'Contact Sales' : 'Subscribe'}
                </GlassButton>
              </GlassCard>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Compare Plans</h2>
            <GlassCard>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">Business</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">E-Commerce</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">Pro</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <Check className="w-5 h-5 text-maroon-500 mx-auto" />
                            ) : (
                              <span className="text-gray-600">-</span>
                            )
                          ) : (
                            row.starter
                          )}
                        </td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {typeof row.business === 'boolean' ? (
                            row.business ? (
                              <Check className="w-5 h-5 text-maroon-500 mx-auto" />
                            ) : (
                              <span className="text-gray-600">-</span>
                            )
                          ) : (
                            row.business
                          )}
                        </td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {typeof row.ecommerce === 'boolean' ? (
                            row.ecommerce ? (
                              <Check className="w-5 h-5 text-maroon-500 mx-auto" />
                            ) : (
                              <span className="text-gray-600">-</span>
                            )
                          ) : (
                            row.ecommerce
                          )}
                        </td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <Check className="w-5 h-5 text-maroon-500 mx-auto" />
                            ) : (
                              <span className="text-gray-600">-</span>
                            )
                          ) : (
                            row.pro
                          )}
                        </td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <Check className="w-5 h-5 text-maroon-500 mx-auto" />
                            ) : (
                              <span className="text-gray-600">-</span>
                            )
                          ) : (
                            row.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-4">All Plans Include</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  'Professional design',
                  'Mobile responsive',
                  'SEO optimization',
                  'Cloud hosting',
                  'SSL certificate',
                  'Regular backups',
                  'Security updates',
                  'Email support',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-maroon-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-maroon-950/40 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose your plan and get your website delivered today
          </p>
          <GlassButton variant="primary" href="/subscribe" icon>
            Start Your Subscription
          </GlassButton>
        </div>
      </section>
    </div>
  );
}

export default NewPricing;
