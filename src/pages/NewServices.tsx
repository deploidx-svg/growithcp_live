import { Layout, Store, Briefcase, Palette, Check } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function NewServices() {
  const services = [
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'High-converting single-page websites designed to capture leads and drive action.',
      price: '₹2,999',
      features: [
        'Hero section with CTA',
        'Features showcase',
        'Testimonials section',
        'Contact form',
        'Mobile responsive',
        'SEO optimized',
        '48-hour delivery',
        'Unlimited revisions',
      ],
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Briefcase,
      title: 'Business Websites',
      description: 'Professional multi-page websites for businesses, agencies, and service providers.',
      price: '₹5,999',
      features: [
        'Up to 5 custom pages',
        'Services/products pages',
        'About & team pages',
        'Blog integration',
        'Contact forms',
        'Google Analytics',
        'Same-day delivery',
        'Ongoing support',
      ],
      color: 'from-maroon-600 to-maroon-800',
      popular: true,
    },
    {
      icon: Store,
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores with shopping cart, payments, and inventory management.',
      price: '₹9,999',
      features: [
        'Product catalog',
        'Shopping cart',
        'Payment gateway',
        'Order management',
        'Inventory system',
        'Customer accounts',
        'Admin dashboard',
        'Same-day delivery',
      ],
      color: 'from-emerald-600 to-emerald-800',
    },
    {
      icon: Palette,
      title: 'Custom Solutions',
      description: 'Tailored web applications and unique features built to your exact specifications.',
      price: 'Custom',
      features: [
        'Custom functionality',
        'API integrations',
        'Database design',
        'Admin panels',
        'User authentication',
        'Advanced features',
        'Dedicated support',
        'Priority delivery',
      ],
      color: 'from-orange-600 to-orange-800',
    },
  ];

  const addOns = [
    {
      title: 'SEO Package',
      price: '₹1,999/mo',
      features: ['Keyword research', 'On-page optimization', 'Monthly reports'],
    },
    {
      title: 'Content Writing',
      price: '₹2,999/mo',
      features: ['Professional copywriting', '10 pages/month', 'SEO optimized'],
    },
    {
      title: 'Maintenance Plus',
      price: '₹999/mo',
      features: ['Priority updates', 'Performance monitoring', '24/7 support'],
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Professional websites delivered fast. Choose the service that fits your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlassCard
                  key={index}
                  className={`${service.popular ? 'ring-2 ring-maroon-600' : ''} relative`}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-maroon-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl rounded-tr-xl">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-maroon-400">{service.price}</div>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-maroon-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <GlassButton variant="primary" href="/subscribe" className="w-full justify-center" icon>
                    Get Started
                  </GlassButton>
                </GlassCard>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-400">Enhance your website with optional extras</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <GlassCard key={index}>
                <h3 className="text-xl font-bold text-white mb-2">{addon.title}</h3>
                <div className="text-2xl font-bold text-maroon-400 mb-6">{addon.price}</div>
                <ul className="space-y-2">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-maroon-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Fast Delivery',
                    description: 'Most websites delivered within 24 hours using Bolt on Replit.',
                  },
                  {
                    title: 'Professional Quality',
                    description: 'Built by experienced developers using modern technology.',
                  },
                  {
                    title: 'Full Support',
                    description: 'Monthly subscription includes updates, hosting, and support.',
                  },
                  {
                    title: 'No Hidden Costs',
                    description: 'Transparent pricing with no setup fees or surprise charges.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 bg-maroon-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  'Professional design',
                  'Mobile responsive',
                  'SEO optimization',
                  'Cloud hosting',
                  'SSL certificate',
                  'Regular backups',
                  'Security updates',
                  'Unlimited support',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-maroon-500" />
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
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose your service and launch your website today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton variant="primary" href="/subscribe" icon>
              Subscribe Now
            </GlassButton>
            <GlassButton variant="secondary" href="/contact">
              Contact Sales
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewServices;
