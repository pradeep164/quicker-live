import React from 'react';
import { Bike, Truck, Package, ShoppingBag, Box, Plane } from 'lucide-react';

const services = [
  {
    title: 'Two Wheeler',
    desc: 'Best for small packages, documents, and food. Rapid movement through traffic.',
    icon: Bike,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Three Wheeler',
    desc: 'Perfect for bulky electronics, medium boxes, and furniture pieces.',
    icon: ShoppingBag,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Mini Truck',
    desc: 'Ideal for house shifting or large commercial shipments across the city.',
    icon: Truck,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Packers & Movers',
    desc: 'End-to-end relocation services with expert handling and packaging.',
    icon: Box,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Courier',
    desc: 'Inter-city shipping for documents and small parcels at affordable rates.',
    icon: Package,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Enterprise',
    desc: 'Bulk logistics and fleet management for business operations.',
    icon: Plane,
    color: 'bg-cyan-50 text-cyan-600',
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 text-lg">Whatever the size, whatever the distance. We've got a vehicle ready for you.</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Vehicles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-50 group">
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              <button className="mt-8 text-slate-900 font-bold text-sm underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};