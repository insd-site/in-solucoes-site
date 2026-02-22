export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(255,255,255,0.07),transparent_45%),radial-gradient(900px_circle_at_75%_20%,rgba(255,255,255,0.05),transparent_45%),radial-gradient(900px_circle_at_45%_85%,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="absolute inset-0 opacity-70 bg-[linear-gradient(to_bottom,rgba(11,15,20,0.0),rgba(11,15,20,0.8),rgba(11,15,20,1))]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)] opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  );
}
