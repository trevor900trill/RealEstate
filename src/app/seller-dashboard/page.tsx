import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Home, MessageSquare, PlusCircle } from "lucide-react";
import AnalyticsCard from "@/components/seller/AnalyticsCard";
import ViewsChart from "@/components/seller/ViewsChart";
import MessagesTable from "@/components/seller/MessagesTable";
import { sellerAnalytics, sellerMessages, properties } from "@/lib/dummy-data";
import PropertyCard from "@/components/property/PropertyCard";

export default function SellerDashboardPage() {
  return (
    <div className="bg-secondary/50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-headline font-bold">Seller Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your listings.</p>
          </div>
          <Button size="lg" className="mt-4 md:mt-0">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add New Property
          </Button>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-[400px] h-auto mb-8">
            <TabsTrigger value="overview" className="py-2">Overview</TabsTrigger>
            <TabsTrigger value="properties" className="py-2">Properties</TabsTrigger>
            <TabsTrigger value="messages" id="messages" className="py-2">Messages</TabsTrigger>
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
                  {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Inbox</CardTitle>
                <CardDescription>Respond to inquiries from potential buyers.</CardDescription>
              </CardHeader>
              <CardContent>
                <MessagesTable messages={sellerMessages} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
