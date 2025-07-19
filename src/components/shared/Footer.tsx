import Link from "next/link";
import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/40">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-headline">Properly</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Properly. All rights reserved.
          </p>
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/messages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
