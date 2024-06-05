"use client";

import ProductItem from "./ProductItem";
import { Button } from "../ui/button";
import useGetProducts from "@/api/products/useGetProducts";
import { Products as IProducts } from "@/lib/interfaces/products";

export default function Products() {
  const { error, loading, products, defaultLimit, limit, setLimit } =
    useGetProducts();

  console.log({ error, loading, products });

  return (
    <div className="flex w-full flex-col items-center gap-6 bg-slate-100 py-14">
      <div className="flex max-w-screen-lg flex-col gap-6 text-center">
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

      <div className="flex w-full max-w-screen-lg flex-col gap-16">
        {!loading && products?.[0] && (
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {products
              ?.slice(0, limit)
              ?.map((product: IProducts) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                />
              ))}
          </div>
        )}

        <div className="flex w-full justify-center">
          <Button
            onClick={() => {
              setLimit((prev) =>
                prev === defaultLimit ? products.length : defaultLimit,
              );
            }}
          >
            {limit === defaultLimit ? "See All Products" : "See Less Products"}
          </Button>
        </div>
      </div>
    </div>
  );
}
