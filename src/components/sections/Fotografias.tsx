import { useEffect, useState } from 'react';
import { Section } from './Section';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Photo } from '@/lib/types';

export function Fotografias() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('/data/photos.json')
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  }, []);

  return (
    <Section id="fotografias" className="bg-indigo-950">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">Fotografias</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </Section>
  );
}