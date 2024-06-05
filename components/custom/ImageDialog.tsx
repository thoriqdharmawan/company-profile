import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string | undefined;
}

export default function ImageDialog(props: Props) {
  const { open, onOpenChange, image } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="[&>button]:hidden">
        <h1 className="text-center text-xl font-semibold">Preview Image</h1>
        {image && (
          <Image
            src={image}
            alt="preview"
            width={720}
            height={720}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
