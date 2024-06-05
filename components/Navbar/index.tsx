"use client";

import { Button } from "../ui/button";

export default function Navbar() {
  const handleScrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white py-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <div className="m-auto flex max-w-screen-lg items-center justify-between">
        <h2 className="text-xl font-extrabold">META Vision</h2>
        <div className="flex select-none gap-12">
          <p
            onClick={() => handleScrollTo("about-us", 920)}
            className="cursor-pointer text-sm font-semibold text-secondary-foreground"
          >
            About Us
          </p>
          <p
            onClick={() => handleScrollTo("products", 1420)}
            className="cursor-pointer text-sm font-semibold text-secondary-foreground"
          >
            Products
          </p>
        </div>

        <Button size="sm" variant="ghost">
          Login
        </Button>
      </div>
    </div>
  );
}
