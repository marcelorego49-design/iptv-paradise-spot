import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/site-layout";

export const plans = [
  {
    name: "Mensal",
    price: "R$ 25",
    period: "/mês",
    description: "Servidor estável para sua primeira experiência digital.",
    features: [
      "Acesso completo",
      "Mais de 8.000 canais ao vivo",
      "Filmes e séries sob demanda",
      "Qualidade HD e Full HD",
      "Suporte por WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "Trimestral",
    price: "R$ 75",
    period: "/3 meses",
    description: "Alta performance com bônus especial de 4 meses.",
    features: [
      "1 mês de bônus incluso",
      "Total de 4 meses de serviço",
      "Qualidade 4K e Full HD",
      "Catálogo completo",
      "Canais de esportes e PPV",
      "Suporte prioritário 24h",
    ],
    highlighted: true,
  },
  {
    name: "Anual",
    price: "R$ 200",
    period: "/ano",
    description: "Infraestrutura completa para 12 meses de estabilidade.",
    features: [
      "Economia máxima",
      "12 meses garantidos",
      "Tudo liberado em 4K",
      "Instalação assistida gratuita",
      "Garantia de estabilidade",
    ],
    highlighted: false,
  },
];

export function PlansGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1 ${
            plan.highlighted
              ? "border border-primary/50 bg-card shadow-glow"
              : "glass-panel shadow-soft"
          }`}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-highlight-foreground">
              <Sparkles className="size-3" /> Mais vendido
            </span>
          )}
          <h3 className="font-display text-xl font-bold">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
          <p className="mt-5 flex items-end gap-1">
            <span className="font-display text-4xl font-extrabold">{plan.price}</span>
            <span className="pb-1 text-sm text-muted-foreground">{plan.period}</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={`mt-7 ${
              plan.highlighted
                ? "bg-brand-gradient text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Assinar {plan.name}
            </a>
          </Button>
        </div>
      ))}
    </div>
  );
}
