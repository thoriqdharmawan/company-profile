import Image from "next/image";
import React from "react";

export default function ProductItem() {
  return (
    <div className="rounded-xl overflow-hidden bg-white hover:shadow-2xl cursor-pointer">
      <div className="h-36 w-full relative">
        <Image alt="product" fill src="/images/hero.jpg" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Premium Fish</h3>
        <p>
          Lorem ipsum, dolor sit
        </p>
        <p className="mt-4 font-semibold">Rp 12.000</p>
      </div>
    </div>
  );
}
