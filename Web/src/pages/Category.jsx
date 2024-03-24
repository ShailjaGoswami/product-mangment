import React, { useEffect, useState } from "react";
import "../assets/css/main.css";
import SiderNav from "../components/SiderNav";
import CategoryList from "../components/CategoryList";
import { getCategory } from "../api/api";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory()
      .then((category) => {
        setCategory(category.response);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);
  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <SiderNav />

          <div class="col p-5 bg-white">
            <h4 class="heading">Category List</h4>
            <CategoryList category={category} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
