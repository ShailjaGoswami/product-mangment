import React, { useEffect, useState } from "react";
import "../assets/css/main.css";
import "../assets/css/dashboard.css";
import SiderNav from "../components/SiderNav";
import { getCount } from "../api/api";
const Dashboard = () => {
  const [countCategory, setCategoryCount] = useState(0);
  const [countProduct, setProductCount] = useState(0);
  
  useEffect(() => {
    getCount()
      .then((res) => {
        setCategoryCount(res.response.categoryCount);
        setProductCount(res.response.productCount);
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
            <div class="container">
              <div class="row ">
                <div class="col-xl-6 col-lg-6">
                  <div class="card l-bg-blue-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large">
                        <i class="fas fa-shopping-cart"></i>
                      </div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Total Products</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                            {countProduct}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="card l-bg-blue-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large">
                        <i class="fas fa-shopping-cart"></i>
                      </div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Total Categories</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                            {countCategory}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
