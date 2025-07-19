import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/hooks/useAuth.tsx";

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: "Properly - Your Home for Real Estate",
  description: "Find your next home with Properly. Browse listings, connect with sellers, and discover the perfect property.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("antialiased", fontBody.variable, fontHeadline.variable)}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen font-body">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDTAWQ2aQW3a4ZiPTR0c2VZ_EaHk-TUTZI&libraries=places`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
