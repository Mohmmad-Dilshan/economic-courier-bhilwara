export interface GoogleReview {
  id: string;
  name: string;
  role: string;
  location: string;
  category: string;
  categoryIcon: 'building' | 'factory' | 'warehouse' | 'globe' | 'truck' | 'store';
  rating: number;
  text: string;
  initials: string;
  avatarColor: string;
  date: string;
  verified: boolean;
  source: 'Google' | 'Verified Client';
}

export interface ReviewTrustPillar {
  id: string;
  title: string;
  icon: 'truck' | 'shield' | 'clock' | 'headset';
}

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: '4.9',
  numericRating: 4.9,
  maxRating: '5',
  totalReviews: '396+',
  totalReviewsCount: 396,
  sourcePlatform: 'Google Business Profile',
  googleMapsUrl: 'https://share.google/XGfOCGnHDKHlCOUaw',
  verifiedCorridor: 'Bhilwara & Industrial Corridor',
};

export const GOOGLE_REVIEWS_LIST: GoogleReview[] = [
  {
    id: 'rohit-mehta',
    name: 'Rohit Mehta',
    role: 'Textile Trader',
    location: 'Gulabpura',
    category: 'Textile & Spinning',
    categoryIcon: 'building',
    rating: 5,
    text: 'eCS has made our sample and document deliveries from Bhilwara very easy. Pickups are quick and deliveries always on time.',
    initials: 'R',
    avatarColor: 'bg-[#1A73E8]', // Google Blue
    date: '3 weeks ago',
    verified: true,
    source: 'Google',
  },
  {
    id: 'manoj-sharma',
    name: 'Manoj Sharma',
    role: 'Industrial Supplier',
    location: 'Agucha',
    category: 'Industrial & Mining',
    categoryIcon: 'factory',
    rating: 5,
    text: 'We regularly send industrial spares and urgent documents through eCS. The service is reliable, professional and truly business-friendly.',
    initials: 'M',
    avatarColor: 'bg-[#0F9D58]', // Google Green
    date: '1 month ago',
    verified: true,
    source: 'Google',
  },
  {
    id: 'amit-jain',
    name: 'Amit Jain',
    role: 'Factory Owner',
    location: 'Chittorgarh',
    category: 'Manufacturing Belt',
    categoryIcon: 'warehouse',
    rating: 5,
    text: 'Great experience with eCS. Safe handling, clear communication and on-time delivery every time. Highly recommended for commercial shipments!',
    initials: 'A',
    avatarColor: 'bg-[#E37400]', // Google Amber
    date: '2 weeks ago',
    verified: true,
    source: 'Google',
  },
  {
    id: 'vikram-singhania',
    name: 'Vikram Singhania',
    role: 'Fabric Exporter',
    location: 'Pur Road',
    category: 'International Express',
    categoryIcon: 'globe',
    rating: 5,
    text: 'Sent our textile catalog and commercial fabric swatches across international lanes. Proper customs guidance and on-time global handover.',
    initials: 'V',
    avatarColor: 'bg-[#8430CE]', // Purple
    date: '1 month ago',
    verified: true,
    source: 'Google',
  },
  {
    id: 'pooja-toshniwal',
    name: 'Pooja Toshniwal',
    role: 'Apparel Manufacturer',
    location: 'Bhilwara Hub',
    category: 'Textile & Spinning',
    categoryIcon: 'building',
    rating: 5,
    text: 'Dependable service opposite New Cloth Market. Poly-mailer strapping is solid, weight is transparent and rates are very reasonable.',
    initials: 'P',
    avatarColor: 'bg-[#D93025]', // Google Red
    date: '2 months ago',
    verified: true,
    source: 'Google',
  },
  {
    id: 'suresh-chhabra',
    name: 'Suresh Chhabra',
    role: 'Commercial Trader',
    location: 'Hamirgarh',
    category: 'Corridor Dispatch',
    categoryIcon: 'truck',
    rating: 5,
    text: 'Regular dispatches between Bhilwara, Jaipur and national hubs are handled seamlessly. Zero consignment damage and honest counter support.',
    initials: 'S',
    avatarColor: 'bg-[#1E293B]', // Slate
    date: '2 months ago',
    verified: true,
    source: 'Google',
  },
];

export const REVIEW_TRUST_PILLARS: ReviewTrustPillar[] = [
  {
    id: 'reliable',
    title: 'Reliable Service',
    icon: 'truck',
  },
  {
    id: 'secure',
    title: 'Safe & Secure',
    icon: 'shield',
  },
  {
    id: 'ontime',
    title: 'On-Time Delivery',
    icon: 'clock',
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    icon: 'headset',
  },
];
