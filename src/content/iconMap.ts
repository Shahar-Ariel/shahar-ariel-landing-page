import {
  Building2,
  Cloud,
  Cpu,
  Factory,
  MonitorSmartphone,
  RadioTower,
  Rocket,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import type { IconKey } from '../types/landing';

export const iconMap: Record<IconKey, typeof Cpu> = {
  building: Building2,
  cloud: Cloud,
  cpu: Cpu,
  factory: Factory,
  monitor: MonitorSmartphone,
  radio: RadioTower,
  rocket: Rocket,
  shield: ShieldCheck,
  smartphone: Smartphone,
};
