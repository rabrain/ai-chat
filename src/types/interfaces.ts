export interface Client {
  imageUrl: string;
  alt: string;
}
export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
}
export interface featureBlock extends Feature {
  isReversed?: boolean;
}
export interface Pricing {
  title: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}
export interface Testimonial {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}
type Link = {
  label: string;
  href: string;
};

export interface FooterColumn {
  title: string;
  links: Link[];
}
