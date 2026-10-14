import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Clock, Mail } from "lucide-react";
import { SiteLayout, WHATSAPP_BASE_URL, WHATSAPP_URL } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { plans } from "@/components/plans";
import { trackContact } from "@/lib/meta-pixel";

const title = "Contato e teste grátis de IPTV | Leão Play";
const description =
  "Fale com o Leão Play pelo WhatsApp, peça seu teste grátis de IPTV e receba o acesso em poucos minutos. Atendimento 24 horas.";

export const Route = createFileRoute("/contato")({
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
  component: ContatoPage,
});

function ContatoPage() {
  const [name, setName] = useState("");
  const [plan, setPlan] = useState(plans[1]?.name ?? "Trimestral");
  const [screens, setScreens] = useState("1");
  const [message, setMessage] = useState("");

  const calculatePrice = (numScreens: number) => {
    const basePrice = 25;
    if (numScreens <= 1) return basePrice;
    if (numScreens === 2) return 45;
    if (numScreens === 3) return 65;
    if (numScreens === 4) return 80;
    if (numScreens === 5) return 95;
    return 95 + (numScreens - 5) * 15;
  };

  const totalPrice = calculatePrice(parseInt(screens));
  const formattedPrice = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const text = encodeURIComponent(
    `Olá! Meu nome é ${name || "(sem nome)"}, tenho interesse no plano ${plan} para ${screens} ${screens === "1" ? "tela" : "telas"}. Valor total: ${formattedPrice}. ${message}`.trim(),
  );

  return (
    <SiteLayout>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Fale com a gente</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Responda em segundos: monte sua mensagem abaixo e envie direto no WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr]">
        <form
          className="glass-panel space-y-5 rounded-3xl p-7 shadow-soft"
          onSubmit={(e) => {
            e.preventDefault();
            trackContact();
            window.open(`${WHATSAPP_BASE_URL}?text=${text}`, "_blank", "noopener");
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Seu nome</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Plano de interesse</Label>
            <select
              id="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {plans.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name} — {p.price}
                  {p.period}
                </option>
              ))}
              <option value="Teste grátis">Quero apenas o teste grátis</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="screens">Quantidade de telas</Label>
            <select
              id="screens"
              value={screens}
              onChange={(e) => setScreens(e.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Tela" : "Telas"} — R$ {calculatePrice(n)},00
                </option>
              ))}
            </select>
            <p className="text-[10px] text-muted-foreground">
              *Telas adicionais possuem descontos progressivos negociáveis.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte em qual aparelho você vai assistir."
            />
          </div>
          <Button type="submit" size="lg" className="w-full bg-brand-gradient text-primary-foreground shadow-glow">
            <MessageCircle className="size-5" /> Enviar no WhatsApp
          </Button>
        </form>

        <aside className="space-y-5">
          {[
            { icon: MessageCircle, t: "WhatsApp", d: "(91) 99161-8878 — canal principal de atendimento e ativação." },
            { icon: Clock, t: "Horário", d: "Atendimento 24 horas, 7 dias por semana, inclusive feriados." },
            { icon: Mail, t: "E-mail", d: "suporte@leaoplay.com.br — para dúvidas administrativas." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </aside>
      </section>
    </SiteLayout>
  );
}
