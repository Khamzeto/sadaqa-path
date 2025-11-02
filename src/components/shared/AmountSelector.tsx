import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AmountSelectorProps {
  presets?: number[];
  onAmountChange: (amount: number) => void;
}

export const AmountSelector = ({
  presets = [100, 250, 500, 1000],
  onAmountChange,
}: AmountSelectorProps) => {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handlePresetClick = (amount: number) => {
    setSelectedPreset(amount);
    setCustomAmount("");
    onAmountChange(amount);
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = value.replace(/[^\d]/g, "");
    setCustomAmount(numValue);
    setSelectedPreset(null);
    if (numValue) {
      onAmountChange(parseInt(numValue));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {presets.map((amount) => (
          <Button
            key={amount}
            variant={selectedPreset === amount ? "default" : "outline"}
            className="h-14 text-lg font-semibold rounded-xl"
            onClick={() => handlePresetClick(amount)}
          >
            {amount.toLocaleString('ru-RU')} ₽
          </Button>
        ))}
      </div>
      
      <div className="relative">
        <Input
          type="text"
          inputMode="numeric"
          placeholder="Другая сумма"
          value={customAmount}
          onChange={(e) => handleCustomAmountChange(e.target.value)}
          className="h-14 text-lg rounded-xl pr-12"
        />
        {customAmount && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            ₽
          </span>
        )}
      </div>
    </div>
  );
};
