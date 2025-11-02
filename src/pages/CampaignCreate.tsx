import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const CampaignCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    goal: "",
    deadline: "",
    fund: "",
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast.error("Необходимо принять условия");
      return;
    }

    // Имитация отправки на модерацию
    toast.success("Заявка отправлена на модерацию!");
    setTimeout(() => {
      navigate("/campaigns");
    }, 1500);
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
            <h1 className="text-xl font-bold">Создать кампанию</h1>
            <p className="text-sm text-muted-foreground">Запустите сбор средств</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="card-flat p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Название кампании *</Label>
              <Input
                id="title"
                placeholder="Введите название"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Описание *</Label>
              <Textarea
                id="description"
                placeholder="Расскажите о вашей кампании"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                className="rounded-xl min-h-32"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Категория *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mosque">Мечети</SelectItem>
                  <SelectItem value="orphans">Сироты</SelectItem>
                  <SelectItem value="education">Образование</SelectItem>
                  <SelectItem value="food">Питание</SelectItem>
                  <SelectItem value="medical">Медицина</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="goal">Цель сбора (₽) *</Label>
                <Input
                  id="goal"
                  type="number"
                  placeholder="500000"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Срок окончания *</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fund">Фонд-партнёр</Label>
              <Select
                value={formData.fund}
                onValueChange={(value) => setFormData({ ...formData, fund: value })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Выберите фонд (опционально)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zakat">Фонд «Закят»</SelectItem>
                  <SelectItem value="mosque">Фонд строительства мечетей</SelectItem>
                  <SelectItem value="orphans">Помощь сиротам</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="agreement"
                checked={formData.agreement}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, agreement: checked as boolean })
                }
              />
              <Label htmlFor="agreement" className="text-sm leading-relaxed cursor-pointer">
                Я согласен с условиями размещения и подтверждаю достоверность информации
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-lg rounded-xl"
            disabled={!formData.agreement}
          >
            Отправить на модерацию
          </Button>

          <p className="text-center text-xs text-muted-foreground px-4">
            Модерация заявки занимает 1-2 рабочих дня
          </p>
        </form>
      </div>
    </PageLayout>
  );
};

export default CampaignCreate;
