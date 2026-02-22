import Section from "../app/ui/Section";
import Card from "../app/ui/Card";
import Button from "../app/ui/Button";
import { BRAND, LINKS } from "../app/config";

function buildWhatsAppMessage(data: { name: string; need: string; details: string }) {
  const msg =
    `Olá! Meu nome é ${data.name}. Quero orçamento para: ${data.need}.\n\nDetalhes: ${data.details}`;
  return `${LINKS.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export default function Contato() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contato</h1>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
          Me mande um briefing rápido. Eu respondo com proposta, prazo e próximos passos.
        </p>
      </div>

      <Section eyebrow="Briefing rápido" title="Vamos fechar" subtitle="Esse formulário já monta uma mensagem no WhatsApp.">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const name = String(fd.get("name") || "");
                const need = String(fd.get("need") || "");
                const details = String(fd.get("details") || "");
                window.open(buildWhatsAppMessage({ name, need, details }), "_blank");
              }}
            >
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Seu nome</label>
                <input name="name" required className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-2 outline-none focus:border-white/25" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">O que você precisa?</label>
                <select name="need" className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-2 outline-none focus:border-white/25">
                  <option>Automação / Integração</option>
                  <option>App / Sistema Web</option>
                  <option>Site institucional / Landing page</option>
                  <option>InControl (padrão)</option>
                  <option>InControl (personalizado)</option>
                  <option>Remote Order</option>
                  <option>Manutenção mensal</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Detalhes</label>
                <textarea name="details" className="min-h-28 rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-2 outline-none focus:border-white/25" placeholder="Contexto, prazo, referência, funcionalidades..." />
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button size="lg">Enviar no WhatsApp</Button>
                {BRAND.email ? (
                  <Button href={`mailto:${BRAND.email}`} variant="secondary" size="lg">Email</Button>
                ) : (
                  <Button href={LINKS.whatsapp} variant="secondary" size="lg">Contato direto</Button>
                )}
              </div>

              <div className="text-xs text-white/50">
                *Sem spam. Mensagem vai direto pro seu WhatsApp.
              </div>
            </form>
          </Card>

          <Card>
            <div className="font-semibold">Contato direto</div>
            <div className="mt-3 text-sm text-white/70">WhatsApp</div>
            <a className="text-sm underline text-white/90" href={LINKS.whatsapp} target="_blank" rel="noreferrer">{LINKS.whatsapp}</a>

            <div className="mt-4 text-sm text-white/70">Instagram</div>
            <a className="text-sm underline text-white/90" href={BRAND.instagram} target="_blank" rel="noreferrer">{BRAND.instagram}</a>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm text-white/70">Dica</div>
              <div className="mt-2 text-sm text-white/70 leading-relaxed">
                Se você mandar uma referência visual e o objetivo do projeto, eu fecho o escopo bem rápido.
              </div>
              <div className="mt-4">
                <Button href={LINKS.whatsapp} variant="secondary">Abrir WhatsApp</Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
