import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FundCard } from "@/components/shared/FundCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockFunds = [
  {
    id: 1,
    name: "Благотворительный фонд «Закят»",
    description: "Помощь нуждающимся мусульманам по всему миру",
    verified: true,
  },
  {
    id: 2,
    name: "Фонд строительства мечетей",
    description: "Строительство и восстановление мечетей в России",
    verified: true,
  },
  {
    id: 3,
    name: "Помощь сиротам Сирии",
    description: "Обеспечение детей-сирот питанием, одеждой и образованием",
    verified: true,
  },
  {
    id: 4,
    name: "Мусульманская умма",
    description: "Поддержка образовательных проектов для мусульман",
    verified: true,
  },
];

const Donate = () => {
  const navigate = useNavigate();
  const [selectedFund, setSelectedFund] = useState<number | null>(null);

  const handleDonate = (fundId: number) => {
    setSelectedFund(fundId);
    navigate(`/donate/${fundId}`);
  };

  return (
    <PageLayout
      title="Пожертвовать"
      rightAction={
        <Button variant="ghost" size="icon" className="rounded-lg">
          <Filter className="w-5 h-5" />
        </Button>
      }
    >
      <div className="p-4 space-y-3">
        {mockFunds.map((fund) => (
          <FundCard
            key={fund.id}
            name={fund.name}
            description={fund.description}
            verified={fund.verified}
            onDonate={() => handleDonate(fund.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default Donate;
