import Image from "next/image";

interface Props {
  id: string;
  image: string;
  name: string;
}

export default function ProductItem(props: Props) {
  const { image, name, id } = props;

  return (
    <div className="cursor-pointer overflow-hidden rounded-xl">
      <div className="relative h-36 w-full">
        <Image alt={name} fill src={image} />
      </div>

      <div className="mt-2">
        <div className="mb-4">
          <h3 className="text-xl font-bold line-clamp-2 hover:line-clamp-none">{name || "-"}</h3>
          <p className="text-xs">Product id: #{id}</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          omnis.
        </p>
      </div>
    </div>
  );
}
