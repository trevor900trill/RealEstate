import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideProps } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
}

export default function AnalyticsCard({ title, value, icon: Icon }: AnalyticsCardProps) {
  return (
    <Card className="shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-5 w-5 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
