import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';

const videos = [
  { id: '1', title: 'Videoclipe 1', embedId: 'LgsK1hPDArM' },
  { id: '2', title: 'Videoclipe 2', embedId: 'bxhKzzXJp4M' },
  { id: '3', title: 'Videoclipe 3', embedId: 'z40dWggs68s' },
  { id: '4', title: 'Videoclipe 4', embedId: 'aAjkVGqKo10' },
  { id: '5', title: 'Videoclipe 5', embedId: 'L7pXZiShbOg' },
  { id: '6', title: 'Videoclipe 6', embedId: '7bi5feSEzfQ' },
];

export function Videoclipes() {
  return (
    <Section id="videoclipes" className="bg-gradient-to-r from-amber-600 to-yellow-400">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">
          Videoclipes
        </h2>
        <div className="grid gap-6 md:grid-cols-3" >
          {videos.map((video) => (
            <Card key={video.id} className="border-none bg-transparent shadow-none">
              <CardContent className="p-4">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
