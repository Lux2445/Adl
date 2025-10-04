interface PagePlaceholderProps {
  title: string;
  description: string;
  hint?: string;
}

export const PagePlaceholder = ({
  title,
  description,
  hint,
}: PagePlaceholderProps) => {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-background/60 p-10 text-center">
      <p className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
        В разработке
      </p>
      <h1 className="mt-6 text-3xl font-display font-semibold text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base text-muted-foreground">{description}</p>
      {hint ? (
        <p className="mt-6 text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
          {hint}
        </p>
      ) : null}
    </div>
  );
};
