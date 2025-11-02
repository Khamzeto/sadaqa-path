import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AmountSelector } from "@/components/shared/AmountSelector";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Support = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);

  const handleSupport = () => {
    if (amount > 0) {
      navigate("/donate/success");
    }
  };

  return (
    <PageLayout>
      <div className="p-4 space-y-6 animate-slide-up">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Поддержать проект</h1>
            <p className="text-sm text-muted-foreground">Быстрое пожертвование</p>
          </div>
        </div>

        <div className="card-flat p-6 space-y-6">
          <div className="text-center pb-4">
            <p className="text-muted-foreground">
              Ваша поддержка помогает нам развивать платформу и помогать большему количеству нуждающихся
            </p>
          </div>

          <AmountSelector 
            presets={[500, 1000, 2500, 5000]}
            onAmountChange={setAmount} 
          />
          
          <Button
            className="w-full h-14 text-lg rounded-xl"
            disabled={amount === 0}
            onClick={handleSupport}
          >
            Поддержать проект
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Support;
