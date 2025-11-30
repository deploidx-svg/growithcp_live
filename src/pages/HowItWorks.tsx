import { MessageSquare, Settings, Rocket, RefreshCw, Users, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Choose Your Plan',
      description: 'Select the subscription tier that matches your needs. From simple landing pages to full e-commerce sites.',
      details: ['Browse our plans', 'Compare features', 'Select your tier', 'No setup fees'],
    },
    {
      icon: Settings,
      number: '02',
      title: 'Share Requirements',
      description: 'Fill out a simple form with your website requirements, content, and design preferences.',
      details: ['Website purpose', 'Design style', 'Content & features', 'Brand assets'],
    },
    {
      icon: Zap,
      number: '03',
      title: 'We Build Fast',
      description: 'Our team uses Bolt on Replit to build your website rapidly with professional quality.',
      details: ['Instant setup', 'Live preview', 'Real-time progress', 'Quality assurance'],
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch & Deploy',
      description: 'Your website goes live within 24 hours. Full admin access and training provided.',
      details: ['Custom domain', 'SSL certificate', 'Admin dashboard', 'Launch checklist'],
    },
    {
      icon: RefreshCw,
      number: '05',
      title: 'Ongoing Support',
      description: 'Monthly subscription includes updates, maintenance, and support whenever you need it.',
      details: ['Content updates', 'Bug fixes', 'Performance monitoring', 'Priority support'],
    },
  ];

  const technologies = [
    { name: 'React', description: 'Modern UI framework' },
    { name: 'Tailwind CSS', description: 'Beautiful styling' },
    { name: 'TypeScript', description: 'Type-safe code' },
    { name: 'Bolt', description: 'Rapid development' },
    { name: 'Replit', description: 'Cloud deployment' },
    { name: 'Supabase', description: 'Backend & database' },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">How It Works</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From subscription to launch in 24 hours. Here's our proven process.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <GlassCard className="h-full">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-2xl flex items-center justify-center">
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-6xl font-bold text-maroon-700/20 mb-2">
                            {step.number}
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-maroon-500 rounded-full"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative h-80 glass rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/40 to-black flex items-center justify-center">
                        <div className="text-8xl font-bold text-maroon-700/30">{step.number}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-400">Industry-leading tools and frameworks</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <GlassCard key={index} className="text-center">
                <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-maroon-950/40 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Same-Day Delivery?</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Traditional web development takes weeks or months. We leverage cutting-edge tools like Bolt on Replit
                to deliver professional websites in hours, not weeks.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'No waiting weeks for development',
                  'Start marketing immediately',
                  'Test ideas quickly',
                  'Beat competitors to market',
                  'Rapid iteration capability',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 bg-maroon-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <GlassButton variant="primary" href="/subscribe" icon>
                Get Started Now
              </GlassButton>
            </div>

            <GlassCard>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-maroon-400 mb-2">24hrs</div>
                  <p className="text-gray-400">Average delivery time</p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="text-5xl font-bold text-maroon-400 mb-2">100%</div>
                  <p className="text-gray-400">Quality guaranteed</p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="text-5xl font-bold text-maroon-400 mb-2">∞</div>
                  <p className="text-gray-400">Updates & support included</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Launch?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of businesses who chose speed without compromising quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton variant="primary" href="/subscribe" icon>
              Start Your Subscription
            </GlassButton>
            <GlassButton variant="secondary" href="/contact">
              Talk to Sales
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
