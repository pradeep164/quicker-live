import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Star, Zap, Crown, Award } from 'lucide-react';
import { toast } from 'sonner';

const plans = [
  {
    name: 'Silver Rider',
    price: '$19',
    duration: '/month',
    badge: Award,
    color: 'slate',
    features: [
      'Basic order priority',
      'Accident Insurance',
      'Fuel Cashback 2%',
      'Support via Chat',
    ],
    accent: 'bg-slate-100 text-slate-600',
    border: 'border-slate-200'
  },
  {
    name: 'Gold Captain',
    price: '$49',
    duration: '/month',
    badge: Star,
    color: 'blue',
    popular: true,
    features: [
      'High order priority',
      'Premium Accident Insurance',
      'Fuel Cashback 5%',
      '24/7 Priority Support',
      'Monthly maintenance vouchers',
    ],
    accent: 'bg-blue-100 text-blue-600',
    border: 'border-blue-600'
  },
  {
    name: 'Platinum Partner',
    price: '$99',
    duration: '/month',
    badge: Crown,
    color: 'indigo',
    features: [
      'Top-tier order matching',
      'Family Health Insurance',
      'Fuel Cashback 10%',
      'Dedicated Relationship Manager',
      'Free bike servicing weekly',
      'Branded merchandise kit',
    ],
    accent: 'bg-indigo-100 text-indigo-600',
    border: 'border-slate-200'
  }
];

export const RiderSubscription: React.FC = () => {
  const handleSubscribe = (plan: string) => {
    toast.success(`Subscribing to ${plan}`, {
      description: "Redirecting to payment gateway...",
    });
  };

  return (
    <section className="py-16 bg-slate-50 min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1 text-center lg:text-left">
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
               Be your own <span className="text-blue-600">Boss</span>.
             </h2>
             <p className="text-xl text-slate-600 mb-8 max-w-xl">
               Join 50,000+ happy riders. Quicker offers flexible subscription plans that help you maximize your earnings and stay protected.
             </p>
             <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <Shield className="text-green-500 w-5 h-5" />
                  <span className="font-bold">Insurance Covered</span>
               </div>
               <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <Zap className="text-orange-500 w-5 h-5" />
                  <span className="font-bold">Daily Payouts</span>
               </div>
             </div>
          </div>
          <div className="flex-1">
             <img 
               src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b11a4c-2a57-424d-926c-640ca6d15d9c/subscription-badges-1709c640-1774600099466.webp" 
               alt="Rider Benefits"
               className="w-full h-auto rounded-[3rem] shadow-2xl"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white p-8 rounded-[2.5rem] border-2 flex flex-col ${plan.border} ${plan.popular ? 'shadow-2xl shadow-blue-100 lg:scale-105 z-10' : 'shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${plan.accent} rounded-2xl flex items-center justify-center`}>
                  <plan.badge className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-bold">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${
                  plan.popular 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};