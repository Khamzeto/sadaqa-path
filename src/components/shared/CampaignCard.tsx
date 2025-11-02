import { Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CampaignCardProps {
  title: string;
  image?: string;
  goal: number;
  raised: number;
  participants: number;
  onJoin: () => void;
}

export const CampaignCard = ({
  title,
  image,
  goal,
  raised,
  participants,
  onJoin,
}: CampaignCardProps) => {
  const progress = (raised / goal) * 100;
  
  return (
    <div className="card-flat overflow-hidden animate-fade-in">
      {image && (
        <div className="w-full h-40 bg-muted">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Собрано</span>
            <span className="font-semibold">{raised.toLocaleString('ru-RU')} ₽</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Цель: {goal.toLocaleString('ru-RU')} ₽</span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{participants}</span>
            </div>
          </div>
        </div>
        
        <Button onClick={onJoin} className="w-full rounded-lg">
          Присоединиться
        </Button>
      </div>
    </div>
  );
};
