import { Compass, Rocket, Telescope } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "Фокусируемся на аналитике и исследованиях: интервью, аудит данных, гипотезы роста.",
    icon: Telescope,
    duration: "Неделя 1",
  },
  {
    title: "Design",
    description:
      "Архитектура, прототипы, визуальные концепции и построение дизайн-системы.",
    icon: Compass,
    duration: "Недели 2-3",
  },
  {
    title: "Launch",
    description:
      "Продуктовый спринт, разработка, QA, измерение метрик и итерации.",
    icon: Rocket,
    duration: "Недели 4-6",
  },
];

export const ProcessSection = () => {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-4">
        <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
          Как мы работаем
        </p>
        <h2 className="max-w-2xl text-3xl font-display font-semibold sm:text-4xl lg:text-5xl">
          Строим команды вокруг продукта и доводим его до релиза без потери
          темпа.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background/70 p-8 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-background via-background/60 to-background opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border/50 px-3 py-1 text-[10px] uppercase tracking-[0.35rem] text-muted-foreground/70">
                  {step.duration}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground/90">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
