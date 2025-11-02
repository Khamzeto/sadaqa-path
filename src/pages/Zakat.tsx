import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calculator } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Zakat = () => {
  const navigate = useNavigate();
  const [calculated, setCalculated] = useState(false);
  const [zakatAmount, setZakatAmount] = useState(0);
  
  const [values, setValues] = useState({
    cash: "",
    gold: "",
    silver: "",
    investments: "",
    debts: "",
  });

  const calculateZakat = () => {
    const total = 
      (parseFloat(values.cash) || 0) +
      (parseFloat(values.gold) || 0) +
      (parseFloat(values.silver) || 0) +
      (parseFloat(values.investments) || 0) -
      (parseFloat(values.debts) || 0);
    
    const nisab = 85 * 5000; // Примерный нисаб в рублях
    
    if (total >= nisab) {
      setZakatAmount(total * 0.025);
      setCalculated(true);
    }
  };

  const handlePayment = () => {
    navigate("/donate/success");
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
            <h1 className="text-xl font-bold">Калькулятор закята</h1>
            <p className="text-sm text-muted-foreground">Рассчитайте размер закята</p>
          </div>
        </div>

        {!calculated ? (
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="cash" className="card-flat px-4 border-0">
                <AccordionTrigger className="hover:no-underline">
                  Денежные средства
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Label htmlFor="cash">Сумма в рублях</Label>
                  <Input
                    id="cash"
                    type="number"
                    placeholder="0"
                    value={values.cash}
                    onChange={(e) => setValues({ ...values, cash: e.target.value })}
                    className="mt-2"
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gold" className="card-flat px-4 border-0">
                <AccordionTrigger className="hover:no-underline">
                  Золото
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Label htmlFor="gold">Стоимость в рублях</Label>
                  <Input
                    id="gold"
                    type="number"
                    placeholder="0"
                    value={values.gold}
                    onChange={(e) => setValues({ ...values, gold: e.target.value })}
                    className="mt-2"
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="silver" className="card-flat px-4 border-0">
                <AccordionTrigger className="hover:no-underline">
                  Серебро
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Label htmlFor="silver">Стоимость в рублях</Label>
                  <Input
                    id="silver"
                    type="number"
                    placeholder="0"
                    value={values.silver}
                    onChange={(e) => setValues({ ...values, silver: e.target.value })}
                    className="mt-2"
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="investments" className="card-flat px-4 border-0">
                <AccordionTrigger className="hover:no-underline">
                  Инвестиции / Товар
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Label htmlFor="investments">Стоимость в рублях</Label>
                  <Input
                    id="investments"
                    type="number"
                    placeholder="0"
                    value={values.investments}
                    onChange={(e) => setValues({ ...values, investments: e.target.value })}
                    className="mt-2"
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="debts" className="card-flat px-4 border-0">
                <AccordionTrigger className="hover:no-underline">
                  Долги
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Label htmlFor="debts">Сумма долгов в рублях</Label>
                  <Input
                    id="debts"
                    type="number"
                    placeholder="0"
                    value={values.debts}
                    onChange={(e) => setValues({ ...values, debts: e.target.value })}
                    className="mt-2"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button
              className="w-full h-14 text-lg rounded-xl"
              onClick={calculateZakat}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Рассчитать
            </Button>

            <p className="text-center text-xs text-muted-foreground px-4">
              Расчёт носит справочный характер. Для точного определения закята рекомендуем обратиться к алиму.
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-scale-in">
            <div className="card-flat p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Сумма закята</p>
                <p className="text-4xl font-bold text-primary">
                  {zakatAmount.toLocaleString('ru-RU')} ₽
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <Button
                  className="w-full h-14 text-lg rounded-xl"
                  onClick={handlePayment}
                >
                  Выплатить закят
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-xl"
                  onClick={() => setCalculated(false)}
                >
                  Пересчитать
                </Button>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground px-4">
              Расчёт носит справочный характер
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Zakat;
