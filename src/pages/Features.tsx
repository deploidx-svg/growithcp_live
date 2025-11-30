import { Zap, Smartphone, Search, Shield, Gauge, Code, Palette, Database, Cloud, Lock, BarChart, Headphones } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized code and modern architecture ensure blazing fast load times.',
      benefits: ['< 2s load time', 'Optimized assets', 'CDN delivery', 'Lazy loading'],
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Fully responsive layouts that look perfect on every device.',
      benefits: ['Touch-optimized', 'Responsive images', 'Mobile navigation', 'Cross-browser'],
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built with best practices to rank higher in search results.',
      benefits: ['Meta tags', 'Semantic HTML', 'Sitemap', 'Schema markup'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your data.',
      benefits: ['SSL encryption', 'DDoS protection', 'Regular updates', 'Secure hosting'],
    },
    {
      icon: Gauge,
      title: 'Performance Monitoring',
      description: 'Real-time analytics and performance tracking.',
      benefits: ['Uptime monitoring', 'Speed reports', 'Error tracking', 'User analytics'],
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Professional, maintainable code following industry standards.',
      benefits: ['TypeScript', 'Best practices', 'Documentation', 'Version control'],
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Unique designs tailored to your brand identity.',
      benefits: ['Brand colors', 'Custom layouts', 'Logo integration', 'Style guide'],
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Scalable database solutions for dynamic content.',
      benefits: ['Supabase DB', 'Real-time sync', 'API access', 'Data backup'],
    },
    {
      icon: Cloud,
      title: 'Cloud Hosting',
      description: 'Reliable cloud infrastructure with 99.9% uptime.',
      benefits: ['Global CDN', 'Auto-scaling', 'Daily backups', 'Fast deployment'],
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      description: 'Privacy-focused features compliant with regulations.',
      benefits: ['Cookie consent', 'Privacy policy', 'Data protection', 'User rights'],
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into your website performance.',
      benefits: ['Visitor stats', 'Conversion tracking', 'Heat maps', 'A/B testing'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always available to help with any questions or issues.',
      benefits: ['Live chat', 'Email support', 'Video tutorials', 'Documentation'],
    },
  ];

  const packages = [
    {
      title: 'Starter Features',
      items: ['Responsive Design', 'Basic SEO', 'Contact Form', 'Social Links', 'Fast Hosting'],
    },
    {
      title: 'Business Features',
      items: ['Everything in Starter', 'Analytics', 'Custom Domain', 'Email Integration', 'Blog System'],
    },
    {
      title: 'E-Commerce Features',
      items: ['Everything in Business', 'Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Powerful Features</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Everything you need for a professional, high-performing website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <GlassCard key={index}>
                  <div className="w-14 h-14 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-maroon-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Features by Plan</h2>
            <p className="text-xl text-gray-400">See what's included in each subscription tier</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <GlassCard key={index}>
                <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                  {pkg.title}
                </h3>
                <ul className="space-y-4">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-maroon-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-maroon-950/40 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">All Features Included</h2>
          <p className="text-xl text-gray-400 mb-8">
            No hidden costs. No surprise fees. Everything you need is included in your subscription.
          </p>
          <GlassButton variant="primary" href="/pricing" icon>
            View Pricing Plans
          </GlassButton>
        </div>
      </section>
    </div>
  );
}

export default Features;
