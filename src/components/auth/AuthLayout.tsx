
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Building2 } from 'lucide-react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          {children}
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <Avatar className="h-full w-full rounded-none">
            <AvatarImage
            src="https://placehold.co/1200x1000/e07a5f/f2e8e5"
            alt="A beautiful modern house"
            data-ai-hint="modern house exterior"
            className="h-full w-full object-cover"
            />
            <AvatarFallback className="rounded-none bg-secondary flex-col gap-2">
                <Building2 className="w-24 h-24 text-muted-foreground/20" />
            </AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-4xl font-headline font-bold">Welcome to {'{Placeholder}'}</h2>
          <p className="text-lg mt-2 max-w-lg">Your journey to finding the perfect home starts here. Connect with sellers and discover unique properties.</p>
        </div>
      </div>
    </div>
  );
}
