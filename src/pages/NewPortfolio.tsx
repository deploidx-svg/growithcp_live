import { ExternalLink, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function NewPortfolio() {
  const projects = [
    {
      title: 'Tech Startup Landing',
      category: 'Landing Page',
      description: 'Modern SaaS landing page with animated sections and lead capture.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=800&h=600&fit=crop',
      deliveryTime: '16 hours',
      plan: 'Starter',
      features: ['React', 'Tailwind CSS', 'Animations', 'Mobile Responsive'],
    },
    {
      title: 'Fashion E-Commerce',
      category: 'E-Commerce',
      description: 'Complete online store with 200+ products, cart, and secure checkout.',
      image: 'https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?w=800&h=600&fit=crop',
      deliveryTime: '24 hours',
      plan: 'E-Commerce',
      features: ['Product Catalog', 'Payment Gateway', 'Admin Panel', 'Inventory'],
    },
    {
      title: 'Restaurant Website',
      category: 'Business',
      description: 'Multi-page site with menu, reservations, and online ordering.',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=800&h=600&fit=crop',
      deliveryTime: '20 hours',
      plan: 'Business',
      features: ['Menu Display', 'Booking System', 'Photo Gallery', 'SEO'],
    },
    {
      title: 'Real Estate Platform',
      category: 'Pro',
      description: 'Property listings with advanced search, filters, and agent dashboard.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?w=800&h=600&fit=crop',
      deliveryTime: '12 hours',
      plan: 'Pro',
      features: ['Custom Search', 'Database', 'Maps Integration', 'CRM'],
    },
    {
      title: 'Creative Agency Portfolio',
      category: 'Business',
      description: 'Stunning portfolio showcasing projects with case studies.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=800&h=600&fit=crop',
      deliveryTime: '18 hours',
      plan: 'Business',
      features: ['Portfolio Grid', 'Case Studies', 'Team Page', 'Contact'],
    },
    {
      title: 'Fitness Studio Website',
      category: 'Business',
      description: 'Class schedules, trainer profiles, and membership signup.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?w=800&h=600&fit=crop',
      deliveryTime: '22 hours',
      plan: 'Business',
      features: ['Class Calendar', 'Booking', 'Trainer Bios', 'Testimonials'],
    },
  ];

  const categories = ['All', 'Landing Page', 'Business', 'E-Commerce', 'Pro'];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Real websites delivered within 24 hours. See what we've built for our clients.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="glass px-6 py-2 rounded-lg text-white hover:bg-white/20 transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <GlassCard key={index} className="group overflow-hidden p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm text-white">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-maroon-400" />
                    <span className="text-sm text-white font-semibold">{project.deliveryTime}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-maroon-400 transition-colors" />
                  </div>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4 pb-4 border-b border-white/10">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Plan:</span>
                    <span className="ml-2 text-sm text-maroon-400 font-semibold">{project.plan}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/5 text-gray-400 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <GlassCard className="text-center">
              <div className="text-5xl font-bold text-maroon-400 mb-2">100+</div>
              <p className="text-gray-400">Websites Delivered</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-5xl font-bold text-maroon-400 mb-2">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-5xl font-bold text-maroon-400 mb-2">24hrs</div>
              <p className="text-gray-400">Average Delivery</p>
            </GlassCard>
          </div>

          <GlassCard className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-gray-400 mb-6">
              Get your professional website delivered in 24 hours
            </p>
            <GlassButton variant="primary" href="/subscribe" icon>
              Start Your Project
            </GlassButton>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}

export default NewPortfolio;
