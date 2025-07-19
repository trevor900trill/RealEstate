
'use client'

import Link from "next/link";
import { notFound } from "next/navigation";
import { sellerMessages, properties } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Send, Building2 } from "lucide-react";


const buyerMessages = sellerMessages.slice(3, 5).map(m => {
    const property = properties.find(p => p.title === m.property);
    return {
        ...m,
        name: property ? property.agent.name : 'Listing Agent',
        avatar: property ? property.agent.avatar : 'https://placehold.co/100x100/e07a5f/f2e8e5',
        id: `B-${m.id}`
    }
});

export default function BuyerMessageDetailPage({ params }: { params: { id: string } }) {
  const message = buyerMessages.find((m) => m.id === params.id);

  if (!message) {
    notFound();
  }

  const property = properties.find((p) => p.title === message.property);

  return (
    <div className="bg-secondary/50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/messages">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Inbox
            </Link>
          </Button>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4">
              <Avatar className="w-12 h-12 border-2 border-primary/50">
                <AvatarImage src={message.avatar} alt={message.name} data-ai-hint="professional portrait" />
                <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-headline">{message.name}</CardTitle>
                <CardDescription className="text-base">{message.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Separator />
              {property && (
                <div className="my-6">
                  <h3 className="text-lg font-semibold mb-2">Inquiry about: {property.title}</h3>
                  <Link href={`/listing/${property.id}`}>
                    <div className="flex items-center gap-4 p-3 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <Avatar className="h-[75px] w-[100px] rounded-md">
                         <AvatarImage 
                          src={property.images[0]} 
                          alt={property.title} 
                          className="object-cover"
                          data-ai-hint={`${property.type.toLowerCase()} exterior`}
                        />
                         <AvatarFallback className="rounded-md bg-secondary flex-col gap-1">
                            <Building2 className="w-6 h-6 text-muted-foreground/50" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{property.title}</p>
                        <p className="text-sm text-muted-foreground">{property.address}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
              <div className="prose prose-lg text-foreground max-w-none mt-6 bg-secondary/30 p-4 rounded-lg">
                <p>{message.body}</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <h3 className="text-xl font-headline font-semibold mb-4">Your Reply</h3>
                <div className="grid w-full gap-4">
                  <Textarea placeholder={`Hi ${message.name.split(' ')[0]},\n\n`} rows={6} />
                  <Button size="lg" className="justify-self-end">
                    <Send className="mr-2 h-5 w-5" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
