import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout, WHATSAPP_URL } from "@/components/site-layout";
import { PlansGrid } from "@/components/plans";
import { Button } from "@/components/ui/button";

const title = "Planos de IPTV a partir de R$ 25/mês | Leão Play";
const description =
  "Conheça os planos do ecossistema Leão Play: infraestrutura profissional de servidores e biblioteca de apps para múltiplos dispositivos.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanosPage,
});

function PlanosPage() {
  return (
    <SiteLayout>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">
            Escolha o plano ideal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Todos os planos incluem canais ao vivo, filmes, séries, esportes e suporte no
            WhatsApp. Pagamento via Pix ou cartão, sem fidelidade.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <PlansGrid />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["Pix, cartão ou boleto", "Escolha a forma de pagamento mais confortável para você."],
            ["Telas extras", "Adicione telas adicionais por R$ 15/mês a qualquer momento."],
            ["Garantia de 7 dias", "Se não gostar, devolvemos o valor pago na primeira semana."],
          ].map(([t, d]) => (
            <div key={t} className="glass-panel rounded-2xl p-6">
              <h2 className="text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button asChild size="lg" className="bg-brand-gradient text-primary-foreground shadow-glow">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" /> Tirar dúvidas no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
