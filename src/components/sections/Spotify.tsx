import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';

export function Spotify() {
  return (
    <Section id="spotify" className="bg-gradient-to-r from-blue-600 to-cyan-400">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">Spotify</h2>
        <Card className="bg-transparent shadow-none border-none w-full max-w-2xl">
          <CardContent className="p-6 rounded-lg overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/artist/5yxZusrd6l9MifSnoSDF59?utm_source=generator"
              width="100%"
              height="450"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
