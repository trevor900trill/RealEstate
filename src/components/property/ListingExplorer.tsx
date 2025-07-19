"use client";

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { Property } from '@/lib/types';
import PropertyCard from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Search, Map as MapIcon, List, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ITEMS_PER_PAGE = 8;

const MapView = ({ properties, onMarkerClick }: { properties: Property[], onMarkerClick: (id: number) => void }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  const clearMarkers = useCallback(() => {
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);
  }, [markers]);
  
  useEffect(() => {
    const initMap = () => {
      if (window.google && !map) {
        const mapInstance = new window.google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: { lat: -1.286389, lng: 36.817223 }, // Nairobi
          zoom: 12,
          disableDefaultUI: true,
          styles: [
            {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [{ "weight": "2.00" }]
            },
            {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [{ "color": "#9c9c9c" }]
            },
            {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [{ "visibility": "on" }]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{ "color": "#f2f2f2" }]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#eeeeee" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#7b7b7b" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{ "visibility": "simplified" }]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#c8d7d4" }]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#070707" }]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#ffffff" }]
            }
          ]
        });
        setMap(mapInstance);
      }
    };
    initMap();
  }, [map]);

  useEffect(() => {
    if (map) {
      clearMarkers();
      const newMarkers: google.maps.Marker[] = [];
      properties.forEach(property => {
        const marker = new window.google.maps.Marker({
          position: property.location,
          map: map,
          title: property.title,
          icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(15 82% 67%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'),
            scaledSize: new window.google.maps.Size(32, 32),
          }
        });
        marker.addListener('click', () => onMarkerClick(property.id));
        newMarkers.push(marker);
      });
      setMarkers(newMarkers);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, properties, onMarkerClick]);

  return (
    <Card className='rounded-xl shadow-lg'>
      <CardContent className="p-2">
        <div id="map" className="h-[70vh] w-full rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default function ListingExplorer({ properties }: { properties: Property[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 500000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

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
  
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProperties, currentPage]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setPropertyType('all');
    setBedrooms(0);
    setPriceRange([0, 500000000]);
    setCurrentPage(1);
  };
  
  const handleMarkerClick = (id: number) => {
    router.push(`/listing/${id}`);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, propertyType, bedrooms, priceRange]);
  
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">Explore Properties</h2>
      <Card className="mb-8 p-6 shadow-lg bg-background rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="lg:col-span-2">
            <Label htmlFor="search" className="text-sm font-semibold mb-2 block">Search Location or Keywords</Label>
            <div className="relative">
              <Input
                id="search"
                type="text"
                placeholder="e.g., 'Karen' or 'Ocean View'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="type" className="text-sm font-semibold mb-2 block">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="type" className="h-11">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="bedrooms" className="text-sm font-semibold mb-2 block">Bedrooms</Label>
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

        <div className="mt-4">
          <Label className="text-sm font-semibold">Price Range (KES)</Label>
          <div className="flex items-center gap-4 mt-2">
            <span className="font-medium text-sm text-muted-foreground">{priceRange[0].toLocaleString()}</span>
            <Slider
              min={0}
              max={500000000}
              step={1000000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
            />
            <span className="font-medium text-sm text-muted-foreground">{priceRange[1].toLocaleString()}{priceRange[1] === 500000000 ? '+' : ''}</span>
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
                    <MapIcon className="h-4 w-4" /> Map
                </TabsTrigger>
            </TabsList>
        </div>
        <TabsContent value="grid">
             {paginatedProperties.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {paginatedProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                      ))}
                  </div>
                   {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-12">
                      <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium">
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl font-semibold">No properties found</p>
                    <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
                </div>
            )}
        </TabsContent>
        <TabsContent value="map">
            <MapView properties={filteredProperties} onMarkerClick={handleMarkerClick} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
