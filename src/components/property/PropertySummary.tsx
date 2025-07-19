'use client';

import { useState, useEffect } from 'react';
import { generateSummaryAction } from '@/app/actions/generateSummaryAction';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';

interface PropertySummaryProps {
  propertyDescription: string;
  propertyFeatures: string;
}

export default function PropertySummary({ propertyDescription, propertyFeatures }: PropertySummaryProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSummary() {
      setIsLoading(true);
      const result = await generateSummaryAction({ propertyDescription, propertyFeatures });
      setSummary(result);
      setIsLoading(false);
    }
    getSummary();
  }, [propertyDescription, propertyFeatures]);

  if (isLoading) {
    return (
      <div>
        <h3 className="text-2xl font-headline font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          AI Summary
        </h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-headline font-semibold mb-4 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-primary" />
        AI-Generated Summary
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">{summary}</p>
    </div>
  );
}
