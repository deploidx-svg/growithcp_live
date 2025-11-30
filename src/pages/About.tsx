import { Users, Target, Lightbulb, Award } from 'lucide-react';

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack developer with 12+ years of experience building web products at scale.'
  },
  {
    name: 'Sarah Williams',
    role: 'Design Lead',
    bio: 'UX/UI designer passionate about creating beautiful, user-friendly interfaces.'
  },
  {
    name: 'Raj Patel',
    role: 'Senior Developer',
    bio: 'Backend specialist with expertise in scalable architecture and security.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Project Manager',
    bio: 'Ensures every project is delivered on time, on budget, and exceeds expectations.'
  }
];

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize your goals and deliver results that matter.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends and apply the best solutions to your projects.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Quality is non-negotiable. We take pride in every line of code and every design pixel.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as your extended team, communicating transparently every step of the way.'
  }
];

function About() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              About GrowithCP
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're a team of passionate engineers and designers dedicated to building exceptional websites that drive real business results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                GrowithCP was founded on a simple belief: website creation doesn't have to be complicated, expensive, or time-consuming.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                We noticed businesses struggling with DIY builders, freelancers missing deadlines, and agencies charging exorbitant fees. We decided to do things differently—by combining expert engineering with efficient processes to deliver professional websites affordably and quickly.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we've helped hundreds of businesses, creators, and entrepreneurs get online with websites that look great, perform fast, and generate results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <p className="text-blue-100">Websites Built</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <p className="text-blue-100">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">8+</div>
                  <p className="text-blue-100">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you build an exceptional website.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
