import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { OrderForm } from './components/OrderForm';
import { RiderSubscription } from './components/RiderSubscription';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'order' | 'rider'>('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Toaster position="top-center" richColors />
      <Navbar onNavigate={setActiveTab} activeTab={activeTab} />
      
      <main className="pt-16">
        {activeTab === 'home' && (
          <>
            <Hero onGetStarted={() => setActiveTab('order')} />
            <Services />
            <section className="py-20 bg-white">
              <div className="max-container px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Quicker?</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">We provide the fastest and most reliable logistics solutions for businesses and individuals.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Instant Delivery</h3>
                    <p className="text-slate-600">Get your items delivered across the city in under 60 minutes with our express fleet.</p>
                  </div>
                  <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
                    <p className="text-slate-600">All deliveries are insured and handled by verified professional riders with real-time tracking.</p>
                  </div>
                  <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                    <p className="text-slate-600">Know exactly what you'll pay before you book. No hidden charges or surge pricing surprises.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {activeTab === 'order' && <OrderForm />}
        {activeTab === 'rider' && <RiderSubscription />}
      </main>

      <Footer />
    </div>
  );
}

export default App;