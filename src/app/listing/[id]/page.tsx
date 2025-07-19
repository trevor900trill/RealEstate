import { notFound } from 'next/navigation';
import Image from 'next/image';
import { properties } from '@/lib/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BedDouble, Bath, Expand, MapPin, Building, Tag, Mail, Phone } from 'lucide-react';
import PropertySummary from '@/components/property/PropertySummary';

export default function ListingPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id.toString() === params.id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const propertyDetails = [
    { icon: BedDouble, label: 'Bedrooms', value: property.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    { icon: Expand, label: 'Area', value: `${property.area} sqft` },
    { icon: Building, label: 'Type', value: property.type },
    { icon: Tag, label: 'Status', value: property.status },
  ];

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {property.images.map((src, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video relative">
                          <Image src={src} alt={`${property.title} image ${index + 1}`} fill className="object-cover" data-ai-hint="house interior" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-16" />
                  <CarouselNext className="mr-16" />
                </Carousel>
              </CardContent>
            </Card>

            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-start">
                  <div>
                    <CardTitle className="text-3xl lg:text-4xl font-headline">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{property.address}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-3xl font-bold text-primary whitespace-nowrap">
                    {formatPrice(property.price)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="my-6" />
                
                <PropertySummary 
                  propertyDescription={property.description} 
                  propertyFeatures={property.features.join(', ')} 
                />

                <Separator className="my-6" />

                <h3 className="text-2xl font-headline font-semibold mb-4">Property Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
                  {propertyDetails.map((detail) => (
                    <div key={detail.label} className="flex items-center">
                      <detail.icon className="w-6 h-6 mr-3 text-primary" />
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
                    <Badge key={index} variant="outline" className="text-base py-1 px-3 bg-accent/20 border-accent text-accent-foreground">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
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
                <Button className="w-full text-lg h-12 mb-4">
                  <Mail className="mr-2 h-5 w-5" /> Contact Agent
                </Button>
                <Button variant="outline" className="w-full text-lg h-12">
                  <Phone className="mr-2 h-5 w-5" /> (123) 456-7890
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
