import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NewHeader from './components/NewHeader';
import NewFooter from './components/NewFooter';
import NewHome from './pages/NewHome';

const NewServices = lazy(() => import('./pages/NewServices'));
const NewPricing = lazy(() => import('./pages/NewPricing'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Features = lazy(() => import('./pages/Features'));
const NewPortfolio = lazy(() => import('./pages/NewPortfolio'));
const NewFAQ = lazy(() => import('./pages/NewFAQ'));
const NewContact = lazy(() => import('./pages/NewContact'));
const Subscribe = lazy(() => import('./pages/Subscribe'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-maroon-200 border-t-maroon-700 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <NewHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </main>
        <NewFooter />
      </div>
    </Router>
  );
}

export default App;
