import { Biografia } from '@/components/sections/Biografia';
import { Fotografias } from '@/components/sections/Fotografias';
import { FormularioContacto } from '@/components/sections/FormularioContacto';
import { Merchandising } from '@/components/sections/Merchandising';
import { Noticias } from '@/components/sections/Noticias';
import { Spotify } from '@/components/sections/Spotify';
import { Videoclipes } from '@/components/sections/Videoclipes';

export function Routes() {
  return (
    <div className="w-full">
      <Biografia />
      <Spotify />
      <Noticias />
      <Videoclipes />
      <Fotografias />
      <Merchandising />
      <FormularioContacto />
    </div>
  );
}