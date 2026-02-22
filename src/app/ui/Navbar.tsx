import { NavLink } from "react-router-dom";
import { BRAND, NAV, LINKS } from "../config";
import { cn } from "./cn";
import Button from "./Button";

const link =
  "text-sm rounded-xl px-3 py-2 transition border border-transparent hover:border-white/10 hover:bg-white/5";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5 grid place-items-center overflow-hidden">
            <img src="/assets/logo-in.jpg" alt="IN" className="h-full w-full object-cover" />
          </div>
          <span className="hidden sm:block">{BRAND.companyName}</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(link, isActive ? "bg-white/5 border-white/10" : "")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={LINKS.whatsapp} variant="secondary" size="sm">WhatsApp</Button>
          <Button to="/contato" variant="primary" size="sm">Orçamento</Button>
        </div>
      </div>
    </header>
  );
}
