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
  
  // Lógica de precificação progressiva:
  // 1 tela: R$ 25 (Base)
  // 2 telas: R$ 45 (+R$ 20)
  // 3 telas: R$ 65 (+R$ 20)
  // 4 telas: R$ 80 (+R$ 15)
  // 5 telas: R$ 95 (+R$ 15)
  // 6+ telas: +R$ 15 por tela adicional
  const pricing = useMemo(() => {
    let totalPrice = basePrice; // Base 1 tela = 25
    
    if (screens === 2) {
      totalPrice = 45;
    } else if (screens === 3) {
      totalPrice = 65;
    } else if (screens === 4) {
      totalPrice = 80;
    } else if (screens === 5) {
      totalPrice = 95;
    } else if (screens > 5) {
      // 95 + (telas adicionais * 15)
      totalPrice = 95 + (screens - 5) * 15;
    }
    
    const individualPrice = screens * basePrice;
    const savings = individualPrice - totalPrice;
    
    return {
      totalPrice,
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
            onClick={() => setScreens(Math.min(10, screens + 1))}
            disabled={screens >= 10}
          >
            <Plus className="size-3" />
          </Button>
        </div>
      </div>

      <div className="px-2">
        <Slider 
          value={[screens]} 
          onValueChange={(val) => setScreens(val[0] ?? 1)} 
          min={1} 
          max={10} 
          step={1} 
          className="py-2"
        />
        <div className="mt-1 flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
          <span>1 Tela</span>
          <span>10 Telas</span>
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
