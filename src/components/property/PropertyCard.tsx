import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BedDouble, Bath, Expand, MapPin } from 'lucide-react';
import type { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={`/listing/${property.id}`}>
          <div className="aspect-[4/3] relative">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              data-ai-hint={`${property.type.toLowerCase()} exterior`}
            />
          </div>
        </Link>
        <Badge variant="secondary" className="absolute top-3 right-3 text-sm">
          {property.status}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-2xl font-bold text-primary mb-2">{formatPrice(property.price)}</p>
        <CardTitle className="text-xl font-headline mb-2 leading-tight">
          <Link href={`/listing/${property.id}`} className="hover:text-primary transition-colors">
            {property.title}
          </Link>
        </CardTitle>
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 mr-1.5" />
          <span>{property.address}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/50 flex justify-between items-center text-sm">
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-accent" /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-accent" /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Expand className="w-4 h-4 text-accent" /> {property.area} sqft
          </span>
        </div>
        <Button size="sm" variant="outline" asChild>
          <Link href={`/listing/${property.id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
