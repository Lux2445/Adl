import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Главная", to: "/" },
  { label: "О нас", to: "/about" },
  { label: "Проекты", to: "/projects" },
  { label: "Отзывы", to: "/reviews" },
  { label: "Контакты", to: "/contact" },
  { label: "Разработчик", to: "/developer" },
];

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between py-4 lg:py-5">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-display font-semibold tracking-tight text-foreground"
        >
          <span className="relative inline-flex items-center justify-center text-base font-medium uppercase tracking-[0.7rem] text-primary/80">
            <span
              className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
              aria-hidden="true"
            />
            <span className="relative">NEBULA</span>
          </span>
          <span className="hidden text-sm font-medium uppercase text-muted-foreground/80 md:block">
            IT STUDIO
          </span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.3rem] xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative px-2 py-1 transition",
                  "text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-0 right-0 -bottom-1 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300",
                      isActive && "scale-x-100",
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full border border-primary/50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4rem] text-primary transition hover:text-foreground"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-accent to-secondary transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Заказать</span>
          </Link>
        </div>
        <button
          type="button"
          onClick={handleToggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground transition hover:border-primary/60 hover:text-primary xl:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "xl:hidden",
          "absolute inset-x-0 top-full origin-top-right transform bg-background/95 backdrop-blur-xl transition-all duration-300",
          menuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-50 opacity-0 pointer-events-none",
        )}
      >
        <nav className="container mx-auto flex flex-col gap-4 py-6 text-sm font-medium uppercase tracking-[0.35rem]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between border-b border-border/40 pb-3 text-muted-foreground transition hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              <span>{item.label}</span>
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={handleCloseMenu}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-primary/60 bg-primary/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4rem] text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Заказать
          </Link>
        </nav>
      </div>
    </header>
  );
};
