import { BrainCircuit, Code2, Globe, Sparkle } from "lucide-react";

const capabilities = [
  {
    title: "UX Strategy",
    description:
      "Глубокое исследование, пользовательские сценарии и CJM, чтобы продукт решал реальные задачи.",
    icon: BrainCircuit,
    accent: "from-primary/20 via-primary/10 to-background",
    stats: "+143% вовлечённость",
  },
  {
    title: "Product Design",
    description:
      "Дизайн-системы, визуальные концепции и прототипирование с высоким уровнем детализации.",
    icon: Sparkle,
    accent: "from-secondary/20 via-secondary/10 to-background",
    stats: "25 дизайн-спринтов",
  },
  {
    title: "Fullstack Dev",
    description:
      "Frontend и backend без разрывов: React, Node.js, микросервисы, облачная инфраструктура.",
    icon: Code2,
    accent: "from-accent/20 via-accent/10 to-background",
    stats: "48ч MVP",
  },
  {
    title: "Growth & Data",
    description:
      "А/Б тесты, аналитика, гипотезы и автоматизация маркетинга для роста продуктов.",
    icon: Globe,
    accent: "from-primary/20 via-background to-background",
    stats: "ROI x4",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="space-y-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
            Навыки и экспертность
          </p>
          <h2 className="max-w-3xl text-3xl font-display font-semibold sm:text-4xl lg:text-5xl">
            Команда стратегов, дизайнеров и разработчиков, которые говорят на
            языке бизнеса и технологии.
          </h2>
        </div>
        <p className="max-w-xl text-base text-muted-foreground">
          В Nebula Studio каждый модуль — компонент. Мы создаём цифровые
          экосистемы, опираясь на сильную систему дизайнерских и инженерных
          практик.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background/70 p-8 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div
                className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-border/50 px-3 py-1 text-[10px] uppercase tracking-[0.35rem] text-muted-foreground/70">
                  {item.stats}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground/90">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
