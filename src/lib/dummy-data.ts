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
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'A stunning architectural statement, this modern villa offers breathtaking forest views. Featuring an open-plan living space, infinity pool, and state-of-the-art amenities, it\'s the epitome of Nairobi luxury.',
    features: ['Forest View', 'Infinity Pool', 'Home Theater', 'Gourmet Kitchen', '3-Car Garage', 'Smart Home System'],
    agent: {
      name: 'John Doe',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
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
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'Live in the heart of the city in this beautifully renovated apartment. With hardwood floors, a modern kitchen, and access to a rooftop terrace, urban living has never been more comfortable or convenient.',
    features: ['City View', 'Rooftop Terrace', 'Fitness Center', 'Concierge Service', 'Walk-in Closet'],
    agent: {
      name: 'Jane Smith',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -1.267, lng: 36.802 }
  },
  {
    id: 3,
    title: 'Family Home in Lavington',
    address: '789 Gitanga Road, Nairobi, Kenya',
    price: 95000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'This spacious family home is located in a quiet, friendly neighborhood with excellent schools. It boasts a large backyard with a deck, a finished basement, and a recently updated kitchen, perfect for a growing family.',
    features: ['Large Backyard', 'DSQ', 'Updated Kitchen', 'Fireplace', 'Two-car garage'],
    agent: {
      name: 'Emily White',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
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
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'Experience unparalleled luxury in this penthouse condo with panoramic city views. Floor-to-ceiling windows, a private elevator, and access to five-star building amenities make this a truly unique residence.',
    features: ['Panoramic Views', 'Private Elevator', '24/7 Security', 'Indoor Pool', 'Spa & Sauna'],
    agent: {
      name: 'Michael Chen',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
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
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'Own a piece of paradise. This magnificent beachfront house offers direct access to the white sandy beaches of Diani. With a private pool and stunning ocean views, this is the ultimate coastal retreat.',
    features: ['Direct Beach Access', 'Ocean Views', 'Private Pool', 'Guest House', 'Landscaped Gardens'],
    agent: {
      name: 'Aisha Omar',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
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
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'An exquisite townhouse in the exclusive Runda estate. This home combines modern luxury with classic elegance, featuring high ceilings, a large garden, and top-tier security in a gated community.',
    features: ['Gated Community', 'Large Garden', 'High Ceilings', '24/7 Security', 'Clubhouse Access'],
    agent: {
      name: 'David King',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -1.222, lng: 36.822 }
  },
  {
    id: 7,
    title: 'Cozy Cottage in Naivasha',
    address: '77 Moi South Lake Road, Naivasha',
    price: 45000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'A charming cottage getaway with stunning views of Lake Naivasha. Perfect for weekend escapes or a peaceful permanent residence. Includes a mature garden and a private boat jetty.',
    features: ['Lake View', 'Mature Garden', 'Private Jetty', 'Fireplace'],
    agent: {
      name: 'Susan Kamau',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -0.716, lng: 36.433 }
  },
  {
    id: 8,
    title: 'Studio Apartment in Kileleshwa',
    address: '88 Othaya Road, Nairobi',
    price: 12500000,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: 'Apartment',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'A compact and modern studio apartment in a highly sought-after area. Ideal for young professionals or as an investment property. The complex includes a gym and swimming pool.',
    features: ['Gym', 'Swimming Pool', 'Borehole', 'Backup Generator'],
    agent: {
      name: 'Jane Smith',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -1.282, lng: 36.788 }
  },
  {
    id: 9,
    title: 'Colonial House in Muthaiga',
    address: '99 Muthaiga Road, Nairobi',
    price: 250000000,
    bedrooms: 6,
    bathrooms: 7,
    area: 7500,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'A grand colonial-style home set on a one-acre plot in prestigious Muthaiga. This property exudes old-world charm with modern updates, featuring sprawling gardens and staff quarters.',
    features: ['One Acre Plot', 'Swimming Pool', 'Staff Quarters', 'Gated Community'],
    agent: {
      name: 'John Doe',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -1.252, lng: 36.833 }
  },
  {
    id: 10,
    title: 'Penthouse in Nyali',
    address: '111 Links Road, Mombasa',
    price: 85000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 4000,
    type: 'Condo',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'Breathtaking ocean views from this exclusive penthouse in Nyali. This residence offers luxury living with expansive balconies, a rooftop pool, and direct beach access.',
    features: ['Ocean View', 'Rooftop Pool', 'Direct Beach Access', 'High-Speed Lifts'],
    agent: {
      name: 'Aisha Omar',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -4.043, lng: 39.668 }
  },
    {
    id: 11,
    title: 'Suburban Home in Thika',
    address: '21 Thika Greens, Thika',
    price: 55000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    type: 'House',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'A beautiful family home within a premier golf estate. Enjoy serene living with access to an 18-hole championship golf course and other club amenities. Secure and peaceful environment.',
    features: ['Golf Estate', 'Clubhouse', 'Gated Community', 'Manicured Lawns'],
    agent: {
      name: 'Emily White',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -1.041, lng: 37.081 }
  },
  {
    id: 12,
    title: 'Apartment in Riverside',
    address: '33 Riverside Drive, Nairobi',
    price: 42000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    type: 'Apartment',
    status: 'For Sale',
    images: [
      'https://placehold.co/800x600/e07a5f/f2e8e5',
      'https://placehold.co/800x600/e07a5f/f2e8e5',
    ],
    description: 'A modern and spacious apartment in the tranquil and secure Riverside area. Features a large balcony overlooking lush greenery, perfect for relaxation. High-quality finishes throughout.',
    features: ['River View', 'High Security', 'Swimming Pool', 'Gym'],
    agent: {
      name: 'Michael Chen',
      avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5'
    },
    location: { lat: -1.270, lng: 36.805 }
  }
];

export const sellerAnalytics: Analytics = {
  activeListings: 12,
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
    { id: 'MSG001', name: 'Alice Johnson', property: 'Modern Villa in Karen', date: '2 days ago', status: 'Unread', body: 'Hello, I saw your listing for the Modern Villa in Karen and I am very interested. Could you please let me know if it\'s possible to schedule a viewing this weekend? Saturday afternoon would be ideal for me. Thank you!', avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5' },
    { id: 'MSG002', name: 'Bob Williams', property: 'Chic Apartment in Westlands', date: '3 days ago', status: 'Read', body: 'Hi, I have a few questions about the apartment in Westlands. Are the service charges included in the price? And what is the policy on pets? I have a small dog. Looking forward to your response.', avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5' },
    { id: 'MSG003', name: 'Charlie Brown', property: 'Modern Villa in Karen', date: '5 days ago', status: 'Read', body: 'Good day, regarding the villa in Karen - are you negotiable on the price? I would be a cash buyer. Please advise.', avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5' },
    { id: 'MSG004', name: 'Diana Prince', property: 'Family Home in Lavington', date: '1 week ago', status: 'Read', body: 'I love the look of the family home in Lavington! My family and I are relocating to Nairobi and this seems perfect. Can you share more photos of the backyard and the master bedroom? Thanks a lot.', avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5' },
    { id: 'MSG005', name: 'Ethan Hunt', property: 'Luxury Penthouse in Kilimani', date: '1 week ago', status: 'Unread', body: 'Inquiry about the Kilimani penthouse. Is the private elevator exclusive to the penthouse or shared with other floors? Also, what are the monthly maintenance fees? Thank you for the information.', avatar: 'https://placehold.co/100x100/e07a5f/f2e8e5' },
];
