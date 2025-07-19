
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Home, MessageSquare, PlusCircle, UserPlus, AlertTriangle } from "lucide-react";
import AnalyticsCard from "@/components/seller/AnalyticsCard";
import ViewsChart from "@/components/seller/ViewsChart";
import { sellerAnalytics, properties } from "@/lib/dummy-data";
import PropertyCard from "@/components/property/PropertyCard";
import { useAuth } from "@/hooks/useAuth.tsx";
import LoginPrompt from "@/components/auth/LoginPrompt";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SellerDashboardPage() {
  const { isLoggedIn, isSeller } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
       <div className="bg-secondary/40 min-h-[calc(100vh-4rem)]">
        <LoginPrompt isOpen={showLoginPrompt} onOpenChange={setShowLoginPrompt} />
        <div className="container mx-auto px-4 md:px-6 py-24 text-center">
            <h1 className="text-4xl font-headline font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground text-lg mb-8">Please log in to view the seller dashboard.</p>
            <Button asChild size="lg">
              <Link href="/login">Go to Login</Link>
            </Button>
        </div>
      </div>
    );
  }

  if (!isSeller) {
    return (
      <div className="bg-secondary/40 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 md:px-6 py-12 flex items-center justify-center">
          <Card className="max-w-lg text-center p-8 shadow-lg">
            <CardHeader>
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
              <CardTitle className="text-3xl font-headline mt-4">Seller Account Required</CardTitle>
              <CardDescription className="text-lg mt-2 text-muted-foreground">
                You are currently logged in as a buyer. To access the seller dashboard and list your properties, you need a seller account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <Link href="/seller-register">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create a Seller Account
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary/50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-headline font-bold">Seller Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your listings.</p>
          </div>
          <Button size="lg" className="mt-4 md:mt-0" asChild>
            <Link href="/seller-dashboard/add-property">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add New Property
            </Link>
          </Button>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-[300px] h-auto mb-8">
            <TabsTrigger value="overview" className="py-2">Overview</TabsTrigger>
            <TabsTrigger value="properties" className="py-2">Properties</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <AnalyticsCard title="Active Listings" value={sellerAnalytics.activeListings.toString()} icon={Home} />
              <AnalyticsCard title="Total Views" value={sellerAnalytics.totalViews.toLocaleString()} icon={Eye} />
              <AnalyticsCard title="Total Messages" value={sellerAnalytics.totalMessages.toString()} icon={MessageSquare} />
            </div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-headline">Property Views Over Time</CardTitle>
                <CardDescription>Your listings' performance over the last 7 months.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ViewsChart data={sellerAnalytics.viewsData} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="properties">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Your Properties</CardTitle>
                <CardDescription>Manage your active listings.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.slice(0, 6).map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
