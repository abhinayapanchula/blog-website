import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[3rem] premium-gradient p-1">
        <div className="bg-[#0a0a0a] rounded-[2.9rem] px-8 py-16 md:p-20 relative overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-indigo/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-violet/20 rounded-full blur-[100px]"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
            >
              Get the best of <br />
              <span className="text-accent-indigo">LUMINO</span> in your inbox.
            </motion.h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Join 50,000+ engineers. No spam, just high-quality technical content delivered once a week.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow group">
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-indigo/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <button className="px-8 py-4 premium-gradient rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-accent-glow hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe <Send size={18} />
              </button>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {['Weekly Digest', 'Premium Articles', 'Community Events'].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-accent-indigo" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
