import { PageLayout } from "@/components/layout/PageLayout";
import { FundCard } from "@/components/shared/FundCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockPartners = [
  {
    id: 1,
    name: "Благотворительный фонд «Закят»",
    country: "Россия",
    description: "Помощь нуждающимся мусульманам по всему миру",
    verified: true,
  },
  {
    id: 2,
    name: "Islamic Relief",
    country: "Международный",
    description: "Международная благотворительная организация",
    verified: true,
  },
  {
    id: 3,
    name: "Фонд строительства мечетей",
    country: "Россия",
    description: "Строительство и восстановление мечетей",
    verified: true,
  },
];

const Partners = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="space-y-4 animate-slide-up">
        <div className="p-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Фонды-партнёры</h1>
            <p className="text-sm text-muted-foreground">Проверенные организации</p>
          </div>
        </div>

        <div className="px-4 space-y-3">
          {mockPartners.map((partner) => (
            <div key={partner.id} className="space-y-2">
              <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium">
                {partner.country}
              </span>
              <FundCard
                name={partner.name}
                description={partner.description}
                verified={partner.verified}
                onDonate={() => navigate(`/donate/${partner.id}`)}
              />
            </div>
          ))}
        </div>

        <div className="p-4">
          <div className="card-flat p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Хотите стать партнёром?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Подайте заявку на размещение вашего фонда на платформе
              </p>
              <Button 
                variant="outline" 
                className="rounded-xl"
                onClick={() => navigate("/partners/apply")}
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Partners;
