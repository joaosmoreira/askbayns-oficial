import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

interface ImagemModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImagemModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImagemModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogTitle className="sr-only">Visualizar Imagem</DialogTitle>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}