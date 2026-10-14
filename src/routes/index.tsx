import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ShieldCheck, Zap, Smartphone, Clapperboard, Trophy, MessageCircle } from "lucide-react";
import { SiteLayout, WHATSAPP_URL } from "@/components/site-layout";
import { PlansGrid } from "@/components/plans";
import { MultiDeviceConfig } from "@/components/multi-device-config";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-tv.jpg";

const title = "Leão Play — Ecossistema de Entretenimento e Biblioteca de Apps";
const description =
  "A Leão Play é uma solução profissional multiplataforma com infraestrutura de servidores robusta e biblioteca de aplicativos para Smart TVs, celulares e notebooks.";

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
  { icon: Zap, title: "Servidores Profissionais", text: "Infraestrutura global de alta performance para uma experiência fluida e estável em qualquer dispositivo." },
  { icon: Clapperboard, title: "Biblioteca de Aplicativos", text: "Acesso a um ecossistema completo de softwares otimizados para cada sistema operacional." },
  { icon: Trophy, title: "Conteúdo Premium", text: "Esportes ao vivo, canais exclusivos e um catálogo on-demand atualizado semanalmente." },
  { icon: Smartphone, title: "Totalmente Multiplataforma", text: "Compatível com Smart TVs, smartphones (Android/iOS) e notebooks (Windows/macOS)." },
  { icon: ShieldCheck, title: "Solução sob medida", text: "Instalação assistida e suporte técnico para configurar a melhor opção no seu aparelho." },
  { icon: MessageCircle, title: "Suporte Especializado", text: "Atendimento humano 24h para garantir sua conectividade e satisfação total." },
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
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-x-4 px-4 py-16 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-12 lg:py-28">
          <div className="col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <Play className="size-3 text-primary" /> Teste grátis liberado hoje
            </span>
          </div>
          <h1 className="col-start-1 row-start-2 mt-5 min-w-0 self-center font-display text-[1.35rem] font-extrabold leading-[1.1] sm:text-3xl md:text-4xl lg:row-start-2 lg:text-6xl lg:leading-[1.05]">
            Seu entretenimento, do seu jeito.
          </h1>
          <div className="col-start-2 row-start-2 mt-5 flex min-w-0 items-center justify-center self-center lg:row-span-4 lg:row-start-1 lg:mt-0">
            <img
              src={heroImg}
              alt="Smart TV exibindo a interface do Leão Play em uma sala escura com iluminação vermelha"
              width={1280}
              height={720}
              className="aspect-video h-auto w-full max-w-3xl rounded-xl border border-border object-cover shadow-glow sm:rounded-2xl lg:rounded-3xl"
            />
          </div>
          <div className="col-span-2 min-w-0 lg:col-span-1 lg:col-start-1 lg:row-start-3">
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Muito além de um app: a Leão Play oferece uma infraestrutura robusta de servidores e uma 
              biblioteca completa de aplicativos para todos os seus dispositivos.
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
          </div>
          <dl className="col-span-2 mt-10 grid max-w-md grid-cols-3 gap-4 lg:col-span-1 lg:col-start-1 lg:row-start-4">
            {[
              ["1500+", "Canais ao vivo"],
              ["40 mil", "Filmes e séries"],
              ["90%", "de estabilidade"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-foreground">{v}</dt>
                <dd className="text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
          <div className="streaming-brands col-span-2 mt-7 min-w-0 lg:col-span-1 lg:col-start-1 lg:row-start-5" aria-label="Plataformas disponíveis no catálogo">
            <div className="streaming-brands__viewport">
              <div className="streaming-brands__track">
                {[0, 1].map((copy) => (
                  <div className="streaming-brands__group" key={copy} aria-hidden={copy === 1}>
                    {[
                      ["Netflix", "netflix"],
                      ["Prime Video", "primevideo"],
                      ["Disney+", "disneyplus"],
                      ["HBO Max", "hbomax"],
                      ["Globoplay", "globoplay"],
                      ["Telecine", "telecine"],
                      ["Apple TV", "appletv"],
                      ["Paramount+", "paramountplus"],
                    ].map(([name, brand]) => (
                      <img
                        key={brand}
                        className="streaming-brands__logo"
                        src={`/brands/${brand}.jpg`}
                        alt={copy === 0 ? name : ""}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Streamings disponíveis no catálogo</p>
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
        <p className="mt-3 text-muted-foreground">
          A disponibilidade e funcionalidade dos aplicativos podem variar conforme a compatibilidade com o sistema do cliente.
        </p>
        <div className="mt-10">
        <PlansGrid />
        
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-xl">
            <div className="mb-8 text-center">
              <h2 className="font-display text-3xl font-bold">Planos para a Família Toda</h2>
              <p className="mt-2 text-muted-foreground">
                Adicione mais telas e ganhe descontos progressivos por dispositivo extra.
              </p>
            </div>
            <MultiDeviceConfig basePrice={25} planName="Mensal" />
          </div>
        </div>
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
