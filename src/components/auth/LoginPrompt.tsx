'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';
import { LogIn } from "lucide-react";

interface LoginPromptProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function LoginPrompt({ isOpen, onOpenChange }: LoginPromptProps) {
  const router = useRouter();

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <LogIn className="w-6 h-6 text-primary" />
            Authentication Required
          </AlertDialogTitle>
          <AlertDialogDescription>
            You need to be logged in to perform this action. Please log in or create an account to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => router.push('/login')}>
            Go to Login
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
