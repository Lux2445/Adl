import { ArrowUpRight, Layers, Radar, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    title: "Orbit Logistics",
    description:
      "Платформа для синхронизации цепочек поставок и аналитики KPI в реальном времени.",
    badge: "SaaS / Дистрибуция",
    icon: Layers,
    gradient: "from-primary/15 via-primary/5 to-background",
    result: "+63% скорость согласований",
  },
  {
    title: "Pulse Banking",
    description:
      "Мобильный банк с модульной дизайн-системой и AI-консультантом.",
    badge: "FinTech / Mobile",
    icon: Radar,
    gradient: "from-secondary/20 via-secondary/10 to-background",
    result: "NPS 72",
  },
  {
    title: "Flow Retail",
    description:
      "Экос��стема для омниканального ритейла: CMS, витрины, аналитика поведения.",
    badge: "E-commerce / Data",
    icon: Waves,
    gradient: "from-accent/20 via-accent/10 to-background",
    result: "GMV x3",
  },
];

export const MiniCasesSection = () => {
  return (
    <section className="space-y-10">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="space-y-4">
          <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
            Мини-кейсы
          </p>
          <h2 className="max-w-2xl text-3xl font-display font-semibold sm:text-4xl lg:text-5xl">
            Практикуем быстрые продуктовые спринты и выводим проекты в
            production без компромиссов.
          </h2>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 rounded-full border border-border/70 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35rem] text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
        >
          Смотреть все проект��
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {cases.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background/70 p-8 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div
                className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border/50 px-3 py-1 text-[10px] uppercase tracking-[0.35rem] text-muted-foreground/70">
                  {item.badge}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground/90">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
                <span>{item.result}</span>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.35rem] text-muted-foreground transition hover:border-primary/60 hover:text-primary"
                >
                  Подробнее
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
