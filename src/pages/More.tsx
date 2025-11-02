import { PageLayout } from "@/components/layout/PageLayout";
import { useNavigate } from "react-router-dom";
import { 
  HandHeart, 
  CreditCard, 
  Calculator, 
  Building2,
  ChevronRight
} from "lucide-react";

const menuItems = [
  {
    title: "Поддержать проект",
    description: "Быстрое пожертвование",
    icon: HandHeart,
    path: "/support",
    color: "text-primary",
  },
  {
    title: "Подписка",
    description: "Регулярная садака-джария",
    icon: CreditCard,
    path: "/subscription",
    color: "text-primary",
  },
  {
    title: "Калькулятор закята",
    description: "Рассчитайте размер закята",
    icon: Calculator,
    path: "/zakat",
    color: "text-primary",
  },
  {
    title: "Фонды-партнёры",
    description: "Проверенные благотворительные фонды",
    icon: Building2,
    path: "/partners",
    color: "text-primary",
  },
];

const More = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Ещё">
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="w-full card-flat p-4 flex items-center gap-4 hover:bg-muted transition-colors animate-fade-in"
          >
            <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            
            <div className="flex-1 text-left min-w-0">
              <h3 className="font-semibold mb-0.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {item.description}
              </p>
            </div>
            
            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
          </button>
        ))}
      </div>
    </PageLayout>
  );
};

export default More;
