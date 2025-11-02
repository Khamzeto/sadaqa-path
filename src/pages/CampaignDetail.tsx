import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AmountSelector } from "@/components/shared/AmountSelector";
import { ArrowLeft, Users, Calendar, Building2, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const mockCampaignData = {
  "1": {
    title: "Строительство школы в Дагестане",
    description: "Проект по строительству современной исламской школы для 300 учеников в горном районе Дагестана. Школа будет оснащена современным оборудованием, библиотекой и спортивным залом.",
    goal: 5000000,
    raised: 3250000,
    participants: 1247,
    deadline: "2024-06-30",
    fund: "Фонд образования",
    category: "Образование",
  },
  "2": {
    title: "Помощь беженцам из Сирии",
    description: "Программа поддержки сирийских беженцев в Турции. Обеспечение продуктами питания, медикаментами и средствами первой необходимости для 500 семей.",
    goal: 2000000,
    raised: 1800000,
    participants: 856,
    deadline: "2024-05-15",
    fund: "Islamic Relief",
    category: "Гуманитарная помощь",
  },
  "3": {
    title: "Обеспечение сирот питанием на год",
    description: "Годовая программа обеспечения горячим питанием 200 детей-сирот в приютах Чечни и Ингушетии.",
    goal: 1500000,
    raised: 450000,
    participants: 324,
    deadline: "2024-12-31",
    fund: "Помощь сиротам",
    category: "Питание",
  },
};

const CampaignDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDonateDialog, setShowDonateDialog] = useState(false);
  const [amount, setAmount] = useState<number>(0);

  const campaign = mockCampaignData[id as keyof typeof mockCampaignData];

  if (!campaign) {
    navigate("/campaigns");
    return null;
  }

  const progress = (campaign.raised / campaign.goal) * 100;
  const daysLeft = Math.ceil(
    (new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const handleDonate = () => {
    if (amount > 0) {
      setShowDonateDialog(false);
      navigate("/donate/success");
    }
  };

  return (
    <PageLayout>
      <div className="animate-slide-up">
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold flex-1">Детали кампании</h1>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">{campaign.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {campaign.category}
              </span>
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {daysLeft} дней осталось
              </span>
            </div>
          </div>

          <div className="card-flat p-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Собрано</span>
              <span className="text-2xl font-bold">
                {campaign.raised.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Цель: {campaign.goal.toLocaleString('ru-RU')} ₽
              </span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{campaign.participants}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Описание</h3>
            <p className="text-muted-foreground leading-relaxed">
              {campaign.description}
            </p>
          </div>

          <div className="card-flat p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Фонд-партнёр</p>
              <p className="font-semibold truncate">{campaign.fund}</p>
            </div>
          </div>

          <Dialog open={showDonateDialog} onOpenChange={setShowDonateDialog}>
            <DialogTrigger asChild>
              <Button className="w-full h-14 text-lg rounded-xl sticky bottom-20 shadow-lg">
                Присоединиться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm rounded-3xl">
              <DialogHeader>
                <DialogTitle>Сумма пожертвования</DialogTitle>
                <DialogDescription>
                  Выберите или введите сумму
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <AmountSelector onAmountChange={setAmount} />
                <Button
                  className="w-full h-12 rounded-xl"
                  disabled={amount === 0}
                  onClick={handleDonate}
                >
                  Пожертвовать
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageLayout>
  );
};

export default CampaignDetail;
