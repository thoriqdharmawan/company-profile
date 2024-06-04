import React from "react";
import ProductItem from "./ProductItem";
import { Button } from "../ui/button";

export default function Products() {
  return (
    <div className="flex flex-col w-full items-center gap-6 py-14 bg-slate-100">
      <div className="max-w-screen-md flex flex-col gap-6 text-center">
        <p className="font-semibold text-primary">WELCOME TO META VISION</p>
        <h2 className="text-4xl font-bold">
          We Simplify Software Usage For Any User Across Any Application.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          distinctio iusto similique aliquid numquam, doloremque rem, deserunt
          exercitationem nam laborum dolorum omnis neque animi.
        </p>
      </div>

      <div className="max-w-screen-md flex flex-col items-center gap-16">
        <div className="grid grid-cols-2 gap-12 mt-14">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        <Button>See All Products</Button>
      </div>
    </div>
  );
}
