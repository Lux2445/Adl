const team = [
  {
    name: "Ирина Смолина",
    role: "Partner / Strategy",
    bio: "Бывший руководитель продуктовой трансформации в крупном банке. Курирует discovery и стратегические воркшопы.",
  },
  {
    name: "Глеб Шаров",
    role: "Design Director",
    bio: "12 лет опыта в UX/UI. Отвечает за дизайн-системы, арт-дирекцию и качество визуального языка.",
  },
  {
    name: "Софья Котова",
    role: "Engineering Lead",
    bio: "Специалист по масштабируемым архитектурам и DevOps. Настраивает процессы CICD и код-ревью.",
  },
  {
    name: "Максим Исаев",
    role: "Head of Delivery",
    bio: "Управляет продуктовыми командами студии, планирует спринты, контролирует метрики и сроки.",
  },
];

export const AboutTeam = () => {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
            Команда
          </p>
          <h2 className="text-3xl font-display font-semibold sm:text-4xl">
            Ведём продукт от стратегии до поддержки и масштабирования.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground/90">
          Собираем кросс-функциональные команды под задачи клиентов: продуктовые
          дизайнеры, исследователи, фронтенд и бэкенд инженеры, аналитики.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/70 p-6 transition hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-background to-background opacity-0 transition group-hover:opacity-100" />
            <div className="space-y-2">
              <h3 className="text-xl font-display text-foreground">
                {member.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.35rem] text-muted-foreground/70">
                {member.role}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
