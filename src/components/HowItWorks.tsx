import { MessageSquare, Cpu, Rocket } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'You Share Your Vision',
      description: 'Tell us what you need. Pages, features, design style, brand details—whatever you have in mind.',
      details: ['Your website idea', 'Design preferences', 'Required features', 'Business goals']
    },
    {
      icon: Cpu,
      title: 'Our Engineers Build It',
      description: 'Our team of professional engineers designs and builds your complete website. We handle all the technical work, using advanced tools internally to ensure quality and speed.',
      details: ['Professional design', 'Expert development', 'Security & performance', 'Quality assurance']
    },
    {
      icon: Rocket,
      title: 'You Receive Your Website',
      description: 'Everything is complete and ready. No learning curve, no tools to manage. Just a professional website that\'s yours to use.',
      details: ['Full working website', 'Hosting & deployment', 'Admin access & training', 'Ongoing support']
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to get your professional website
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -ml-4 z-0"></div>
                )}

                <div className="relative bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute top-8 right-8 text-6xl font-bold text-blue-50">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
