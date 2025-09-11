import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Product from "./components/Product";
import CategorySection from "./components/CategorySection";
import AboutSection from "./components/AboutSection";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <Routes>
      {/* Home Page wrapped in Layout */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* About Page */}
      <Route
        path="/about"
        element={
          <Layout>
            {/* <h2 className="p-5">About Us Page</h2> */}
            <AboutSection/>
            {/* <Product /> */}

            {/* <ProductCard
              image="/assets/images/banner-2.jpg"
              name="My Product"
              price="₹49.99"
            />
            <ProductCard
              image="/assets/images/banner-1.jpg"
              name="My Product"
              price="₹49.99"
            /> */}
          </Layout>
        }
      />

      {/* Categories */}
      <Route
        path="/categories"
        element={
          <Layout>
            <h2 className="p-5">Categories Page</h2>
          </Layout>
        }
      />

      {/* Calendar */}
      <Route
        path="/calendar"
        element={
          <Layout>
            <h2 className="p-5">Dairy Calendar 2025</h2>
          </Layout>
        }
      />

      {/* Login (could be separate, without Layout if you want minimal UI) */}
      <Route path="/login" element={<h2 className="p-5">Login Page</h2>} />

      <Route path="/product" element={<Product />} />

    </Routes>
  );
}

export default App;
