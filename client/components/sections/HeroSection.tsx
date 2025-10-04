import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div
        className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="space-y-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45rem] text-primary">
          <Sparkles className="h-4 w-4" />
          full cycle digital studio
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-display font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Мы превращаем технологические идеи в продукты, которыми хочется
            пользоваться каждый день.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Синергия дизайна и разработки: исследуем, проектируем и запускаем
            цифровые экосистемы для брендов, которые думают на шаг вперёд.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/60 bg-primary/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4rem] text-primary transition hover:bg-primary hover:text-primary-foreground"
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
            <Play className="h-4 w-4" />
            Кейсы
          </Link>
        </div>
        <div className="grid gap-6 border border-border/60 bg-background/60 p-6 backdrop-blur-xl sm:grid-cols-3">
          {[
            {
              title: "20+",
              subtitle: "запущенных продуктов",
            },
            {
              title: "4.9/5",
              subtitle: "ср��дняя оценка клиентов",
            },
            {
              title: "48ч",
              subtitle: "на запуск MVP",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-1">
              <p className="text-3xl font-display font-semibold text-foreground">
                {item.title}
              </p>
              <p className="text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative hidden overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-background/40 via-background/10 to-background/80 p-10 shadow-[0_0_120px_rgba(123,97,255,0.25)] lg:flex">
        <div className="absolute inset-10 rounded-[2rem] border border-border/40" />
        <div className="relative z-10 flex w-full flex-col justify-between gap-10">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-primary/50 px-3 py-1 text-[10px] uppercase tracking-[0.4rem] text-primary/80">
              product sprint
            </span>
            <h3 className="text-2xl font-display font-semibold">
              "Digital Orbit" — корпоративная платформа для автоматизации
              процессов.
            </h3>
            <p className="text-sm text-muted-foreground">
              Аналитика, дизайн-системы, фронтенд и бекенд, интеграции с CRM и
              BI.
            </p>
          </div>
          <div className="grid gap-5 text-xs uppercase tracking-[0.3rem] text-muted-foreground/80">
            <div className="flex items-center justify-between rounded-3xl border border-border/50 bg-background/60 px-5 py-4">
              <span>UX Research</span>
              <span className="text-primary">01</span>
            </div>
            <div className="flex items-center justify-between rounded-3xl border border-border/50 bg-background/60 px-5 py-4">
              <span>Design System</span>
              <span className="text-accent">02</span>
            </div>
            <div className="flex items-center justify-between rounded-3xl border border-border/50 bg-background/60 px-5 py-4">
              <span>Development</span>
              <span className="text-secondary">03</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1 text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
              <span>Срок — 6 недель</span>
              <span className="block text-foreground">
                Команда 8 специалистов
              </span>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35rem] text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Подробнее
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
