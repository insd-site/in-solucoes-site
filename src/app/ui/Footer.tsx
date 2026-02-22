import { BRAND, LINKS } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-semibold">{BRAND.companyName}</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Apps, sites e automações com padrão premium — focado em performance, clareza e resultado.
          </p>
          <p className="mt-3 text-xs text-white/50">{BRAND.domain}</p>
        </div>

        <div className="text-sm grid gap-2">
          <div className="font-semibold">Contato</div>
          {BRAND.email ? (
            <a className="text-white/70 hover:text-white" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          ) : (
            <div className="text-white/50">Email (em breve)</div>
          )}
          <a className="text-white/70 hover:text-white" href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="text-white/70 hover:text-white" href={BRAND.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>

        <div className="text-sm grid gap-2">
          <div className="font-semibold">Atalhos</div>
          <a className="text-white/70 hover:text-white" href="/produtos/incontrol">InControl</a>
          <a className="text-white/70 hover:text-white" href="/produtos/remote-order">Remote Order</a>
          <div className="text-white/40">© {new Date().getFullYear()} {BRAND.companyName}</div>
        </div>
      </div>
    </footer>
  );
}
