import React, { useEffect, useState } from "react";
import "../assets/css/main.css";
import SiderNav from "../components/SiderNav";
import ProductList from "../components/ProductList";
import { getProducts } from "../api/api";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products.response);
      })
      .catch((error) => {
        console.error("Error fetching Products:", error);
      });
  }, []);

  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <SiderNav />

          <div class="col p-5 bg-white">
            <h4 class="heading">Product List</h4>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
