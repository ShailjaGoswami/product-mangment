import React, { useState, useEffect } from "react";
import SiderNav from "../components/SiderNav";
import UpsertProduct from "../components/UpsertProduct";

import { addProduct, getCategory } from "../api/api";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  // Fetch products on component mount
  useEffect(() => {
    getCategory()
      .then((category) => {
        setCategory(category.response);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);

  const onSubmit = (data) => {
    addProduct(data)
      .then(() => {
        alert("Product added successfully!");
        navigate("/product");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Failed to add product. Please try again.");
      });
  };

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <SiderNav />

        <div class="col p-5 bg-white">
          <div className="container">
            <h1>Add Product</h1>
            <UpsertProduct
              product={[]}
              category={category}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
