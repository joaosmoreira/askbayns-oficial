import { Section } from './Section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Merchandising() {
  return (
    <Section id="merchandising" className="bg-gradient-to-r from-pink-500 to-purple-500 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h3 className="text-2xl font-semibold">Merchandising Oficial</h3>
            <p className="text-lg text-white/80">
              Compra as nossas vestimentas lampaneiras.
            </p>
          </div>
          <div className="text-center md:text-right">
            <Button
              size="lg"
              className="bg-white text-emerald-950 hover:bg-white/90"
              asChild
            >
              <a
                href="https://sua-loja-online.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar Loja Online
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
