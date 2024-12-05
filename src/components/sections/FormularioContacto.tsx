import { useState } from 'react';
import { Section } from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

export function FormularioContacto() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.currentTarget,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contacto em breve.',
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao enviar a mensagem.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contacto" className="bg-purple-950">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">Contacto</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Envie-nos uma mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telemóvel</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" name="subject" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}