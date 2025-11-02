import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "basic",
    name: "Базовый",
    price: 290,
    period: "мес",
    features: [
      "Ежемесячные пожертвования",
      "История транзакций",
      "Уведомления о проектах",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 870,
    period: "3 мес",
    originalPrice: 870,
    features: [
      "Всё из Базового",
      "5% идёт на садаку",
      "Детальные отчёты",
      "Приоритетная поддержка",
    ],
    highlight: true,
    badge: "+2 мес в подарок",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2320,
    period: "12 мес",
    features: [
      "Всё из Pro",
      "10% идёт на садаку",
      "Персональный менеджер",
      "Эксклюзивные проекты",
      "Налоговый вычет",
    ],
    highlight: false,
    badge: "+2 мес в подарок",
  },
];

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = () => {
    if (selectedPlan) {
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
            <h1 className="text-xl font-bold">Подписка</h1>
            <p className="text-sm text-muted-foreground">Садака-джария</p>
          </div>
        </div>

        <div className="space-y-4">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={cn(
                "w-full text-left card-flat p-5 relative transition-all",
                selectedPlan === plan.id && "ring-2 ring-primary",
                plan.highlight && "bg-primary/5"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-2 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                  {plan.badge}
                </span>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold">{plan.price} ₽</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>
                
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                  selectedPlan === plan.id
                    ? "border-primary bg-primary"
                    : "border-border"
                )}>
                  {selectedPlan === plan.id && (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
              </div>
              
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <Button
          className="w-full h-14 text-lg rounded-xl"
          disabled={!selectedPlan}
          onClick={handleSubscribe}
        >
          Оформить подписку
        </Button>

        <p className="text-center text-xs text-muted-foreground px-4">
          Подписку можно отменить в любой момент в настройках
        </p>
      </div>
    </PageLayout>
  );
};

export default Subscription;
