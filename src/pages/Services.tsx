import { User, Briefcase, ShoppingCart, Palette, Check, ArrowRight } from 'lucide-react';

const serviceDetails = [
  {
    icon: User,
    title: 'Portfolio Websites',
    description: 'Showcase your work professionally with a stunning digital portfolio.',
    color: 'blue',
    features: [
      'Professional design tailored to your style',
      'Project showcases with detailed case studies',
      'Contact forms and inquiry management',
      'Mobile responsive design',
      'Fast loading performance',
      'SEO optimized for discoverability'
    ],
    idealFor: 'Creatives, designers, artists, photographers, developers',
    timeline: '1-2 weeks',
    startingPrice: '₹79/month'
  },
  {
    icon: Briefcase,
    title: 'Business Websites',
    description: 'Professional websites that convert visitors into clients.',
    color: 'emerald',
    features: [
      'Custom business design',
      'Service pages and pricing displays',
      'Team member showcases',
      'Client testimonials sections',
      'SEO optimization for local search',
      'Integration with business tools'
    ],
    idealFor: 'Startups, agencies, freelancers, service providers',
    timeline: '2-3 weeks',
    startingPrice: '₹699/month'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Sites',
    description: 'Fully functional online stores with secure payment processing.',
    color: 'orange',
    features: [
      'Product catalog management',
      'Secure shopping cart system',
      'Multiple payment gateway options',
      'Order and inventory management',
      'Customer account system',
      'Sales analytics and reporting'
    ],
    idealFor: 'Online retailers, product sellers, digital commerce',
    timeline: '3-4 weeks',
    startingPrice: '₹1,999/month'
  },
  {
    icon: Palette,
    title: 'Branding Services',
    description: 'Complete branding solutions integrated with your website.',
    color: 'amber',
    features: [
      'Custom logo design',
      'Brand color palette development',
      'Visual asset creation',
      'Professional copywriting',
      'Brand guidelines document',
      'Social media asset templates'
    ],
    idealFor: 'New businesses, rebranding projects, startups',
    timeline: '1-2 weeks',
    startingPrice: 'Custom pricing'
  }
];

function Services() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive website solutions tailored to your business needs. From portfolios to e-commerce, we build it all.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                blue: { icon: 'bg-blue-600', light: 'from-blue-50 to-slate-50', border: 'border-blue-200' },
                emerald: { icon: 'bg-emerald-600', light: 'from-emerald-50 to-slate-50', border: 'border-emerald-200' },
                orange: { icon: 'bg-orange-600', light: 'from-orange-50 to-slate-50', border: 'border-orange-200' },
                amber: { icon: 'bg-amber-600', light: 'from-amber-50 to-slate-50', border: 'border-amber-200' }
              };

              const colors = colorClasses[service.color as keyof typeof colorClasses];

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br ${colors.light} border ${colors.border}`}
                >
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-2xl mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-700 mb-2">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More & Get Started
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Ideal For</p>
                        <p className="text-lg text-slate-900">{service.idealFor}</p>
                      </div>

                      <div className="border-t border-slate-200 pt-6">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Timeline</p>
                        <p className="text-lg text-slate-900">{service.timeline}</p>
                      </div>

                      <div className="border-t border-slate-200 pt-6">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Starting From</p>
                        <p className="text-2xl font-bold text-blue-600">{service.startingPrice}</p>
                      </div>

                      <div className="border-t border-slate-200 pt-6">
                        <h4 className="font-semibold text-slate-900 mb-3">All Features Include</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Not sure which service is right for you?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project. We'll recommend the perfect solution tailored to your needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
