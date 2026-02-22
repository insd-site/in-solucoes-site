import Section from "../app/ui/Section";
import Card from "../app/ui/Card";
import Button from "../app/ui/Button";
import Badge from "../app/ui/Badge";
import { BRAND, LINKS } from "../app/config";

export default function Portfolio() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <img src="/assets/ivan.jpg" alt="Ivan" className="h-28 w-28 rounded-3xl border border-white/10 object-cover" />
          <div>
            <Badge>Fundador & Desenvolvedor</Badge>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              {BRAND.founderName}
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
              Back-end forte e automação de dados como prioridade. Foco em criar sistemas organizados, escaláveis e fáceis de operar.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Button to="/contato" size="lg">Falar comigo</Button>
              <Button href={BRAND.instagram} variant="secondary" size="lg">Instagram</Button>
              <Button href={LINKS.whatsapp} variant="ghost" size="lg">WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>

      <Section
        eyebrow="Diferenciais"
        title="O que você leva"
        subtitle="Clareza de processo, documentação e cuidado com arquitetura — principalmente em dados."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="font-semibold">Arquitetura modular</div>
            <p className="mt-2 text-sm text-white/70">Organização por módulos para crescer sem virar bagunça.</p>
          </Card>
          <Card>
            <div className="font-semibold">Automação de dados</div>
            <p className="mt-2 text-sm text-white/70">Integrações e rotinas que diminuem erro humano.</p>
          </Card>
          <Card>
            <div className="font-semibold">Suporte</div>
            <p className="mt-2 text-sm text-white/70">Manutenção mensal para evoluir com previsibilidade.</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
