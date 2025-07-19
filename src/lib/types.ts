export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  type: 'House' | 'Apartment' | 'Condo' | 'Plot';
  status: 'For Sale' | 'For Rent';
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    avatar: string;
  };
  location: {
    lat: number;
    lng: number;
  }
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
  body: string;
  avatar: string;
}
