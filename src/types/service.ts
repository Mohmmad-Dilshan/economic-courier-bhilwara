import { ServiceTypeOption } from './inquiry';

export type ServiceCategory = 'all' | 'domestic' | 'international' | 'textile' | 'documents';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: ServiceCategory;
  categoryLabel: string;
  turnaroundTime: string;
  coverage: string;
  description: string;
  features: string[];
  idealFor: string[];
  iconName: string;
  image: string;
  inquiryServiceKey: ServiceTypeOption;
  ctaLabel: string;
  complianceNote?: string;
}
