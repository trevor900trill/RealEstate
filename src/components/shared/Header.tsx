
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2, Heart, LogOut, Mail, UserPlus, Home, LayoutList } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/hooks/useAuth.tsx";
import LoginPrompt from "../auth/LoginPrompt";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#listings", label: "Listings" },
  { href: "/seller-dashboard", label: "For Sellers" },
];

export default function Header() {
  const pathname = usePathname();
  const { isLoggedIn, isSeller, logout } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleSellerNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginPrompt(true);
    }
  };

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline tracking-tight">ResiConnect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => {
            // Specific check for homepage vs hash links on homepage
            const isActive = link.href === '/' 
              ? pathname === '/' 
              : link.href.startsWith('/#') 
                ? pathname === '/' // Highlight listings on homepage
                : pathname.startsWith(link.href) && link.href !== '/';

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.label === "For Sellers" ? handleSellerNav : undefined}
                className={cn(
                  "transition-colors hover:text-primary pb-1",
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          {isLoggedIn ? (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://placehold.co/100x100/e07a5f/f2e8e5" alt="User" data-ai-hint="person" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                 {isSeller ? (
                  <>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Seller Account</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        seller@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                   <DropdownMenuItem asChild>
                    <Link href="/seller-dashboard"><LayoutList className="mr-2 h-4 w-4" />Dashboard</Link>
                  </DropdownMenuItem>
                   <DropdownMenuItem asChild>
                      <Link href="/messages"><Mail className="mr-2 h-4 w-4" />Messages</Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Buyer Account</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          buyer@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/favorites"><Heart className="mr-2 h-4 w-4" />Favorites</Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                      <Link href="/messages"><Mail className="mr-2 h-4 w-4" />Messages</Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                   <LogOut className="mr-2 h-4 w-4" />
                   Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <UserPlus />
                    Register
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>I am a...</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/register">Buyer</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/seller-register">Seller</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                 <Link href="/" className="flex items-center gap-2 mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-headline">ResiConnect</span>
                </Link>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="grid gap-4 py-6">
                  <Link href="/" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link href="/#listings" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <LayoutList className="h-5 w-5" />
                    Listings
                  </Link>
                  <Link href="/seller-dashboard" onClick={handleSellerNav} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <Building2 className="h-5 w-5" />
                    For Sellers
                  </Link>
                  {isLoggedIn && (
                    <>
                    <Link href="/favorites" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                      <Heart className="h-5 w-5" />
                      Favorites
                    </Link>
                    <Link href="/messages" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                      <Mail className="h-5 w-5" />
                      Messages
                    </Link>
                    </>
                  )}
                </nav>
                <div className="border-t pt-6 mt-auto">
                  {isLoggedIn ? (
                    <Button className="w-full" onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </Button>
                  ) : (
                    <div className="grid gap-2">
                      <Button variant="outline" className="w-full" asChild><Link href="/login">Sign In</Link></Button>
                      <Button className="w-full" asChild><Link href="/register">Register</Link></Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <LoginPrompt isOpen={showLoginPrompt} onOpenChange={setShowLoginPrompt} />
    </>
  );
}
