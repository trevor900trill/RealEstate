"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { Property } from '@/lib/types';
import { Send, MessageSquare } from 'lucide-react';

interface ContactAgentDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  property: Property;
  agent: Property['agent'];
}

export default function ContactAgentDialog({ isOpen, onOpenChange, property, agent }: ContactAgentDialogProps) {
  const [includeListing, setIncludeListing] = useState(true);

  const defaultMessage = `Hello ${agent.name.split(' ')[0]},\n\nI'm interested in the property "${property.title}" located at ${property.address}.\n\nCould you please provide more information?\n\nThanks,`;
  const messageWithoutListing = `Hello ${agent.name.split(' ')[0]},\n\nI'm interested in one of your properties.\n\nCould you please provide more information?\n\nThanks,`;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-headline">
            <MessageSquare className="w-6 h-6 text-primary" />
            Contact {agent.name}
          </DialogTitle>
          <DialogDescription>
            Send a message directly to the listing agent. They will receive it in their seller dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="include-listing"
              checked={includeListing}
              onCheckedChange={setIncludeListing}
            />
            <Label htmlFor="include-listing" className="cursor-pointer">Attach current listing to message</Label>
          </div>
          <Textarea
            placeholder="Type your message here."
            rows={8}
            defaultValue={includeListing ? defaultMessage : messageWithoutListing}
            key={includeListing ? 'with-listing' : 'without-listing'}
          />
        </div>
        <DialogFooter>
          <Button type="submit" size="lg" onClick={() => onOpenChange(false)}>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
