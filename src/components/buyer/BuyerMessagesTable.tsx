import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Message } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BuyerMessagesTableProps {
  messages: Message[];
}

export default function BuyerMessagesTable({ messages }: BuyerMessagesTableProps) {
  if (messages.length === 0) {
     return (
        <div className="text-center py-16 border-2 border-dashed rounded-xl bg-background">
            <h2 className="text-2xl font-semibold">No Messages Found</h2>
            <p className="text-muted-foreground mt-2">
                Your search did not return any messages.
            </p>
        </div>
    );
  }
  
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Agent</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message.id} className={cn(message.status === 'Unread' && 'bg-primary/5 font-semibold')}>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.property}</TableCell>
              <TableCell>{message.date}</TableCell>
              <TableCell>
                <Badge variant={message.status === 'Unread' ? 'default' : 'secondary'} className={cn(message.status === 'Unread' && 'bg-primary/80')}>
                  {message.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/messages/${message.id}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
