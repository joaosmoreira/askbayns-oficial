import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';

const videos = [
  { id: '1', title: 'Videoclipe 1', embedId: 'CWuZlaiL-Lk' },
  { id: '2', title: 'Videoclipe 2', embedId: 'VIDEO_ID_2' },
  { id: '3', title: 'Videoclipe 3', embedId: 'VIDEO_ID_3' },
  { id: '4', title: 'Videoclipe 4', embedId: 'VIDEO_ID_4' },
  { id: '5', title: 'Videoclipe 5', embedId: 'VIDEO_ID_5' },
  { id: '6', title: 'Videoclipe 6', embedId: 'VIDEO_ID_6' },
];

export function Videoclipes() {
  return (
    <Section id="videoclipes" className="bg-zinc-900">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">
          Videoclipes
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.id} className="bg-black border-none">
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
