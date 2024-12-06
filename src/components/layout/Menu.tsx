import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/lib/hooks/use-scroll-spy';

const menuItems = [
  { label: 'Biografia', href: '#biografia' },
  { label: 'Spotify', href: '#spotify' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Videoclipes', href: '#videoclipes' },
  { label: 'Fotografias', href: '#fotografias' },
  { label: 'Merchandising', href: '#merchandising' },
  { label: 'Contacto', href: '#contacto' },
];

export function Menu() {
  const activeSection = useScrollSpy();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6 overflow-x-auto py-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-purple-600',
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}