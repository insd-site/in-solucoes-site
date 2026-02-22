import Section from "../../app/ui/Section";
import Card from "../../app/ui/Card";
import Button from "../../app/ui/Button";
import Badge from "../../app/ui/Badge";
import { PRICING, LINKS } from "../../app/config";
import { ShieldCheck, Timer, LayoutGrid, ListChecks, Lock, Download } from "lucide-react";

const MODULES = [
  "Home (Dashboard)",
  "Produção / Fabricação",
  "Baús (Inventário)",
  "Saque",
  "Vendas",
  "Lavagem",
  "Alertas",
  "Usuários",
  "Logs",
  "Ausências",
  "Pasta pessoal",
];

export default function InControl() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <Badge>Produto</Badge>
        <div className="mt-4 flex items-center gap-3">
          <img src="/assets/logo-incontrol.jpg" alt="InControl" className="h-10 w-10 rounded-2xl border border-white/10 object-cover" />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">InControl</h1>
        </div>
        <p className="mt-4 text-white/70 max-w-3xl leading-relaxed">
          Sistema integrado de gestão operacional para centralizar, organizar e automatizar processos críticos — com isolamento total por grupo, auditoria e histórico.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={LINKS.whatsapp} size="lg">Solicitar demo</Button>
          <Button href={LINKS.incontrolInstaller} variant="secondary" size="lg">
            <Download className="mr-2" size={16} /> Baixar instalador
          </Button>
          <Button to="/contato" variant="ghost" size="lg">Quero proposta</Button>
        </div>
      </div>

      <Section
        eyebrow="Valor"
        title="Mais controle, menos erro, tudo no mesmo lugar"
        subtitle="Organização, economia de tempo e rastreabilidade como padrão."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/70"><Timer size={16} /> Economia de tempo</div>
            <p className="mt-3 text-sm text-white/70">Fluxos bem definidos e automação para reduzir retrabalho.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/70"><ShieldCheck size={16} /> Rastreabilidade</div>
            <p className="mt-3 text-sm text-white/70">Registro histórico, logs e auditoria para decisões mais seguras.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/70"><LayoutGrid size={16} /> Modular</div>
            <p className="mt-3 text-sm text-white/70">Módulos por área: evolução sem bagunça.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Módulos" title="Estrutura modular do InControl" subtitle="Tudo organizado por área, com experiência consistente.">
        <Card>
          <div className="grid gap-3 md:grid-cols-2">
            {MODULES.map((m) => (
              <div key={m} className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {m}
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section
        eyebrow="Arquitetura"
        title="Multiusuário e multigrupo"
        subtitle="Isolamento total de dados entre organizações/equipes."
      >
        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5" />
              <div>
                <div className="font-semibold">Isolamento por grupo</div>
                <div className="mt-1 text-sm text-white/70">Cada grupo com dados totalmente separados.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ListChecks className="mt-0.5" />
              <div>
                <div className="font-semibold">Auditoria</div>
                <div className="mt-1 text-sm text-white/70">Histórico e logs para controle e governança.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LayoutGrid className="mt-0.5" />
              <div>
                <div className="font-semibold">Escalável</div>
                <div className="mt-1 text-sm text-white/70">Evolui conforme a necessidade do cliente.</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section eyebrow="Screens" title="Telas reais do sistema" subtitle="Prova visual do produto em produção.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-0 overflow-hidden">
            <img src="/assets/incontrol-home.png" alt="InControl - Home" className="w-full h-auto" />
          </Card>
          <div className="grid gap-4">
            <Card className="p-0 overflow-hidden">
              <img src="/assets/incontrol-ledger.png" alt="InControl - Histórico" className="w-full h-auto" />
            </Card>
            <Card className="p-0 overflow-hidden">
              <img src="/assets/incontrol-pasta.png" alt="InControl - Pasta pessoal" className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </Section>

      <Section eyebrow="Planos" title={PRICING.incontrol.title} subtitle="Modelo híbrido: base pronta + personalização por projeto.">
        <div className="grid gap-4 md:grid-cols-2">
          {PRICING.incontrol.plans.map((p) => (
            <Card key={p.name}>
              <div className="text-sm text-white/70">{p.name}</div>
              <div className="mt-2 text-3xl font-extrabold tracking-tight">{p.price}</div>
              <div className="mt-2 text-white/70">{p.desc}</div>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button to="/contato">{p.cta}</Button>
                <Button href={LINKS.whatsapp} variant="secondary">WhatsApp</Button>
                <Button href={LINKS.incontrolInstaller} variant="ghost">Baixar</Button>
              </div>
              <div className="mt-3 text-xs text-white/40">
                *Download via link externo (instalador).
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
