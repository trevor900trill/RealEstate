import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, UserPlus } from "lucide-react";
import ListingExplorer from "@/components/property/ListingExplorer";
import { properties } from "@/lib/dummy-data";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary-foreground-dark tracking-tighter mb-4">
            Find Your Next Home
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            ResiConnect makes finding the perfect property simple and elegant. Explore listings with ease.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24" id="listings">
        <div className="container mx-auto px-4 md:px-6">
            <ListingExplorer properties={properties} />
        </div>
      </section>

      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground text-lg mb-6">Have questions or want to start your journey? We're here to help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/seller-dashboard#messages">
                    <Mail className="mr-2 h-5 w-5" /> Messages
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-bold">
                  <Link href="/seller-register">
                    <UserPlus className="mr-2 h-5 w-5" /> Become a Seller
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-md bg-background/80 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-headline font-bold mb-4">Stay Updated</h3>
                  <p className="text-muted-foreground mb-6">Join our newsletter for the latest listings and market news.</p>
                  <div className="flex gap-2">
                    <Input placeholder="Enter your email" className="flex-grow h-11" />
                    <Button className="h-11">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
