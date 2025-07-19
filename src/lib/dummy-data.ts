import type { Property, Analytics, Message } from './types';

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    address: '123 Ocean Drive, Malibu, CA',
    price: 3500000,
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/81b29a/f2e8e5',
      'https://placehold.co/800x600/f2cc8f/4d4c4a',
      'https://placehold.co/800x600/3d405b/f2e8e5',
    ],
    description: 'A stunning architectural statement, this modern villa offers breathtaking ocean views from every room. Featuring an open-plan living space, infinity pool, and state-of-the-art amenities, it\'s the epitome of California luxury.',
    features: ['Ocean View', 'Infinity Pool', 'Home Theater', 'Gourmet Kitchen', '3-Car Garage', 'Smart Home System'],
    agent: {
      name: 'John Doe',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: 34.0356, lng: -118.692 }
  },
  {
    id: 2,
    title: 'Cozy Downtown Apartment',
    address: '456 Main Street, Anytown, USA',
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: 'Apartment',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/81b29a/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/3d405b/f2e8e5',
    ],
    description: 'Live in the heart of the city in this beautifully renovated apartment. With hardwood floors, a modern kitchen, and access to a rooftop terrace, urban living has never been more comfortable or convenient.',
    features: ['City View', 'Rooftop Terrace', 'Fitness Center', 'Concierge Service', 'Walk-in Closet'],
    agent: {
      name: 'Jane Smith',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: 3,
    title: 'Charming Suburban Family Home',
    address: '789 Maple Lane, Greenfield, OH',
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/f2cc8f/4d4c4a',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/81b29a/f2e8e5',
    ],
    description: 'This spacious family home is located in a quiet, friendly neighborhood with excellent schools. It boasts a large backyard with a deck, a finished basement, and a recently updated kitchen, perfect for a growing family.',
    features: ['Large Backyard', 'Finished Basement', 'Updated Kitchen', 'Fireplace', 'Two-car garage'],
    agent: {
      name: 'Emily White',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: 39.352, lng: -83.3831 }
  },
  {
    id: 4,
    title: 'Luxury Penthouse Condo',
    address: '101 Skyview Tower, Metropolis, IL',
    price: 1200000,
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    type: 'Condo',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/3d405b/f2e8e5',
      'https://placehold.co/800x600/f2cc8f/4d4c4a',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'Experience unparalleled luxury in this penthouse condo with panoramic city views. Floor-to-ceiling windows, a private elevator, and access to five-star building amenities make this a truly unique residence.',
    features: ['Panoramic Views', 'Private Elevator', '24/7 Security', 'Indoor Pool', 'Spa & Sauna'],
    agent: {
      name: 'Michael Chen',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: 37.129, lng: -88.733 }
  },
];

export const sellerAnalytics: Analytics = {
  activeListings: 4,
  totalViews: 125321,
  totalMessages: 78,
  viewsData: [
    { name: 'Jan', views: 12000 },
    { name: 'Feb', views: 18000 },
    { name: 'Mar', views: 15000 },
    { name: 'Apr', views: 22000 },
    { name: 'May', views: 19000 },
    { name: 'Jun', views: 25000 },
    { name: 'Jul', views: 28000 },
  ],
};

export const sellerMessages: Message[] = [
    { id: 'MSG001', name: 'Alice Johnson', property: 'Modern Villa', date: '2 days ago', status: 'Unread' },
    { id: 'MSG002', name: 'Bob Williams', property: 'Downtown Apartment', date: '3 days ago', status: 'Read' },
    { id: 'MSG003', name: 'Charlie Brown', property: 'Modern Villa', date: '5 days ago', status: 'Read' },
    { id: 'MSG004', name: 'Diana Prince', property: 'Suburban Home', date: '1 week ago', status: 'Read' },
    { id: 'MSG005', name: 'Ethan Hunt', property: 'Penthouse Condo', date: '1 week ago', status: 'Unread' },
];
