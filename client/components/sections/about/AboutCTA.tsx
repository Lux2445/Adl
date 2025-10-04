import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-gradient-to-br from-background/50 via-background/20 to-background/70 p-12 sm:p-16">
      <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
            Присоединяйтесь к нам
          </p>
          <h2 className="text-3xl font-display font-semibold sm:text-4xl">
            Нужна команда, которая быстро проведёт от идеи до продукта?
            Свяжитесь с Nebula Studio.
          </h2>
          <p className="text-base text-muted-foreground">
            Расскажите, что хотите запустить, и мы предложим формат
            сотрудничества: discovery-спринт, roadmap или полное сопровождение.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
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
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35rem] text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
          >
            Портфолио
          </Link>
        </div>
      </div>
    </section>
  );
};
