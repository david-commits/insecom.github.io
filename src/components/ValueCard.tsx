import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-4 rounded-full bg-primary/5 border-2 border-primary/20">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-sm">{description}</p>
    </div>
  );
};
