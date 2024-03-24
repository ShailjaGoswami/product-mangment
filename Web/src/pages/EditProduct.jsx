import React, { useState, useEffect } from "react";
import SiderNav from "../components/SiderNav";
import UpsertProduct from "../components/UpsertProduct";
import { useNavigate, useParams } from "react-router-dom";

import { getProductById, updateProduct, getCategory } from "../api/api";

const EditProduct = () => {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState();
  let { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      data.id = id;
      updateProduct(data)
        .then(() => {
          alert("Product added successfully!");
          navigate("/Category");
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          alert("Failed to add product. Please try again.");
        });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    getProductById(id)
      .then((productEdit) => {
        setProduct(productEdit.response[0]);
      })
      .catch((error) => {
        console.error("Error fetching Product:", error);
      });

    getCategory()
      .then((category) => {
        setCategory(category.response);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <SiderNav />

        <div class="col p-5 bg-white">
          <div className="container">
            <h1>Edit Product</h1>
            <UpsertProduct
              product={product}
              category={category}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
