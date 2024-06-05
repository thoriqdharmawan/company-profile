"use client";

import { useEffect, useRef, useState } from "react";
import { apiApp } from "../apiApp";
import {
  Products,
  ResponseImage,
  ResponseProduct,
} from "@/lib/interfaces/products";
import { ApiResponseInterface } from "@/lib/interfaces/api";

export const createProducts = (
  products: ResponseProduct[],
  images: ResponseImage[],
): Products[] => {
  return products.flatMap((product) => {
    return images
      .filter((image) => image.id.includes(product.id))
      .map((image) => ({
        id: product.id,
        name: product.name,
        image: image.image,
      }));
  });
};

const DEFAULT_LIMIT = 8;

const useGetProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resultProducts =
          await apiApp.get<ApiResponseInterface<ResponseProduct[]>>(
            "/product.json",
          );

        const resultImages =
          await apiApp.get<ApiResponseInterface<ResponseImage[]>>(
            "/image.json",
          );

        const result = createProducts(
          resultProducts.data.data,
          resultImages.data.data,
        );

        setProducts(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isFirstRender.current) {
      fetchData();

      isFirstRender.current = false;
    }
  }, []);

  return {
    products,
    error,
    loading,
    limit,
    setLimit,
    defaultLimit: DEFAULT_LIMIT,
  };
};

export default useGetProducts;
