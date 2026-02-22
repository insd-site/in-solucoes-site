import Section from "../app/ui/Section";
import Card from "../app/ui/Card";
import Button from "../app/ui/Button";
import Badge from "../app/ui/Badge";
import { FadeUp, Stagger, Item } from "../app/ui/Motion";
import { BRAND, SERVICES, PRODUCTS, FAQ, LINKS } from "../app/config";
import { ArrowRight, ShieldCheck, Gauge, Boxes, Zap } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-14">
        <FadeUp>
          <div className="max-w-3xl">
            <Badge>IN Soluções Digitais • Profissional • Híbrido Premium</Badge>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
              Soluções digitais para dar <span className="text-white">controle</span> e <span className="text-white">organização</span> à operação.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              A {BRAND.companyName} desenvolve automações, apps e sites com padrão premium — com foco em back-end, dados e eficiência operacional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contato" size="lg">Pedir orçamento</Button>
              <Button href={LINKS.whatsapp} variant="secondary" size="lg">
                Falar no WhatsApp <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 text-xs text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="font-semibold text-white">Prazo rápido</div>
                <div className="mt-1">Entrega enxuta e bem planejada</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="font-semibold text-white">Suporte</div>
                <div className="mt-1">Manutenção mensal disponível</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="font-semibold text-white">Back-end forte</div>
                <div className="mt-1">Automação de dados como prioridade</div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10">
        <FadeUp delay={0.08}>
          <Card className="p-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="text-sm text-white/70">Produto em destaque</div>
                <h3 className="mt-3 text-xl md:text-2xl font-bold">
                  InControl — sistema operacional para gestão e rastreabilidade
                </h3>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Painel único com módulos, alertas e histórico. Projetado para cenários multiusuário e multigrupo (isolamento total de dados).
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button to="/produtos/incontrol" variant="secondary">Ver InControl</Button>
                  <Button href={LINKS.incontrolInstaller} variant="ghost">Baixar instalador</Button>
                </div>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-start gap-3">
                    <ShieldCheck className="mt-0.5" />
                    <div>
                      <div className="font-semibold">Auditoria & histórico</div>
                      <div className="text-sm text-white/70">Rastreie ações e movimentações com clareza.</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-start gap-3">
                    <Gauge className="mt-0.5" />
                    <div>
                      <div className="font-semibold">Economia de tempo</div>
                      <div className="text-sm text-white/70">Automação reduz erro e retrabalho.</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-start gap-3">
                    <Boxes className="mt-0.5" />
                    <div>
                      <div className="font-semibold">Modular</div>
                      <div className="text-sm text-white/70">Cresce sem virar bagunça.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative border-t lg:border-t-0 lg:border-l border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="grid gap-3">
                  <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/20">
                    <img src="/assets/incontrol-home.png" alt="InControl - Home" className="w-full h-auto" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/20">
                      <img src="/assets/incontrol-ledger.png" alt="InControl - Histórico" className="w-full h-auto" />
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/20">
                      <img src="/assets/incontrol-login.png" alt="InControl - Login" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </FadeUp>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />

      <Section
        eyebrow="Serviços"
        title="O que a IN entrega"
        subtitle="Automação, produto e presença digital — com processo direto e foco em resultado."
      >
        <Stagger>
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.map((s) => (
              <Item key={s.title}>
                <Card>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Zap size={16} /> {s.title}
                  </div>
                  <p className="mt-3 text-white/70 leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Item>
            ))}
          </div>
        </Stagger>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/contato" size="lg">Quero orçamento</Button>
          <Button to="/servicos" variant="ghost" size="lg">Ver serviços</Button>
        </div>
      </Section>

      <Section
        eyebrow="Produtos"
        title="Projetos atuais"
        subtitle="Produtos que mostram na prática o padrão de entrega da IN Soluções Digitais."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <Card key={p.slug}>
              <div className="text-sm text-white/70">{p.tagline}</div>
              <div className="mt-2 text-2xl font-bold tracking-tight">{p.name}</div>
              <p className="mt-3 text-white/70 leading-relaxed">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button to={`/produtos/${p.slug}`} variant="secondary">Ver página</Button>
                {p.slug === "incontrol" ? (
                  <Button href={LINKS.incontrolInstaller} variant="ghost">Baixar instalador</Button>
                ) : (
                  <Button to="/contato" variant="ghost">Solicitar proposta</Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Link className="text-sm text-white/70 hover:text-white underline" to="/produtos">
            Ver todos os produtos →
          </Link>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Perguntas comuns" subtitle="Respostas rápidas para fechar mais rápido.">
        <div className="grid gap-3">
          {FAQ.map((f) => (
            <Card key={f.q}>
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-white/70">{f.a}</div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={LINKS.whatsapp} size="lg">Falar agora</Button>
          <Button to="/contato" variant="secondary" size="lg">Briefing rápido</Button>
        </div>
      </Section>
    </div>
  );
}
