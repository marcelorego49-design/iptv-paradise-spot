import { useState, useMemo } from "react";
import { Monitor, Plus, Minus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_BASE_URL } from "@/components/site-layout";

interface MultiDeviceConfigProps {
  basePrice: number;
  planName: string;
}

export function MultiDeviceConfig({ basePrice, planName }: MultiDeviceConfigProps) {
  const [screens, setScreens] = useState(1);
  
  // Lógica de precificação:
  // 1ª tela: Plano Base
  // Telas extras: R$ 15,00 cada
  // Desconto negociável: A partir da 3ª tela (total), as telas extras custam R$ 10,00
  const pricing = useMemo(() => {
    const extraScreens = screens - 1;
    let totalExtra = 0;
    let savings = 0;
    
    if (extraScreens > 0) {
      for (let i = 1; i <= extraScreens; i++) {
        // Se for a 3ª tela ou mais (total), aplica o desconto negociado de R$ 10 em vez de R$ 15
        const currentScreenTotal = i + 1;
        const screenCost = currentScreenTotal >= 3 ? 10 : 15;
        totalExtra += screenCost;
        savings += (15 - screenCost);
      }
    }
    
    const totalPrice = basePrice + totalExtra;
    
    return {
      totalPrice,
      extraScreens,
      savings,
      hasDiscount: savings > 0
    };
  }, [screens, basePrice]);

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no plano ${planName} para ${screens} ${screens === 1 ? 'tela' : 'telas'}. ` +
    `O valor calculado foi R$ ${pricing.totalPrice.toFixed(2).replace('.', ',')}. Podemos fechar?`
  );

  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${whatsappMessage}`;

  return (
    <div className="glass-panel mt-8 flex flex-col gap-6 rounded-3xl p-6 shadow-soft border border-border/50">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Monitor className="size-5" />
          </div>
          <div>
            <h4 className="font-display font-bold">Dispositivos Simultâneos</h4>
            <p className="text-xs text-muted-foreground">Quantas telas você quer conectar?</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="size-8 rounded-full" 
            onClick={() => setScreens(Math.max(1, screens - 1))}
            disabled={screens <= 1}
          >
            <Minus className="size-3" />
          </Button>
          <span className="w-4 text-center font-display text-xl font-bold">{screens}</span>
          <Button 
            variant="outline" 
            size="icon" 
            className="size-8 rounded-full" 
            onClick={() => setScreens(Math.min(5, screens + 1))}
            disabled={screens >= 5}
          >
            <Plus className="size-3" />
          </Button>
        </div>
      </div>

      <div className="px-2">
        <Slider 
          value={[screens]} 
          onValueChange={(val) => setScreens(val[0])} 
          min={1} 
          max={5} 
          step={1} 
          className="py-2"
        />
        <div className="mt-1 flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
          <span>1 Tela</span>
          <span>5 Telas</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-secondary/50 p-4 border border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Valor total:</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold">R$</span>
            <span className="font-display text-2xl font-extrabold text-primary">
              {pricing.totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
        
        {pricing.hasDiscount && (
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px] py-0">
              DESCONTO MULTITELAS APLICADO
            </Badge>
            <span className="text-xs font-medium text-green-500">
              Economia de R$ {pricing.savings.toFixed(2).replace('.', ',')}
            </span>
          </div>
        )}
        
        <div className="mt-1 flex items-start gap-2 text-[11px] text-muted-foreground leading-relaxed">
          <Info className="size-3 mt-0.5 shrink-0" />
          <p>
            Plano base para 1 tela. Telas adicionais com desconto progressivo para uso simultâneo.
          </p>
        </div>
      </div>

      <Button asChild className="w-full bg-brand-gradient text-primary-foreground shadow-glow font-bold">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Contratar {screens} {screens === 1 ? 'Tela' : 'Telas'}
        </a>
      </Button>
    </div>
  );
}
