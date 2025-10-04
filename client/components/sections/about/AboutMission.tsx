const principles = [
  {
    title: "Честная аналитика",
    description:
      "Начинаем с данных: проводим глубинные интервью, анализируем продуктовые метрики и формируем гипотезы роста.",
  },
  {
    title: "Дизайн-система",
    description:
      "Строим UI-кит и библиотеку паттернов, чтобы продукты масштабировались без потери качества.",
  },
  {
    title: "Engineering-first",
    description:
      "Инженеры участвуют с discovery-этапа. Проектируем архитектуру, CICD и автоматизацию одновременно с дизайном.",
  },
];

const timeline = [
  {
    year: "2017",
    title: "Основание студии",
    description:
      "Первый продукт — внутренний инструмент для аналитики продаж, который вырос в SaaS-сервис.",
  },
  {
    year: "2019",
    title: "Глобальные клиенты",
    description:
      "Вышли на международные рынки и начали работать с финтехом и ритейлом в Европе.",
  },
  {
    year: "2022",
    title: "Запуск R&D",
    description:
      "Создали исследовательскую команду для экспериментов с AI и персонализацией цифровых продуктовых воронок.",
  },
];

export const AboutMission = () => {
  return (
    <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
          Миссия и подход
        </p>
        <h2 className="text-3xl font-display font-semibold sm:text-4xl">
          Создаём цифровые продукты, которые при��осят заметную пользу бизнесу и
          пользователям.
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground">
          Наша миссия — ускорять компании, помогающие людям и бизнесу. Мы
          выстраиваем долгосрочные партнёрства, перенастраиваем процессы и
          делаем цифровую трансформацию менее хаотичной.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-3xl border border-border/60 bg-background/70 p-6"
            >
              <h3 className="text-lg font-display text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground/90">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
          Вехи
        </p>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-border/60 to-secondary" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative rounded-3xl border border-border/60 bg-background/70 p-6"
              >
                <span className="absolute -left-[23px] top-6 h-5 w-5 rounded-full border border-primary/70 bg-background" />
                <p className="text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-display text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground/90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
