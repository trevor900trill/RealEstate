import PropertyCard from "@/components/property/PropertyCard";
import { properties } from "@/lib/dummy-data";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  // In a real app, this would come from user data
  const favoriteProperties = properties.slice(0, 4);

  return (
    <div className="bg-secondary/40 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-headline font-bold flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            Your Favorite Properties
          </h1>
          <p className="text-muted-foreground mt-1">
            The properties you've saved, all in one place.
          </p>
        </header>

        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border-2 border-dashed rounded-xl bg-background">
            <h2 className="text-2xl font-semibold">No Favorites Yet</h2>
            <p className="text-muted-foreground mt-2">
              Click the heart icon on any listing to save it here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
