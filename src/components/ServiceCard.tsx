import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card group hover:border-tertiary">
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 rounded-lg bg-muted group-hover:bg-tertiary/10 transition-colors">
          <Icon className="w-8 h-8 text-tertiary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
