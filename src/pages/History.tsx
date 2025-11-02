import { PageLayout } from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckCircle2 } from "lucide-react";

const mockTransactions = [
  {
    id: 1,
    date: "2024-01-15",
    type: "Пожертвование",
    amount: 1000,
    fund: "Фонд «Закят»",
    status: "Выполнено",
  },
  {
    id: 2,
    date: "2024-01-10",
    type: "Подписка",
    amount: 290,
    fund: "Базовый тариф",
    status: "Выполнено",
  },
  {
    id: 3,
    date: "2024-01-05",
    type: "Кампания",
    amount: 500,
    fund: "Строительство школы",
    status: "Выполнено",
  },
];

const History = () => {
  return (
    <PageLayout title="История">
      <Tabs defaultValue="history" className="p-4">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="history">История</TabsTrigger>
          <TabsTrigger value="reports">Отчёты</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history" className="space-y-3 mt-4">
          {mockTransactions.length > 0 ? (
            mockTransactions.map((transaction) => (
              <div key={transaction.id} className="card-flat p-4 animate-fade-in">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{transaction.type}</h3>
                    <p className="text-sm text-muted-foreground">{transaction.fund}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{transaction.amount} ₽</p>
                    <div className="flex items-center gap-1 text-xs text-success">
                      <CheckCircle2 className="w-3 h-3" />
                      {transaction.status}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span>{new Date(transaction.date).toLocaleDateString('ru-RU')}</span>
                  <button className="text-primary hover:underline">Чек</button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold mb-2">История пуста</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ваши пожертвования появятся здесь
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="reports" className="mt-4">
          <div className="text-center py-12 animate-fade-in">
            <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold mb-2">Отчёты</h3>
            <p className="text-sm text-muted-foreground">
              Детальные отчёты по вашим пожертвованиям
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default History;
