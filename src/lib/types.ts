export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'House' | 'Apartment' | 'Condo';
  status: 'For Sale' | 'For Rent';
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    avatar: string;
  };
}

export interface Analytics {
  activeListings: number;
  totalViews: number;
  totalMessages: number;
  viewsData: {
    name: string;
    views: number;
  }[];
}

export interface Message {
  id: string;
  name: string;
  property: string;
  date: string;
  status: 'Read' | 'Unread';
}
