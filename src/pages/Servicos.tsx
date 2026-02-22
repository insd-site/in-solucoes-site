import Section from "../app/ui/Section";
import Card from "../app/ui/Card";
import Button from "../app/ui/Button";
import { SERVICES, PRICING } from "../app/config";

export default function Servicos() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Serviços</h1>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
          Desenvolvimento de automações, apps e sites. Entrega enxuta, padrão premium e manutenção mensal disponível.
        </p>
        <div className="mt-6 flex gap-3">
          <Button to="/contato" size="lg">Pedir proposta</Button>
          <Button to="/produtos" variant="secondary" size="lg">Ver produtos</Button>
        </div>
      </div>

      <Section eyebrow="Entrega" title="3 frentes principais" subtitle="Escolha o caminho — ou combine os três.">
        <div className="grid gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {b}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Manutenção" title={PRICING.maintenance.title} subtitle={PRICING.maintenance.subtitle}>
        <Card>
          <ul className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
            {PRICING.maintenance.items.map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {i}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-white/50">{PRICING.maintenance.note}</div>
          <div className="mt-6 flex gap-3">
            <Button to="/contato">Quero manutenção</Button>
            <Button to="/contato" variant="secondary">Montar plano</Button>
          </div>
        </Card>
      </Section>
    </div>
  );
}
