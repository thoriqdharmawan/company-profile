import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  id: string;
  image: string;
  name: string;
  onPreview: () => void;
}

export default function ProductItem(props: Props) {
  const { image, name, id, onPreview } = props;

  return (
    <div className="overflow-hidden">
      <div className="relative h-24 w-full sm:h-36">
        <div className="absolute z-50 flex h-full w-full items-center justify-center opacity-0 hover:bg-slate-400 hover:bg-opacity-50 hover:opacity-100">
          <Button onClick={onPreview} size="sm" variant="outline">
            Preview
          </Button>
        </div>

        <Image
          fill
          alt={name}
          src={image}
          className="rounded-xl object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC"
        />
      </div>

      <div className="mt-2">
        <div className="mb-2">
          <h3 className="line-clamp-2 text-xl font-bold hover:line-clamp-none">
            {name || "-"}
          </h3>
          <p className="text-xs">Product id: #{id}</p>
        </div>
        <p className="line-clamp-2 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          omnis.
        </p>
      </div>
    </div>
  );
}
