import Image from "next/image";

export default function ProductItem() {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl">
      <div className="relative h-36 w-full">
        <Image alt="product" fill src="/images/hero.jpg" />
      </div>

      <div className="mt-2">
        <h3 className="mb-4 text-xl font-bold">Premium Fish</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          omnis.
        </p>
      </div>
    </div>
  );
}
