import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ShieldCheck, Zap, Smartphone, Clapperboard, Trophy, MessageCircle } from "lucide-react";
import { SiteLayout, WHATSAPP_URL } from "@/components/site-layout";
import { PlansGrid } from "@/components/plans";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-tv.jpg";

const title = "Leão Play — IPTV estável com canais ao vivo, filmes e séries";
const description =
  "Assine IPTV com mais de 8.000 canais, filmes, séries e esportes em 4K. Teste grátis, ativação em minutos e suporte 24h no WhatsApp.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const features = [
  { icon: Zap, title: "Alta disponibilidade", text: "Infraestrutura otimizada para transmissão fluida, minimizando interrupções mesmo nos horários de pico." },
  { icon: Clapperboard, title: "Filmes e séries atualizados", text: "Catálogo on demand com lançamentos adicionados semanalmente." },
  { icon: Trophy, title: "Todos os esportes", text: "Campeonatos nacionais, internacionais, PPV e canais fechados ao vivo." },
  { icon: Smartphone, title: "Assista onde quiser", text: "Smart TV, TV Box, celular, tablet, computador e Fire Stick." },
  { icon: ShieldCheck, title: "Ativação em minutos", text: "Você recebe seu acesso logo após a confirmação, com instalação assistida." },
  { icon: MessageCircle, title: "Suporte humano 24h", text: "Atendimento real no WhatsApp, todos os dias, inclusive feriados." },
];

const steps = [
  { n: "01", t: "Escolha seu plano", d: "Mensal ou anual, com quantidade de telas ideal para você." },
  { n: "02", t: "Fale no WhatsApp", d: "Confirme o pagamento e receba seu login em poucos minutos." },
  { n: "03", t: "Comece a assistir", d: "Instalamos junto com você no seu aparelho preferido." },
];

const faq = [
  { q: "Preciso de internet rápida?", a: "Recomendamos ao menos 15 Mbps para Full HD e 30 Mbps para 4K. Conexão via cabo garante mais estabilidade." },
  { q: "Funciona na minha Smart TV?", a: "Sim. Funciona em Samsung, LG, Roku, Android TV, TV Box, Fire Stick, celulares, tablets e computadores." },
  { q: "Existe teste grátis?", a: "Sim, liberamos um teste para você avaliar a qualidade antes de assinar. Basta pedir pelo WhatsApp." },
  { q: "Posso assistir em mais de uma TV?", a: "Pode. Cada plano define o número de telas simultâneas; é possível adicionar telas extras a qualquer momento." },
  { q: "Como funciona a renovação?", a: "Avisamos antes do vencimento e você renova pelo WhatsApp via Pix ou cartão, sem burocracia." },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <Play className="size-3 text-primary" /> Teste grátis liberado hoje
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Toda a TV do mundo <span className="text-brand-gradient">em uma só tela</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Mais de 8.000 canais ao vivo, filmes, séries e esportes em 4K. Experiência fluida,
              com ativação em minutos e suporte de verdade no WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-primary-foreground shadow-glow">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> Pedir teste grátis
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/50">
                <Link to="/planos">Ver planos</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["8.000+", "Canais ao vivo"],
                ["40 mil", "Filmes e séries"],
                ["99,9%", "Estabilidade"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold text-foreground">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Smart TV exibindo a interface de canais e filmes do Leão Play em uma sala escura"
              width={1536}
              height={1024}
              className="w-full rounded-3xl border border-border object-cover shadow-glow"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Por que escolher o Leão Play</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Estrutura própria, catálogo atualizado e atendimento que responde de verdade.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title: t, text }) => (
            <div key={t} className="glass-panel rounded-2xl p-6 shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Comece em 3 passos</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border p-6">
                <span className="font-display text-3xl font-extrabold text-brand-gradient">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Planos e preços</h2>
        <p className="mt-3 text-muted-foreground">Sem fidelidade. Cancele quando quiser.</p>
        <div className="mt-10">
          <PlansGrid />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl bg-brand-gradient px-8 py-14 text-center text-primary-foreground shadow-glow">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Pronto para uma experiência estável?
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-80">
            Peça seu teste grátis agora e comprove a qualidade em poucos minutos.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" /> Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
