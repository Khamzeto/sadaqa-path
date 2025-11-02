import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  rightAction?: ReactNode;
}

export const PageLayout = ({ children, title, rightAction }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-telegram-bg pb-20">
      {title && (
        <header className="sticky top-0 bg-nav border-b border-border z-40">
          <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
            <h1 className="text-lg font-semibold">{title}</h1>
            {rightAction}
          </div>
        </header>
      )}
      <main className="max-w-lg mx-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};
