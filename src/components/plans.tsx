import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_BASE_URL } from "@/components/site-layout";

export const plans = [
  { name: "Mensal", price: "R$ 25", period: "/mês", description: "Acesso mensal à opção compatível com seu aparelho.", message: "Olá! Conheci a Leão Play pelo site e tenho interesse no plano mensal IPTV. Gostaria de confirmar o valor para meu aparelho." },
  { name: "Trimestral", price: "R$ 75", period: "/3 meses", description: "Opção trimestral; confirme compatibilidade e valor final.", message: "Olá! Conheci a Leão Play pelo site e tenho interesse no plano trimestral IPTV. Gostaria de confirmar as condições e o valor final." },
  { name: "Anual", price: "R$ 200", period: "/ano", description: "Opção anual; confirme compatibilidade e valor final.", message: "Olá! Conheci a Leão Play pelo site e tenho interesse no plano anual IPTV. Gostaria de confirmar as condições e o valor final." },
];

export function PlansGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div key={plan.name} className="glass-panel flex flex-col rounded-3xl p-7 shadow-soft">
          <h3 className="font-display text-xl font-bold">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
          <p className="mt-5 flex items-end gap-1">
            <span className="font-display text-4xl font-extrabold">{plan.price}</span>
            <span className="pb-1 text-sm text-muted-foreground">{plan.period}</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span className="text-muted-foreground">Opção IPTV para aparelhos compatíveis</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span className="text-muted-foreground">Valor final da primeira contratação confirmado no atendimento</span></li>
          </ul>
          <Button asChild className="mt-7 bg-brand-gradient text-primary-foreground">
            <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(plan.message)}`} target="_blank" rel="noopener noreferrer">Consultar {plan.name}</a>
          </Button>
        </div>
      ))}
    </div>
  );
}
