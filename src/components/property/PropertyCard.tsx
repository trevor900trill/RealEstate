
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BedDouble, Bath, Expand, MapPin, Heart, DraftingCompass } from 'lucide-react';
import type { Property } from '@/lib/types';
import { useAuth } from "@/hooks/useAuth.tsx";
import { useState } from 'react';
import LoginPrompt from '../auth/LoginPrompt';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Building2 } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { isLoggedIn } = useAuth();
  const { toast } = useToast();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
    } else {
      // In a real app, this would update state
      toast({
        title: "Added to favorites!",
        description: `${property.title} has been saved.`,
      });
    }
  };

  return (
    <>
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl shadow-md">
      <CardHeader className="p-0 relative">
        <Link href={`/listing/${property.id}`}>
          <Avatar className="aspect-[4/3] relative w-full h-auto rounded-none">
            <AvatarImage
              src={property.images[0]}
              alt={property.title}
              className="object-cover"
              data-ai-hint={`${property.type.toLowerCase()} exterior`}
            />
            <AvatarFallback className="rounded-none bg-secondary flex-col gap-2">
                {property.type === 'Plot' ? (
                     <DraftingCompass className="w-10 h-10 text-muted-foreground/50" />
                ) : (
                    <Building2 className="w-10 h-10 text-muted-foreground/50" />
                )}
                <span className="text-xs text-muted-foreground">No image available</span>
            </AvatarFallback>
          </Avatar>
        </Link>
        <Badge variant="secondary" className="absolute top-3 right-3 text-sm rounded-md">
          {property.status}
        </Badge>
         <Button variant="ghost" size="icon" className="absolute top-2 left-2 bg-background/70 hover:bg-background text-muted-foreground hover:text-primary rounded-full" onClick={handleFavoriteClick}>
            <Heart className="w-5 h-5" />
            <span className="sr-only">Favorite</span>
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-2xl font-bold font-headline text-primary mb-2">{formatPrice(property.price)}</p>
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
      <CardFooter className="p-4 bg-secondary/30 flex justify-between items-center text-sm">
        <div className="flex items-center gap-3 text-muted-foreground">
          {property.type !== 'Plot' && property.bedrooms && (
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-5 h-5 text-primary/80" /> {property.bedrooms}
            </span>
          )}
          {property.type !== 'Plot' && property.bathrooms && (
            <span className="flex items-center gap-1.5">
              <Bath className="w-5 h-5 text-primary/80" /> {property.bathrooms}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Expand className="w-5 h-5 text-primary/80" /> {property.area} sqft
          </span>
        </div>
        <Button size="sm" asChild>
          <Link href={`/listing/${property.id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
    <LoginPrompt isOpen={showLoginPrompt} onOpenChange={setShowLoginPrompt} />
    </>
  );
}
