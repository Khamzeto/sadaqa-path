import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { FundCard } from "@/components/shared/FundCard";
import { FilterSheet } from "@/components/shared/FilterSheet";
import { useNavigate } from "react-router-dom";

const mockFunds = [
  {
    id: 1,
    name: "Благотворительный фонд «Закят»",
    description: "Помощь нуждающимся мусульманам по всему миру",
    verified: true,
    country: "international",
    category: "all",
  },
  {
    id: 2,
    name: "Фонд строительства мечетей",
    description: "Строительство и восстановление мечетей в России",
    verified: true,
    country: "russia",
    category: "mosque",
  },
  {
    id: 3,
    name: "Помощь сиротам Сирии",
    description: "Обеспечение детей-сирот питанием, одеждой и образованием",
    verified: true,
    country: "syria",
    category: "orphans",
  },
  {
    id: 4,
    name: "Мусульманская умма",
    description: "Поддержка образовательных проектов для мусульман",
    verified: true,
    country: "russia",
    category: "education",
  },
];

const Donate = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    country: "",
    category: "",
    sort: "date",
  });

  const filteredFunds = mockFunds.filter((fund) => {
    if (filters.country && filters.country !== "all" && fund.country !== filters.country) {
      return false;
    }
    if (filters.category && filters.category !== "all" && fund.category !== filters.category) {
      return false;
    }
    return true;
  });

  const handleDonate = (fundId: number) => {
    navigate(`/donate/${fundId}`);
  };

  return (
    <PageLayout
      title="Пожертвовать"
      rightAction={<FilterSheet onFilterChange={setFilters} />}
    >
      <div className="p-4 space-y-3">
        {filteredFunds.map((fund) => (
          <FundCard
            key={fund.id}
            name={fund.name}
            description={fund.description}
            verified={fund.verified}
            onDonate={() => handleDonate(fund.id)}
          />
        ))}
        
        {filteredFunds.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground">Фонды не найдены</p>
            <p className="text-sm text-muted-foreground mt-2">
              Попробуйте изменить фильтры
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Donate;
