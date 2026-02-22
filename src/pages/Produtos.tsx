import Section from "../app/ui/Section";
import Card from "../app/ui/Card";
import Button from "../app/ui/Button";
import { PRODUCTS } from "../app/config";

export default function Produtos() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Produtos</h1>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
          Projetos atuais com foco em eficiência e controle operacional.
        </p>
      </div>

      <Section eyebrow="Destaque" title="InControl e Remote Order" subtitle="Páginas completas, com diferenciais e proposta de valor.">
        <div className="grid gap-4 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <Card key={p.slug}>
              <div className="text-sm text-white/70">{p.tagline}</div>
              <div className="mt-2 text-2xl font-bold">{p.name}</div>
              <p className="mt-3 text-white/70 leading-relaxed">{p.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <Button to={`/produtos/${p.slug}`} variant="secondary">Ver detalhes</Button>
                <Button to="/contato" variant="ghost">Solicitar proposta</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
