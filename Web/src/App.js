import React, { lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
import Category from "./pages/Category";
import EditCategory from "./pages/EditCategory";
import EditProduct from "./pages/EditProduct";
import Dashboard from "./pages/Dashboard";
const Product = lazy(() => import("./pages/Product"));
function App() {
  return (
    <div className="bg-navy">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-Category" element={<AddCategory />} />
          <Route path="/:id/edit-Category" element={<EditCategory />} />
          <Route path="/:id/edit-product" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
