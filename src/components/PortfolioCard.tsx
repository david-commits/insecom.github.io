import { Card } from "@/components/ui/card";

interface PortfolioCardProps {
  image: string;
  title: string;
  year: string;
}

export const PortfolioCard = ({ image, title, year }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-border">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{year}</p>
      </div>
    </Card>
  );
};
