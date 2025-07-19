'use client'

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { properties } from '@/lib/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BedDouble, Bath, Expand, MapPin, Building, Tag, Phone, Text, Heart, MessageSquare, Building2, DraftingCompass } from 'lucide-react';
import ContactAgentDialog from '@/components/property/ContactAgentDialog';
import { useAuth } from "@/hooks/useAuth.tsx";
import LoginPrompt from '@/components/auth/LoginPrompt';

export default function ListingPage({ params }: { params: { id: string } }) {
  const [isContactOpen, setContactOpen] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { isLoggedIn } = useAuth();
  
  const id = use(Promise.resolve(params.id));
  const property = properties.find((p) => p.id.toString() === id);

  if (!property) {
    notFound();
  }
  
  const handleContactClick = () => {
    if (isLoggedIn) {
      setContactOpen(true);
    } else {
      setShowLoginPrompt(true);
    }
  };
  
  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
    } else {
      // In a real app, you'd toggle the favorite status here
      alert('Added to favorites!');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const propertyDetails = [
    ...(property.bedrooms ? [{ icon: BedDouble, label: 'Bedrooms', value: property.bedrooms }] : []),
    ...(property.bathrooms ? [{ icon: Bath, label: 'Bathrooms', value: property.bathrooms }] : []),
    { icon: Expand, label: 'Area', value: `${property.area} sqft` },
    { icon: Building, label: 'Type', value: property.type },
    { icon: Tag, label: 'Status', value: property.status },
  ];

  return (
    <>
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg rounded-xl">
              <CardContent className="p-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {property.images.map((src, index) => (
                      <CarouselItem key={index}>
                          <Avatar className="aspect-video relative w-full h-auto rounded-none">
                            <AvatarImage
                              src={src}
                              alt={`${property.title} image ${index + 1}`}
                              className="object-cover"
                              data-ai-hint="house interior"
                            />
                             <AvatarFallback className="rounded-none bg-secondary flex-col gap-2">
                                {property.type === 'Plot' ? (
                                    <DraftingCompass className="w-12 h-12 text-muted-foreground/50" />
                                ) : (
                                    <Building2 className="w-12 h-12 text-muted-foreground/50" />
                                )}
                                <span className="text-sm text-muted-foreground">No image available</span>
                            </AvatarFallback>
                          </Avatar>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-16" />
                  <CarouselNext className="mr-16" />
                </Carousel>
              </CardContent>
            </Card>

            <Card className="mt-8 shadow-lg rounded-xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-start">
                  <div>
                    <CardTitle className="text-3xl lg:text-4xl font-headline">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{property.address}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                     <div className="text-3xl font-bold font-headline text-primary whitespace-nowrap">
                        {formatPrice(property.price)}
                     </div>
                      <Button variant="ghost" size="icon" className="mt-2 text-muted-foreground hover:text-primary" onClick={handleFavoriteClick}>
                        <Heart className="w-7 h-7" />
                        <span className="sr-only">Favorite</span>
                      </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-2xl font-headline font-semibold mb-4 flex items-center gap-2">
                    <Text className="w-6 h-6 text-primary" />
                    Description
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                <Separator className="my-6" />

                <h3 className="text-2xl font-headline font-semibold mb-4">Property Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
                  {propertyDetails.map((detail) => (
                    <div key={detail.label} className="flex items-center p-3 bg-secondary/30 rounded-lg">
                      <detail.icon className="w-7 h-7 mr-4 text-primary" />
                      <div>
                        <p className="text-muted-foreground text-sm">{detail.label}</p>
                        <p className="font-semibold">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />

                <h3 className="text-2xl font-headline font-semibold mb-4">Features</h3>
                <div className="flex flex-wrap gap-3">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-base py-2 px-4 rounded-lg">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg rounded-xl">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24 border-4 border-primary/50">
                    <AvatarImage src={property.agent.avatar} alt={property.agent.name} data-ai-hint="professional portrait" />
                    <AvatarFallback>{property.agent.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl font-headline">{property.agent.name}</CardTitle>
                <p className="text-muted-foreground">Listing Agent</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-lg h-12 mb-4" onClick={handleContactClick}>
                  <MessageSquare className="mr-2 h-5 w-5" /> Contact Agent
                </Button>
                <a href="tel:+254123456789">
                  <Button variant="outline" className="w-full text-lg h-12">
                    <Phone className="mr-2 h-5 w-5" /> Call Agent
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <ContactAgentDialog 
      isOpen={isContactOpen} 
      onOpenChange={setContactOpen} 
      property={property} 
      agent={property.agent}
    />
    <LoginPrompt isOpen={showLoginPrompt} onOpenChange={setShowLoginPrompt} />
    </>
  );
}
