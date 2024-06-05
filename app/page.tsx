"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import AOS from "aos";

import { useEffect } from "react";

import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
