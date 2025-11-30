import { Clock, Award, DollarSign, RefreshCw } from 'lucide-react';

function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround using efficient processes and internal tools.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Expert engineers handle every detail. No compromises.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Built efficiently to keep costs low, without cutting corners.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: RefreshCw,
      title: 'Always Updatable',
      description: 'Need changes later? We\'ll update it for you. No DIY required.',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5))] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The perfect blend of technology and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-xl mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {reason.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
