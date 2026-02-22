import Section from "../app/ui/Section";
import Card from "../app/ui/Card";
import { FadeUp } from "../app/ui/Motion";
import { BRAND } from "../app/config";
import Badge from "../app/ui/Badge";
import Button from "../app/ui/Button";

export default function Empresa() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <FadeUp>
          <Badge>Sobre</Badge>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Uma software house enxuta, com padrão premium.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
            A {BRAND.companyName} foi criada para entregar soluções digitais com foco em organização operacional, automação de dados e presença profissional.
          </p>
          <div className="mt-6 flex gap-3">
            <Button to="/contato" size="lg">Orçamento</Button>
            <Button to="/portfolio" variant="secondary" size="lg">Ver portfólio</Button>
          </div>
        </FadeUp>
      </div>

      <Section
        eyebrow="Base"
        title="O que sustenta a entrega"
        subtitle="Processo direto, comunicação clara e cuidado com arquitetura — sem enrolação."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="font-semibold">Prazo rápido</div>
            <p className="mt-2 text-sm text-white/70">Escopo claro, entregas por etapa e prioridade no que dá resultado.</p>
          </Card>
          <Card>
            <div className="font-semibold">Back-end forte</div>
            <p className="mt-2 text-sm text-white/70">Automação de dados, integrações e rotinas com rastreabilidade.</p>
          </Card>
          <Card>
            <div className="font-semibold">Suporte e manutenção</div>
            <p className="mt-2 text-sm text-white/70">Plano mensal para evoluir o produto com previsibilidade.</p>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Processo"
        title="Como trabalhamos"
        subtitle="Do briefing ao deploy: design, copy, desenvolvimento e publicação."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="font-semibold">1) Briefing & Estratégia</div>
            <p className="mt-2 text-sm text-white/70">Objetivo, público, fluxo e escopo. Definição do que é “vitória”.</p>
          </Card>
          <Card>
            <div className="font-semibold">2) Design clean</div>
            <p className="mt-2 text-sm text-white/70">Layout premium e foco em conversão. Apple/SaaS vibe.</p>
          </Card>
          <Card>
            <div className="font-semibold">3) Implementação</div>
            <p className="mt-2 text-sm text-white/70">Boas práticas, qualidade e documentação.</p>
          </Card>
          <Card>
            <div className="font-semibold">4) Deploy & Suporte</div>
            <p className="mt-2 text-sm text-white/70">Publicação, ajustes finais e manutenção (opcional).</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
