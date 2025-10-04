import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(43,245,160,0.12),_rgba(7,7,11,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(123,97,255,0.18),_rgba(7,7,11,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,_rgba(255,255,255,0.04)_0%,_rgba(255,255,255,0)_45%)]" />
      </div>
      <SiteHeader />
      <main className="relative flex-1">
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border/60 to-transparent lg:block" />
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 lg:px-20 xl:px-28">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};
