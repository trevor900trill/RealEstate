
'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sellerMessages, properties } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { Mail, AlertTriangle, Search } from "lucide-react";
import LoginPrompt from "@/components/auth/LoginPrompt";
import { useAuth } from "@/hooks/useAuth.tsx";
import { useEffect, useState, useMemo } from "react";
import MessagesTable from "@/components/seller/MessagesTable";
import BuyerMessagesTable from "@/components/buyer/BuyerMessagesTable";
import { Input } from "@/components/ui/input";

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


export default function MessagesPage() {
    const { isLoggedIn, isSeller } = useAuth();
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (!isLoggedIn) {
            setShowLoginPrompt(true);
        }
    }, [isLoggedIn]);

    const filteredSellerMessages = useMemo(() => {
        return sellerMessages.filter(m => 
            m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.property.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const filteredBuyerMessages = useMemo(() => {
        return buyerMessages.filter(m =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.property.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

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
                            {isSeller ? "Your Inboxes" : "Your Inbox"}
                        </CardTitle>
                         <CardDescription>
                            {isSeller ? "Manage messages from potential buyers about your listings." : "Conversations with agents about properties you're interested in."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input 
                                    placeholder="Search messages..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                       {isSeller ? (
                           <MessagesTable messages={filteredSellerMessages} />
                       ) : (
                           <BuyerMessagesTable messages={filteredBuyerMessages} />
                       )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
