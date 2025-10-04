import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-gradient-to-br from-background/60 via-background/30 to-background/80 p-12 sm:p-16">
      <div className="absolute right-16 top-12 hidden h-48 w-48 rounded-full bg-primary/30 blur-3xl sm:block" />
      <div className="absolute -left-10 bottom-0 hidden h-40 w-40 rounded-full bg-secondary/20 blur-3xl sm:block" />
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
            Готовы к запуску
          </p>
          <h2 className="max-w-2xl text-3xl font-display font-semibold sm:text-4xl lg:text-5xl">
            Переведите идею в готовый продукт. Соберём команду, разработаем
            стратегию и выведем MVP.
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Расскажите о задаче, и уже через 48 часов получите концепт и план
            спринта. Начнём с пилота или сразу войдём в масштабный проект.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-primary/60 bg-primary/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4rem] text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-accent to-secondary transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">
              Заказать проект
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
