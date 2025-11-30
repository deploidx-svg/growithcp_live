import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

function Home() {
  return (
    <div className="pt-16 sm:pt-20">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

export default Home;
