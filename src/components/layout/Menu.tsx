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
    <nav className="fixed bottom-0 w-full bg-white border-t md:sticky md:top-0 md:border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">ASKBAYNS</a>

          {/* Menu Links */}
          <div className="flex items-center space-x-6">
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
      </div>
    </nav>
  );
}
