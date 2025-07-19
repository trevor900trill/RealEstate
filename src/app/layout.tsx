import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResiConnect - Your Home for Real Estate",
  description: "Find your next home with ResiConnect. Browse listings, connect with sellers, and discover the perfect property.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDTAWQ2aQW3a4ZiPTR0c2VZ_EaHk-TUTZI&libraries=places`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
