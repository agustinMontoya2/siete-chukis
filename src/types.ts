export interface ShippingData {
  title: string;
  subtitle: string;
  rows: { label: string; price: string }[];
  note: string;
}

export interface LocationData {
  address: string;
  city: string;
  hours: { day: string; value: string }[];
  title: string;
  subtitle: string;
  shippingLabel: string;
  shippingZone: string;
  mapsButton: string;
  mapsUrl: string;
}

export interface CtaData {
  title: string;
  subtitle: string;
  whatsappButton: string;
  instagramButton: string;
  phones: string[];
  instagram: string;
}

export interface SiteData {
  hero: {
    logoImage?: string;
    brandName: string;
    brandSubtitle: string;
    tagline: string;
    scrollHint: string;
  };
  shipping: ShippingData;
  location: LocationData;
  cta: CtaData;
  products: {
    fallbackImage?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export interface PricingSection {
  label: string;
  spaced: boolean;
  items: { name: string; price: string }[];
}

export interface PricingPanel {
  title: string;
  highlighted?: boolean;
  sections: PricingSection[];
}

export interface PricingData {
  title: string;
  panels: PricingPanel[];
}

export interface Product {
  name: string;
  category: string;
  badge?: string;
  price?: string;
  imageUrl: string;
}

export interface SectionFilter {
  label: string;
  value: string;
}

export interface SectionData {
  title: string;
  slug: string;
  order: number;
  visible: boolean;
  filters: SectionFilter[];
  products: Product[];
}
