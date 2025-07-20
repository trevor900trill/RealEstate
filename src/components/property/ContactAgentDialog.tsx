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
  const [message, setMessage] = useState('');

  const defaultMessage = `Hello ${agent.name.split(' ')[0]},\n\nI'm interested in the property "${property.title}" located at ${property.address}.\n\nCould you please provide more information?\n\nThanks,`;

  const handleSubmit = () => {
    const subject = `Inquiry about ${property.title}`;
    const body = message || defaultMessage;
    window.location.href = `mailto:agent@placeholder.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-headline">
            <MessageSquare className="w-6 h-6 text-primary" />
            Contact {agent.name}
          </DialogTitle>
          <DialogDescription>
            This will open your default email client to send a message to the agent.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Textarea
            placeholder="Type your message here."
            rows={8}
            defaultValue={defaultMessage}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button type="submit" size="lg" onClick={handleSubmit}>
            <Send className="mr-2 h-5 w-5" />
            Send via Email
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
