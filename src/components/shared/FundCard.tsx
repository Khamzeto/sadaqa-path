import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FundCardProps {
  logo?: string;
  name: string;
  description: string;
  verified?: boolean;
  onDonate: () => void;
}

export const FundCard = ({
  logo,
  name,
  description,
  verified = true,
  onDonate,
}: FundCardProps) => {
  return (
    <div className="card-flat p-4 animate-fade-in">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
          {logo ? (
            <img src={logo} alt={name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <span className="text-lg font-bold text-muted-foreground">
              {name.substring(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            {verified && (
              <Shield className="w-4 h-4 text-primary shrink-0" fill="currentColor" />
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
          <Button 
            onClick={onDonate}
            size="sm"
            className="w-full rounded-lg"
          >
            Помочь
          </Button>
        </div>
      </div>
    </div>
  );
};
