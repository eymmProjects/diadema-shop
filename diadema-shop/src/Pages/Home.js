import React from "react";
import { Hero } from "./Components/Hero";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../components/Product/ProductList";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </main>
  );
};
