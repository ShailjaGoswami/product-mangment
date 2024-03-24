import React, { useState, useEffect } from "react";
import SiderNav from "../components/SiderNav";
import UpsertCategory from "../components/UpsertCategory";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCategoryById, updateCategory } from "../api/api"; // Import API functions

const EditCategory = () => {
  const [category, setCategory] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryById(id)
      .then((category) => {
        setCategory(category.response[0]);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);

  const onSubmit = (data) => {
    data.id = id;
    updateCategory(data)
      .then(() => {
        alert("Product added successfully!");
        navigate("/Category");
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
            <h1>Edit Category</h1>
            <UpsertCategory category={category} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
