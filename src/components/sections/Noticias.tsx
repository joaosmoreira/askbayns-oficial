import { useEffect, useState } from 'react';
import { Section } from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import type { NewsItem } from '@/lib/types';

export function Noticias() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [visibleNews, setVisibleNews] = useState(6);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    fetch('/data/news.json')
      .then((res) => res.json())
      .then((data) => {
        const sortedNews = data.news.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        setNews(sortedNews);
      });
  }, []);

  const loadMore = () => {
    setVisibleNews((prev) => prev + 6);
  };

  return (
    <Section id="noticias" className="bg-slate-100">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Notícias</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, visibleNews).map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {item.video ? (
                  <iframe
                    src={item.video}
                    title={item.title}
                    className="w-full h-48 rounded-lg mb-4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <p className="text-sm line-clamp-3">{item.content}</p>
                <Button
                  variant="link"
                  className="mt-4 p-0"
                  onClick={() => setSelectedNews(item)}
                >
                  Ler mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {news.length > visibleNews && (
          <div className="text-center">
            <Button onClick={loadMore}>Carregar mais notícias</Button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="text-2xl font-bold">
            {selectedNews?.title}
          </DialogTitle>
          {selectedNews && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{selectedNews.date}</p>
              {selectedNews.video ? (
                <iframe
                  src={selectedNews.video}
                  title={selectedNews.title}
                  className="w-full h-64 rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : selectedNews.image && (
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              <p className="text-base whitespace-pre-line">
                {selectedNews.content}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
