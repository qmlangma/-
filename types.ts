import { LucideIcon } from 'lucide-react';

export interface ProductStep {
  id: number;
  title: string;
  icon: LucideIcon;
  process: string[];
  deliverable: string;
  colorPrompt: string; // Used for dynamic gradients
}