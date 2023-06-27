import React from "react";
import { Hero } from "./Components/Hero";
import { ProductList } from "../components/Product/ProductList";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <main>
      <Hero />
      <ProductList />
      <Footer />
    </main>
  );
};
