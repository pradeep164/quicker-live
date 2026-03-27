import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Navigation, Send, Calendar, Box, Info } from 'lucide-react';
import { toast } from 'sonner';

export const OrderForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    pickup: '',
    drop: '',
    vehicle: 'bike',
    itemType: 'others',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Searching for nearby riders...', {
        description: `Order from ${orderData.pickup} to ${orderData.drop} initiated.`,
      });
      setStep(3);
    }, 1500);
  };

  return (
    <section className="py-12 bg-white min-h-[calc(100vh-64px)]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Book a Delivery</h2>
          <p className="text-slate-500">Choose your locations and vehicle type to get started.</p>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 border border-slate-200 shadow-sm">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-slate-700 mb-2 px-1">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                    <input
                      required
                      type="text"
                      placeholder="Street name, landmark or area"
                      className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      value={orderData.pickup}
                      onChange={(e) => setOrderData({ ...orderData, pickup: e.target.value })}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold text-slate-700 mb-2 px-1">Drop Location</label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <input
                      required
                      type="text"
                      placeholder="Destination address"
                      className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      value={orderData.drop}
                      onChange={(e) => setOrderData({ ...orderData, drop: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    Select Vehicle
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setStep(1)} className="p-2 hover:bg-slate-200 rounded-lg text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-xl font-bold">Select Vehicle Type</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { id: 'bike', name: 'Bike', price: '$5.00', time: '5 mins away' },
                  { id: 'scooter', name: 'Scooter', price: '$4.50', time: '3 mins away' },
                  { id: 'minitruck', name: 'Mini Truck', price: '$12.00', time: '12 mins away' },
                  { id: 'van', name: 'Van', price: '$18.00', time: '15 mins away' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setOrderData({ ...orderData, vehicle: v.id })}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${
                      orderData.vehicle === v.id ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-black text-lg">{v.name}</span>
                      <span className="text-blue-600 font-bold">{v.price}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{v.time}</p>
                  </button>
                ))}
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all disabled:opacity-70"
              >
                {loading ? 'Processing...' : 'Confirm & Book Now'}
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed!</h3>
              <p className="text-slate-600 mb-8">Rider Rahul is assigned and 1.2km away from pickup.</p>
              
              <div className="bg-white rounded-2xl p-6 text-left border border-slate-200 mb-8 max-w-sm mx-auto">
                 <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">R</div>
                    <div>
                      <p className="font-bold text-slate-900">Rahul Sharma</p>
                      <p className="text-sm text-slate-500">Honda Activa • WHITE-1234</p>
                    </div>
                 </div>
                 <div className="flex justify-between text-sm pt-4 border-t border-slate-100">
                   <button className="text-blue-600 font-bold">Call Rider</button>
                   <button className="text-red-500 font-bold">Cancel Order</button>
                 </div>
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-blue-600 font-bold underline underline-offset-4"
              >
                Book another delivery
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};