import React from 'react';
import { ProductStep } from '../types';
import { ArrowRight } from 'lucide-react';

interface StepCardProps {
  step: ProductStep;
}

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const Icon = step.icon;
  const stepNumber = step.id.toString().padStart(2, '0');

  return (
    <div className="flex flex-col h-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transition-all duration-200 hover:border-zinc-600 group">
      
      {/* Colored accent line at the top */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${step.colorPrompt}`}></div>
      
      <div className="p-6 flex flex-col h-full">
        {/* Header: Number and Icon */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black border border-zinc-800 rounded-lg text-zinc-300 group-hover:text-white transition-colors">
               <Icon size={20} strokeWidth={2} />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {step.title}
            </h3>
          </div>
          {/* Step Number: Gradient Text + Mono Font */}
          <span className={`text-4xl font-mono font-extrabold bg-gradient-to-br ${step.colorPrompt} bg-clip-text text-transparent select-none opacity-90`}>
            {stepNumber}
          </span>
        </div>

        {/* Content: Process List */}
        <div className="flex-1 mb-6">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            核心流程
          </p>
          <ul className="space-y-2">
            {step.process.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.colorPrompt} shrink-0 opacity-70`}></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer: Deliverable */}
        <div className="mt-auto pt-4 border-t border-zinc-800">
           <div className="flex flex-col gap-1">
             <span className="text-[10px] font-semibold text-zinc-500 uppercase">
               交付产物
             </span>
             <div className="text-sm font-medium text-zinc-200 flex items-start gap-2">
                <ArrowRight size={14} className="mt-1 text-zinc-500" />
                {step.deliverable}
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};