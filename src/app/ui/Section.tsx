import { cn } from "./cn";

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs tracking-widest uppercase text-white/55">{eyebrow}</div>
          ) : null}
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-white/70 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
