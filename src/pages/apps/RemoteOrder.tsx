import Section from "../../app/ui/Section";
import Card from "../../app/ui/Card";
import Button from "../../app/ui/Button";
import Badge from "../../app/ui/Badge";
import { LINKS } from "../../app/config";
import { Radar, Workflow, ToggleRight, Shield } from "lucide-react";

export default function RemoteOrder() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <Badge>Produto</Badge>
        <div className="mt-4 flex items-center gap-3">
          <img src="/assets/logo-remote-order.jpg" alt="Remote Order" className="h-10 w-10 rounded-2xl border border-white/10 object-cover" />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Remote Order</h1>
        </div>
        <p className="mt-4 text-white/70 max-w-3xl leading-relaxed">
          Automação sob medida com acionamento remoto e status: execute tarefas à distância com controle, rastreabilidade e foco em eficiência.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={LINKS.whatsapp} size="lg">Quero um Remote Order</Button>
          <Button to="/contato" variant="secondary" size="lg">Enviar briefing</Button>
        </div>
      </div>

      <Section eyebrow="O que entrega" title="Automação + controle remoto" subtitle="Aplicação rápida, objetiva e rastreável.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/70"><Workflow size={16} /> Automações específicas</div>
            <p className="mt-3 text-sm text-white/70">Regras, integrações e rotinas feitas para o seu fluxo real.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/70"><ToggleRight size={16} /> Ações remotas</div>
            <p className="mt-3 text-sm text-white/70">Acionamento remoto com status e confirmação.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/70"><Radar size={16} /> Status em tempo real</div>
            <p className="mt-3 text-sm text-white/70">Acompanhamento claro de cada etapa e execução.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Segurança" title="Operação confiável" subtitle="Projetado para reduzir deslocamentos e manter o controle.">
        <Card>
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5" />
            <div>
              <div className="font-semibold">Autenticação e integridade</div>
              <p className="mt-2 text-sm text-white/70">
                Fluxo cliente-servidor com validação, status e registro — ideal para manutenção e automação de processos.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button to="/contato">Montar proposta</Button>
                <Button href={LINKS.whatsapp} variant="secondary">WhatsApp</Button>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
