import type { Property, Analytics, Message } from './types';

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa in Karen',
    address: '123 Karen Road, Nairobi, Kenya',
    price: 180000000,
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
    description: 'A stunning architectural statement, this modern villa offers breathtaking forest views. Featuring an open-plan living space, infinity pool, and state-of-the-art amenities, it\'s the epitome of Nairobi luxury.',
    features: ['Forest View', 'Infinity Pool', 'Home Theater', 'Gourmet Kitchen', '3-Car Garage', 'Smart Home System'],
    agent: {
      name: 'John Doe',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: -1.3151, lng: 36.7084 }
  },
  {
    id: 2,
    title: 'Chic Apartment in Westlands',
    address: '456 Waiyaki Way, Nairobi, Kenya',
    price: 35000000,
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
    location: { lat: -1.267, lng: 36.802 }
  },
  {
    id: 3,
    title: 'Charming Family Home in Lavington',
    address: '789 Gitanga Road, Nairobi, Kenya',
    price: 95000000,
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
    features: ['Large Backyard', 'DSQ', 'Updated Kitchen', 'Fireplace', 'Two-car garage'],
    agent: {
      name: 'Emily White',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: -1.288, lng: 36.782 }
  },
  {
    id: 4,
    title: 'Luxury Penthouse in Kilimani',
    address: '101 Argwings Kodhek Rd, Nairobi, Kenya',
    price: 68000000,
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
    location: { lat: -1.294, lng: 36.789 }
  },
    {
    id: 5,
    title: 'Beachfront Property in Diani',
    address: '555 Diani Beach Road, Kwale, Kenya',
    price: 120000000,
    bedrooms: 4,
    bathrooms: 5,
    area: 5000,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/ffffff',
      'https://placehold.co/800x600/81b29a/ffffff',
      'https://placehold.co/800x600/f2cc8f/ffffff',
    ],
    description: 'Own a piece of paradise. This magnificent beachfront house offers direct access to the white sandy beaches of Diani. With a private pool and stunning ocean views, this is the ultimate coastal retreat.',
    features: ['Direct Beach Access', 'Ocean Views', 'Private Pool', 'Guest House', 'Landscaped Gardens'],
    agent: {
      name: 'Aisha Omar',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: -4.321, lng: 39.570 }
  },
  {
    id: 6,
    title: 'Modern Townhouse in Runda',
    address: '22 Runda Grove, Nairobi, Kenya',
    price: 150000000,
    bedrooms: 5,
    bathrooms: 5,
    area: 6000,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/3d405b/ffffff',
      'https://placehold.co/800x600/e07a5f/ffffff',
      'https://placehold.co/800x600/81b29a/ffffff',
    ],
    description: 'An exquisite townhouse in the exclusive Runda estate. This home combines modern luxury with classic elegance, featuring high ceilings, a large garden, and top-tier security in a gated community.',
    features: ['Gated Community', 'Large Garden', 'High Ceilings', '24/7 Security', 'Clubhouse Access'],
    agent: {
      name: 'David King',
      avatar: 'https://placehold.co/100x100'
    },
    location: { lat: -1.222, lng: 36.822 }
  },
];

export const sellerAnalytics: Analytics = {
  activeListings: 6,
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
