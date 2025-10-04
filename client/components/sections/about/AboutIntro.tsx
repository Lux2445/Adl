export const AboutIntro = () => {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
          История студии
        </p>
        <h1 className="text-4xl font-display font-semibold leading-[1.05] text-foreground sm:text-5xl">
          С 2017 года помогаем технологичным компаниям строить продукты, в
          которые влюбляются пользователи.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Nebula Studio родилась как команда из дизайнеров и инженеров, которые
          хотели объединить стратегию, UX и разработку в один непрерывный
          процесс. Мы участвовали в запуске финтех-сервисов, платформ для
          логистики и экосистем для ритейла.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.35rem] text-muted-foreground/70 sm:grid-cols-4">
          <div className="rounded-3xl border border-border/60 bg-background/70 p-4">
            <p className="text-2xl font-display text-foreground">45+</p>
            <p>специалистов</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/70 p-4">
            <p className="text-2xl font-display text-foreground">5 стран</p>
            <p>география клиентов</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/70 p-4">
            <p className="text-2xl font-display text-foreground">62%</p>
            <p>проекты по рекомендациям</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/70 p-4">
            <p className="text-2xl font-display text-foreground">6 лет</p>
            <p>средний опыт команды</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-background/30 via-background/10 to-background/70 p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(43,245,160,0.12),_transparent)]" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-10">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-primary/50 px-3 py-1 text-[10px] uppercase tracking-[0.35rem] text-primary/80">
              Manifesto
            </span>
            <p className="text-base text-muted-foreground">
              Мы верим, что хорошая технология ощущается как магия. Поэтому
              соединяем исследовательскую культуру, крафтовый дизайн и гибкую
              разработку.
            </p>
          </div>
          <div className="grid gap-4 text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
            <div className="rounded-3xl border border-border/60 bg-background/80 px-5 py-4">
              Продуктовая стратегия — до дизайна
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/80 px-5 py-4">
              Прототипируем и тестируем идеи за дни
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/80 px-5 py-4">
              Разрабатываем масштабируемые архитектуры
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
