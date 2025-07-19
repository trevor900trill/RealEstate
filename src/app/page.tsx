import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, UserPlus, Search, HomeIcon } from "lucide-react";
import ListingExplorer from "@/components/property/ListingExplorer";
import { properties } from "@/lib/dummy-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full relative bg-secondary/40">
        <div className="absolute inset-0">
           <Avatar className="h-full w-full rounded-none">
                <AvatarImage
                    src="https://placehold.co/1920x1080/e07a5f/f2e8e5"
                    alt="Background hero image of a modern home"
                    className="object-cover opacity-50"
                    data-ai-hint="modern home abstract background"
                />
                <AvatarFallback className="rounded-none bg-secondary flex-col gap-2">
                    <HomeIcon className="w-24 h-24 text-muted-foreground/20" />
                </AvatarFallback>
            </Avatar>
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 py-24 md:py-40">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4">
            Discover Your Perfect Home
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            The best place to find your dream property in Kenya.
            Start your search for apartments, houses, and condos today.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Input
                placeholder="Search by location, e.g., 'Nairobi'"
                className="h-14 pl-12 pr-32 rounded-full text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <Button size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-11">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24" id="listings">
        <div className="container mx-auto px-4 md:px-6">
            <ListingExplorer properties={properties} />
        </div>
      </section>

      <section className="w-full bg-secondary/40 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Sell Your Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">Join Placeholder to list your property and connect with thousands of potential buyers across Kenya.</p>
              <Button asChild size="lg" className="font-bold">
                  <Link href="/seller-register">
                    Become a Seller <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
               <Avatar className="rounded-xl shadow-2xl w-full max-w-[500px] h-auto aspect-[5/3.5]">
                 <AvatarImage 
                    src="https://placehold.co/600x400/e07a5f/f2e8e5"
                    alt="A smiling real estate agent"
                    className="object-cover"
                    data-ai-hint="real estate agent"
                  />
                  <AvatarFallback className="rounded-xl bg-secondary flex-col gap-2">
                    <UserPlus className="w-16 h-16 text-muted-foreground/50" />
                 </AvatarFallback>
               </Avatar>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
