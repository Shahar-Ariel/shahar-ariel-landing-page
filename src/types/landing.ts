export type IconKey =
  | 'cpu'
  | 'radio'
  | 'cloud'
  | 'smartphone'
  | 'shield'
  | 'building'
  | 'factory'
  | 'rocket'
  | 'monitor';

export type ChipItem = {
  label: string;
  icon: IconKey;
};

export type CardItem = {
  title: string;
  description: string;
  icon: IconKey;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  visual: 'display' | 'dashboard' | 'board' | 'cloud';
};

export type ProcessItem = {
  step: string;
  title: string;
  description: string;
};
