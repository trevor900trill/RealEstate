"use client";

import { useState, useMemo } from 'react';
import type { Property } from '@/lib/types';
import PropertyCard from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Search, Map, List, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from '@/components/ui/skeleton';

export default function ListingExplorer({ properties }: { properties: Property[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            property.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = propertyType === 'all' || property.type.toLowerCase() === propertyType;
      const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms;
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];

      return matchesSearch && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [searchQuery, propertyType, bedrooms, priceRange, properties]);

  const resetFilters = () => {
    setSearchQuery('');
    setPropertyType('all');
    setBedrooms(0);
    setPriceRange([0, 5000000]);
  };
  
  const MapView = () => (
    <Card>
      <CardContent className="p-2">
        <Skeleton className="h-[70vh] w-full" />
      </CardContent>
    </Card>
  );

  return (
    <div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-center">Explore Properties</h2>
      <Card className="mb-8 p-6 shadow-lg bg-secondary/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Search Input */}
          <div className="lg:col-span-2">
            <Label htmlFor="search" className="text-sm font-semibold">Search Location or Keywords</Label>
            <div className="relative">
              <Input
                id="search"
                type="text"
                placeholder="e.g., 'Ocean View' or 'Malibu, CA'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          
          {/* Property Type Select */}
          <div>
            <Label htmlFor="type" className="text-sm font-semibold">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="type" className="h-11">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bedrooms Select */}
          <div>
            <Label htmlFor="bedrooms" className="text-sm font-semibold">Bedrooms</Label>
            <Select value={bedrooms.toString()} onValueChange={(val) => setBedrooms(parseInt(val))}>
              <SelectTrigger id="bedrooms" className="h-11">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="mt-4">
          <Label className="text-sm font-semibold">Price Range</Label>
          <div className="flex items-center gap-4 mt-2">
            <span className="font-medium text-sm text-muted-foreground">${priceRange[0].toLocaleString()}</span>
            <Slider
              min={0}
              max={5000000}
              step={100000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
            />
            <span className="font-medium text-sm text-muted-foreground">${priceRange[1].toLocaleString()}{priceRange[1] === 5000000 ? '+' : ''}</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
            <Button variant="ghost" onClick={resetFilters} className="text-muted-foreground">
                <X className="mr-2 h-4 w-4" />
                Reset Filters
            </Button>
        </div>
      </Card>
      
      <Tabs defaultValue="grid" className="w-full">
        <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredProperties.length}</span> results
            </p>
            <TabsList>
                <TabsTrigger value="grid" className="flex items-center gap-2">
                    <List className="h-4 w-4" /> Grid
                </TabsTrigger>
                <TabsTrigger value="map" className="flex items-center gap-2">
                    <Map className="h-4 w-4" /> Map
                </TabsTrigger>
            </TabsList>
        </div>
        <TabsContent value="grid">
             {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl font-semibold">No properties found</p>
                    <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
                </div>
            )}
        </TabsContent>
        <TabsContent value="map">
            <MapView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
