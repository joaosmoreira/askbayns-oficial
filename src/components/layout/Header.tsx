import { MusicIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MusicIcon className="h-6 w-6" />
          <span className="text-xl font-bold">ASKBAYNS</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}