import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { CampaignCard } from "@/components/shared/CampaignCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";

const mockCampaigns = [
  {
    id: 1,
    title: "Строительство школы в Дагестане",
    goal: 5000000,
    raised: 3250000,
    participants: 1247,
  },
  {
    id: 2,
    title: "Помощь беженцам из Сирии",
    goal: 2000000,
    raised: 1800000,
    participants: 856,
  },
  {
    id: 3,
    title: "Обеспечение сирот питанием на год",
    goal: 1500000,
    raised: 450000,
    participants: 324,
  },
];

const Campaigns = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Целевые кампании"
      rightAction={
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => {/* Filter logic */}}
          >
            <Filter className="w-5 h-5" />
          </Button>
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
        {mockCampaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            title={campaign.title}
            goal={campaign.goal}
            raised={campaign.raised}
            participants={campaign.participants}
            onJoin={() => navigate(`/campaigns/${campaign.id}`)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default Campaigns;
