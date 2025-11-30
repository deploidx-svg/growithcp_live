import { Users, Zap, Shield } from 'lucide-react';

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About GrowithCP
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of professional engineers who specialize in creating exceptional websites for your business.
            You focus on your vision. We handle everything else—design, development, deployment, and ongoing support.
            <span className="block text-slate-500 text-lg mt-4">Built affordably, delivered fast, and kept secure.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Your Dedicated Team</h3>
            <p className="text-slate-600 leading-relaxed">
              Expert engineers handle every aspect of your website. You don't build it—we do.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-100 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Fast Delivery</h3>
            <p className="text-slate-600 leading-relaxed">
              Our engineers use advanced tools internally to deliver your website quickly and affordably.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 to-slate-50 border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Secure & Scalable</h3>
            <p className="text-slate-600 leading-relaxed">
              Built with best practices. Your website grows with your business.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700 font-medium">
            We work on everything from personal portfolios to full business and e-commerce websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
