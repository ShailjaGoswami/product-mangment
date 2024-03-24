import React from "react";
import SiderNav from "../components/SiderNav";
import UpsertCategory from "../components/UpsertCategory";
import { addCategory } from "../api/api"; 
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addCategory(data)
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
            <h1>Add Category</h1>
            <UpsertCategory category={[]} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
