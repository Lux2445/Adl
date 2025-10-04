import { Link } from "react-router-dom";
import { Dribbble, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    icon: <Dribbble className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-4 w-4" aria-hidden="true" />,
  },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="container mx-auto grid gap-10 py-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.4rem] text-muted-foreground/70">
            Студия полного цикла
          </p>
          <h2 className="text-3xl font-display font-semibold text-foreground md:text-4xl">
            Создаём цифровые продукты,
            <span className="text-primary"> которые выделяют бизнес</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            От идеи до масштабирования: брендинг, UX/UI, разработка и аналитика
            в одном месте. Работайте с командой, которая чувствует
            технологические тренды.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/60 bg-primary/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4rem] text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <span className="relative z-10">Заказать проект</span>
            <span className="absolute inset-0 -z-10 translate-x-full bg-gradient-to-r from-primary via-accent to-secondary transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>
        <div className="grid gap-8 text-sm text-muted-foreground">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35rem] text-muted-foreground/80">
              Навигация
            </h3>
            <nav className="grid gap-2 text-sm uppercase tracking-[0.25rem] text-muted-foreground/80">
              <Link to="/about" className="transition hover:text-foreground">
                О нас
              </Link>
              <Link to="/projects" className="transition hover:text-foreground">
                Проекты
              </Link>
              <Link to="/reviews" className="transition hover:text-foreground">
                Отзывы
              </Link>
              <Link to="/contact" className="transition hover:text-foreground">
                Контакты
              </Link>
              <Link
                to="/developer"
                className="transition hover:text-foreground"
              >
                Разработчик
              </Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35rem] text-muted-foreground/80">
              Связь
            </h3>
            <a
              href="mailto:hello@nebula.studio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25rem] text-muted-foreground/80 transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@nebula.studio
            </a>
            <div className="flex items-center gap-4 pt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-background/70">
        <div className="container mx-auto flex flex-col items-start justify-between gap-3 py-5 text-xs uppercase tracking-[0.35rem] text-muted-foreground/60 md:flex-row">
          <span>
            © {new Date().getFullYear()} Nebula Studio. Все права защищены.
          </span>
          <span className="flex gap-4">
            <Link to="/privacy" className="transition hover:text-foreground">
              Политика
            </Link>
            <Link to="/terms" className="transition hover:text-foreground">
              Условия
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
