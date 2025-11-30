import { Zap, Shield, Clock, TrendingUp, Check, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function NewHome() {
  const features = [
    {
      icon: Zap,
      title: 'Same-Day Delivery',
      description: 'Your website built and deployed within hours, not weeks.',
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Professional designs built with modern technology stack.',
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: 'Monthly subscription includes updates and maintenance.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Upgrade anytime as your business grows.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Websites Delivered' },
    { value: '24hrs', label: 'Average Delivery' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,32,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-maroon-400" />
            <span className="text-sm font-medium text-maroon-300">Powered by Bolt on Replit</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-maroon-200 to-maroon-400 bg-clip-text text-transparent leading-tight">
            Same-Day Website<br />Delivery
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional websites delivered in hours. No setup fees. No long-term contracts.
            <span className="block mt-2 text-maroon-300 font-semibold">Just beautiful websites on demand.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <GlassButton variant="primary" href="#pricing" icon>
              View Plans & Pricing
            </GlassButton>
            <GlassButton variant="secondary" href="/how-it-works">
              See How It Works
            </GlassButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <GlassCard key={index} hover={false} className="text-center">
                <div className="text-4xl font-bold text-maroon-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Why Choose Us?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fast, professional, and hassle-free website delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <GlassCard key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-maroon-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Simple Process</h2>
            <p className="text-xl text-gray-400">From idea to launch in 24 hours</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Plan',
                description: 'Select the subscription tier that fits your needs.',
              },
              {
                step: '02',
                title: 'Share Requirements',
                description: 'Tell us your vision, content, and design preferences.',
              },
              {
                step: '03',
                title: 'Get Your Website',
                description: 'Receive your fully built website within 24 hours.',
              },
            ].map((item, index) => (
              <GlassCard key={index}>
                <div className="text-6xl font-bold text-maroon-700/30 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Subscription Plans</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple monthly pricing. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: 'Starter',
                price: '₹2,999',
                description: 'Perfect for personal websites',
                features: ['Landing Page', 'Up to 3 sections', 'Mobile responsive', 'Basic SEO', '48hr delivery'],
              },
              {
                name: 'Business',
                price: '₹5,999',
                description: 'For small businesses',
                features: ['Multi-page site', 'Up to 5 pages', 'Contact forms', 'Analytics', 'Same-day delivery'],
                popular: true,
              },
              {
                name: 'E-Commerce',
                price: '₹9,999',
                description: 'Start selling online',
                features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Inventory', 'Same-day delivery'],
              },
              {
                name: 'Pro',
                price: '₹14,999',
                description: 'Advanced features',
                features: ['Custom features', 'API integrations', 'Advanced SEO', 'Priority support', 'Same-day delivery'],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'Tailored solutions',
                features: ['Unlimited pages', 'Custom design', 'Dedicated support', 'SLA guarantee', 'Priority delivery'],
              },
            ].map((plan, index) => (
              <GlassCard
                key={index}
                className={`${
                  plan.popular ? 'ring-2 ring-maroon-600 bg-maroon-950/20' : ''
                } flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-maroon-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl rounded-tr-xl">
                    Popular
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-maroon-400 mb-2">{plan.price}</div>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-5 h-5 text-maroon-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <GlassButton variant="outline" href="/subscribe" className="w-full justify-center">
                  Subscribe
                </GlassButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-maroon-950/40 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(128,0,32,0.15),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Ready to Launch?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your professional website delivered today. No setup fees, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton variant="primary" href="/subscribe" icon>
              Start Your Subscription
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

export default NewHome;
