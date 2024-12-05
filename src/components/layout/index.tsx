import { ReactNode } from 'react';
import { Hero } from './Hero';
import { Menu } from './Menu';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden">
      <Hero />
      <Menu />
      <main className="flex-1 w-full overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}