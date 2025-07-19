'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth/AuthLayout";
import { Building2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth.tsx";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    // For this dummy app, we'll just log in as a buyer.
    login({ isSeller: false });
    router.push('/');
  };
  
  const handleSellerLogin = () => {
    // Dummy login for a seller
    login({ isSeller: true });
    router.push('/seller-dashboard');
  };

  return (
    <AuthLayout>
      <Card>
        <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Link href="/" className="flex items-center gap-2 text-foreground">
                  <Building2 className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold font-headline tracking-tight">ResiConnect</span>
              </Link>
            </div>
          <CardTitle className="text-3xl font-headline">Welcome Back</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required defaultValue="buyer@example.com" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/reset-password" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required defaultValue="password" />
            </div>
            <Button type="submit" className="w-full">
              Login as Buyer
            </Button>
          </form>
          <Button variant="outline" className="w-full mt-4" onClick={handleSellerLogin}>
              Login as Seller (Demo)
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
