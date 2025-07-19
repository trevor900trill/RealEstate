import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth/AuthLayout";
import { Building2 } from "lucide-react";

export default function RegisterPage() {
  return (
    <AuthLayout>
       <Card>
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
              <Link href="/" className="flex items-center gap-2 text-foreground">
                  <Building2 className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold font-headline tracking-tight">Properly</span>
              </Link>
            </div>
          <CardTitle className="text-3xl font-headline">Create an account</CardTitle>
          <CardDescription>Enter your information to create your buyer account.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Max Robinson" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
           <div className="text-center text-sm">
            Are you a seller?{" "}
            <Link href="/seller-register" className="underline">
              Create a seller account
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
