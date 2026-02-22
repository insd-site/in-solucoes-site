import { cn } from "./cn";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
