import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AmountSelector } from "@/components/shared/AmountSelector";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DonateAmount = () => {
  const navigate = useNavigate();
  const { fundId } = useParams();
  const [amount, setAmount] = useState<number>(0);

  const handlePayment = () => {
    if (amount > 0) {
      navigate(`/donate/success`);
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
            <h1 className="text-xl font-bold">Сумма пожертвования</h1>
            <p className="text-sm text-muted-foreground">Выберите или введите сумму</p>
          </div>
        </div>

        <div className="card-flat p-6 space-y-6">
          <AmountSelector onAmountChange={setAmount} />
          
          <Button
            className="w-full h-14 text-lg rounded-xl"
            disabled={amount === 0}
            onClick={handlePayment}
          >
            Перейти к оплате
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground px-4">
          Все средства идут напрямую в благотворительный фонд
        </div>
      </div>
    </PageLayout>
  );
};

export default DonateAmount;
