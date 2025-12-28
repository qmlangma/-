import React from 'react';
import { STEPS } from './constants';
import { StepCard } from './components/StepCard';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-zinc-800 selection:text-white pb-20">
      
      <header className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto">
        {/* Removed the "Standard Operating Procedure" label as requested */}
        
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          产品八步法
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
          从需求确认到上线的标准工作流程，清晰定义每一步的动作标准与交付产物。
        </p>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </main>

      <footer className="mt-20 py-8 text-center text-zinc-600 text-sm">
        <p>© Product Workflow System</p>
      </footer>
    </div>
  );
}