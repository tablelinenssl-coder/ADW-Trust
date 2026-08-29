export interface NavItem {
  label: string;
  href: string;
}

export interface ImpactStat {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface InitiativePillar {
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  initiativeInterest?: string;
}
