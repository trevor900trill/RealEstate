import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth/AuthLayout";
import { Building2 } from "lucide-react";

export default function LoginPage() {
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
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="/reset-password" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
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
