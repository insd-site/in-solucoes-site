import { Link } from "react-router-dom";
import { cn } from "./cn";

type Props = {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl border text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";
  const sizes = {
    sm: "h-9 px-3",
    md: "h-10 px-4",
    lg: "h-11 px-5 text-[15px]",
  } as const;

  const variants = {
    primary:
      "bg-white text-black border-white/10 hover:bg-white/90 shadow-soft",
    secondary:
      "bg-white/10 text-white border-white/10 hover:bg-white/15",
    ghost:
      "bg-transparent text-white border-white/10 hover:bg-white/5",
  } as const;

  const cls = cn(base, sizes[size], variants[variant], className);

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}
