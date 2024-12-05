import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';

export function Spotify() {
  return (
    <Section id="spotify">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Spotify</h2>
        <Card>
          <CardContent className="p-6">
            <iframe
              src="https://open.spotify.com/embed/artist/5yxZusrd6l9MifSnoSDF59?utm_source=generator"
              width="100%"
              height="600"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
