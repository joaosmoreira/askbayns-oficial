import { Facebook, Youtube, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sobre a Banda</h3>
            <p className="text-gray-400 max-w-md">
              Uma banda de rock alternativo portuguesa que mistura influências do
              rock clássico com elementos modernos, criando um som único e
              envolvente que cativa audiências por todo o país.
            </p>
          </div>
          <div className="space-y-4 md:text-right">
            <h3 className="text-xl font-bold">Redes Sociais</h3>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://facebook.com/askbayns/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/askbayns69/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@askbayns/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Askbayns. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por{' '}
            <a
              href="mailto:joaosmoreira86@gmail.com"
              className="hover:text-white transition-colors"
            >
              João Moreira <Mail className="inline-block h-4 w-4 mb-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}