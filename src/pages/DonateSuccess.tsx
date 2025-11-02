import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Share2, Repeat } from "lucide-react";

const DonateSuccess = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-6 animate-scale-in">
        <div className="text-center space-y-6 max-w-sm">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Спасибо за вашу садаку!</h1>
            <p className="text-muted-foreground">
              Ваше пожертвование получено. Да воздаст вам Аллах благом!
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl"
              onClick={() => {/* Share logic */}}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Поделиться
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl"
              onClick={() => navigate("/subscription")}
            >
              <Repeat className="w-4 h-4 mr-2" />
              Сделать регулярным
            </Button>
            
            <Button
              className="w-full h-12 rounded-xl"
              onClick={() => navigate("/")}
            >
              На главную
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DonateSuccess;
