"use client";

import ProductItem from "./ProductItem";
import { Button } from "../ui/button";
import useGetProducts from "@/api/products/useGetProducts";
import { Products as IProducts } from "@/lib/interfaces/products";
import ImageDialog from "../custom/ImageDialog";
import { useState } from "react";

interface ImageState {
  open: boolean;
  image: undefined | string;
}

export default function Products() {
  const { loading, products, defaultLimit, limit, setLimit } = useGetProducts();

  const [preview, setPreview] = useState<ImageState>({
    open: false,
    image: undefined,
  });

  return (
    <div
      id="products"
      className="flex w-full flex-col items-center gap-6 bg-slate-100 py-14"
    >
      <div className="flex max-w-screen-lg flex-col gap-6 px-8 text-center lg:px-0">
        <p className="font-semibold text-primary">OUR PRODUCTS</p>
        <h2 className="text-4xl font-bold">
          Innovative Solutions for Your Digital Needs.
        </h2>
        <p>
          We offer a variety of products designed to streamline your digital
          operations and improve efficiency. Explore our range of solutions
          tailored to meet the needs of various applications.
        </p>
      </div>

      <div className="flex w-full max-w-screen-lg flex-col gap-16">
        {!loading && products?.[0] && (
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 px-8 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
            {products?.slice(0, limit)?.map((product: IProducts) => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                onPreview={() => {
                  setPreview({
                    image: product.image,
                    open: true,
                  });
                }}
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

      <ImageDialog
        open={preview.open}
        image={preview.image}
        onOpenChange={(open) => {
          setPreview((prev: ImageState) => ({ ...prev, open }));
        }}
      />
    </div>
  );
}
