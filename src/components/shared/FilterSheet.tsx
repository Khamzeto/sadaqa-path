import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

interface FilterSheetProps {
  onFilterChange: (filters: {
    country: string;
    category: string;
    sort: string;
  }) => void;
}

export const FilterSheet = ({ onFilterChange }: FilterSheetProps) => {
  const [country, setCountry] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("date");
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    onFilterChange({ country, category, sort });
    setOpen(false);
  };

  const handleReset = () => {
    setCountry("");
    setCategory("");
    setSort("date");
    onFilterChange({ country: "", category: "", sort: "date" });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-lg">
          <Filter className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="max-w-lg mx-auto rounded-t-3xl">
        <SheetHeader>
          <SheetTitle>Фильтры</SheetTitle>
          <SheetDescription>
            Настройте параметры поиска
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <Label>Страна</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Все страны" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все страны</SelectItem>
                <SelectItem value="russia">Россия</SelectItem>
                <SelectItem value="syria">Сирия</SelectItem>
                <SelectItem value="palestine">Палестина</SelectItem>
                <SelectItem value="international">Международные</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Категория</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Все категории" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="mosque">Мечети</SelectItem>
                <SelectItem value="orphans">Сироты</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
                <SelectItem value="food">Питание</SelectItem>
                <SelectItem value="medical">Медицина</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Сортировка</Label>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">По дате</SelectItem>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="amount">По сумме</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1 rounded-xl"
              onClick={handleReset}
            >
              Сбросить
            </Button>
            <Button
              className="flex-1 rounded-xl"
              onClick={handleApply}
            >
              Применить
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
