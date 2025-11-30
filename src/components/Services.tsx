import { User, Briefcase, ShoppingCart, Palette, Check } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Portfolio Websites',
    description: 'Showcase your work professionally. We design and build a clean, modern portfolio that represents your personal brand.',
    color: 'blue',
    features: ['Professional design', 'Project showcases', 'Contact forms', 'Mobile responsive']
  },
  {
    icon: Briefcase,
    title: 'Business Websites',
    description: 'For startups, agencies, shops, freelancers, and professionals. We create websites that convert visitors into clients.',
    color: 'emerald',
    features: ['Professional layouts', 'Service pages', 'Team sections', 'SEO optimized']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Sites',
    description: 'Sell online confidently. We build fully functional e-commerce sites with secure checkout and payment processing.',
    color: 'orange',
    features: ['Product catalogs', 'Secure checkout', 'Payment integration', 'Order management']
  },
  {
    icon: Palette,
    title: 'Branding Services',
    description: 'Need a complete brand? We provide logos, color schemes, visual assets, and professional copy—all designed for your site.',
    color: 'amber',
    features: ['Custom logo design', 'Brand colors & style', 'Visual assets', 'Professional copy']
  }
];

function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive website solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              emerald: 'from-emerald-500 to-emerald-600',
              orange: 'from-orange-500 to-orange-600',
              amber: 'from-amber-500 to-amber-600'
            };

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
