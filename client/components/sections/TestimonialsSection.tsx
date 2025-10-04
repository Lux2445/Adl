import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алина Митрофанова",
    role: "Chief Product Officer, Pulse Banking",
    quote:
      "Команда Nebula помогла нам за три месяца сформировать новую цифровую стратегию и довести приложение до релиза. Их подход к исследованиям и дизайн-системе впечатляет.",
  },
  {
    name: "Даниил Платонов",
    role: "Founder, Orbit Logistics",
    quote:
      "Нам важно было найти партнёров, которые понимают сложные процессы. Ребята интегрировали всё — от UX интервью до автоматизации отчётности.",
  },
  {
    name: "Анна Журавлёва",
    role: "Marketing Lead, Flow Retail",
    quote:
      "Nebula внедрила аналитические панели и запустила кампании роста. В итоге мы масштабировали онлайн-продажи в 3 раза.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-4">
        <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/80">
          Отзывы клиентов
        </p>
        <h2 className="max-w-2xl text-3xl font-display font-semibold sm:text-4xl lg:text-5xl">
          С нами работают технологичные компании, которые ценят скорость и
          качество.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="relative flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/70 p-8 transition hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background/80 text-primary">
              <Quote className="h-5 w-5" />
            </div>
            <blockquote className="pt-6 text-base leading-relaxed text-muted-foreground">
              {item.quote}
            </blockquote>
            <figcaption className="mt-auto pt-4 text-sm">
              <p className="font-display text-sm font-semibold text-foreground">
                {item.name}
              </p>
              <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/70">
                {item.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
