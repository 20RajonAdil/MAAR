export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft">
        <span className="h-px w-8 bg-gold/60" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl text-balance">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-balance">
          {intro}
        </p>
      )}
    </div>
  );
}