import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Clock, Mail } from "lucide-react";
import { SiteLayout, WHATSAPP_URL } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { plans } from "@/components/plans";

const title = "Contato e teste grátis de IPTV | FlowTV";
const description =
  "Fale com o FlowTV pelo WhatsApp, peça seu teste grátis de IPTV e receba o acesso em poucos minutos. Atendimento 24 horas.";

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
  const [plan, setPlan] = useState(plans[1]?.name ?? "Família");
  const [message, setMessage] = useState("");

  const text = encodeURIComponent(
    `Olá! Meu nome é ${name || "(sem nome)"} e tenho interesse no plano ${plan}. ${message}`.trim(),
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
            window.open(`${WHATSAPP_URL.split("?")[0]}?text=${text}`, "_blank", "noopener");
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
            { icon: MessageCircle, t: "WhatsApp", d: "(85) 99999-9999 — canal principal de atendimento e ativação." },
            { icon: Clock, t: "Horário", d: "Atendimento 24 horas, 7 dias por semana, inclusive feriados." },
            { icon: Mail, t: "E-mail", d: "suporte@flowtv.com.br — para dúvidas administrativas." },
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
