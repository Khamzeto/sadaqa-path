import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { CampaignCard } from "@/components/shared/CampaignCard";
import { FilterSheet } from "@/components/shared/FilterSheet";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockCampaigns = [
  {
    id: 1,
    title: "Строительство школы в Дагестане",
    goal: 5000000,
    raised: 3250000,
    participants: 1247,
    country: "russia",
    category: "education",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Помощь беженцам из Сирии",
    goal: 2000000,
    raised: 1800000,
    participants: 856,
    country: "syria",
    category: "food",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: "Обеспечение сирот питанием на год",
    goal: 1500000,
    raised: 450000,
    participants: 324,
    country: "russia",
    category: "orphans",
    date: "2024-01-10",
  },
];

const Campaigns = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    country: "",
    category: "",
    sort: "date",
  });

  const filteredCampaigns = mockCampaigns
    .filter((campaign) => {
      if (filters.country && filters.country !== "all" && campaign.country !== filters.country) {
        return false;
      }
      if (filters.category && filters.category !== "all" && campaign.category !== filters.category) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "popular") {
        return b.participants - a.participants;
      }
      if (filters.sort === "amount") {
        return b.raised - a.raised;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <PageLayout
      title="Целевые кампании"
      rightAction={
        <div className="flex gap-2">
          <FilterSheet onFilterChange={setFilters} />
          <Button
            size="icon"
            className="rounded-lg"
            onClick={() => navigate("/campaigns/create")}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      }
    >
      <div className="p-4 space-y-4">
        {filteredCampaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            title={campaign.title}
            goal={campaign.goal}
            raised={campaign.raised}
            participants={campaign.participants}
            onJoin={() => navigate(`/campaigns/${campaign.id}`)}
          />
        ))}
        
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground">Кампании не найдены</p>
            <p className="text-sm text-muted-foreground mt-2">
              Попробуйте изменить фильтры
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Campaigns;
