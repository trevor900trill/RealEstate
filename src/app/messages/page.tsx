
'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { sellerMessages, properties } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mail, AlertTriangle } from "lucide-react";
import LoginPrompt from "@/components/auth/LoginPrompt";
import { useAuth } from "@/hooks/useAuth.tsx";
import { useEffect, useState } from "react";
import MessagesTable from "@/components/seller/MessagesTable";

// For demo purposes, we'll pretend these are the buyer's messages
// In a real app, this data would come from a database based on the user's ID
const buyerMessages = sellerMessages.slice(3, 5).map(m => {
    const property = properties.find(p => p.title === m.property);
    return {
        ...m,
        name: property ? property.agent.name : 'Listing Agent', // Simulate agent name
        avatar: property ? property.agent.avatar : 'https://placehold.co/100x100/e07a5f/f2e8e5',
        id: `B-${m.id}`
    }
});

const BuyerInbox = () => (
    <div className="space-y-4">
        {buyerMessages.length > 0 ? buyerMessages.map((message) => (
            <Link href={`/messages/${message.id}`} key={message.id}>
                <div className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border hover:bg-secondary/50 transition-colors",
                    message.status === 'Unread' && 'bg-primary/5'
                )}>
                    <Avatar className="w-12 h-12 border-2 border-primary/40">
                        <AvatarImage src={message.avatar} alt={message.name} data-ai-hint="professional portrait" />
                        <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className={cn("font-semibold", message.status === 'Unread' && 'text-primary')}>{message.name}</p>
                                <p className="text-sm font-bold text-muted-foreground">Inquiry about: {message.property}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">{message.date}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {message.body}
                        </p>
                    </div>
                </div>
            </Link>
        )) : (
            <div className="text-center py-16 border-2 border-dashed rounded-xl bg-background">
                <h2 className="text-2xl font-semibold">No Messages Yet</h2>
                <p className="text-muted-foreground mt-2">
                    When you contact a seller, your conversation will appear here.
                </p>
            </div>
        )}
    </div>
);


export default function MessagesPage() {
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
                    <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h1 className="text-4xl font-headline font-bold mb-4">Access Denied</h1>
                    <p className="text-muted-foreground text-lg mb-8">Please log in to view your messages.</p>
                    <Button asChild size="lg">
                        <Link href="/login">Go to Login</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-secondary/40 min-h-[calc(100vh-4rem)]">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-3xl font-headline">
                            <Mail className="w-8 h-8 text-primary" />
                            {isSeller ? "Seller Inbox" : "Your Inbox"}
                        </CardTitle>
                         <CardDescription>
                            {isSeller ? "Manage messages from potential buyers about your listings." : "Conversations with agents about properties you're interested in."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                       {isSeller ? (
                           <MessagesTable messages={sellerMessages} />
                       ) : (
                           <BuyerInbox />
                       )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
