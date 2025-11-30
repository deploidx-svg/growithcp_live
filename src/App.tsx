import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHeader from './components/NewHeader';
import NewFooter from './components/NewFooter';
import NewHome from './pages/NewHome';
import NewServices from './pages/NewServices';
import NewPricing from './pages/NewPricing';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import NewPortfolio from './pages/NewPortfolio';
import NewFAQ from './pages/NewFAQ';
import NewContact from './pages/NewContact';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <NewHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/services" element={<NewServices />} />
            <Route path="/pricing" element={<NewPricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/portfolio" element={<NewPortfolio />} />
            <Route path="/faq" element={<NewFAQ />} />
            <Route path="/contact" element={<NewContact />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>
        <NewFooter />
      </div>
    </Router>
  );
}

export default App;
