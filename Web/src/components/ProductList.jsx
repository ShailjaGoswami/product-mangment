import React, { useState, useEffect } from "react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import "../assets/css/list.css";
import editIcon from "../assets/images/icons/edit.svg";
import deleteIcon from "../assets/images/icons/delete.svg";
import { useNavigate, Link } from "react-router-dom";
import { deleteProduct } from "../api/api";

const tableHead = {
  id: "id",
  pname: "Product Name",
  pdescription: "Product Description",
  isActive: "Is Active",
  action: "Action",
};

const ProductList = (props) => {
  const { products } = props;
  const countPerPage = 10;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(products);
  const navigate = useNavigate();
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    if (products.length) {
      setCollection(products);
    }
  }, []);

  const searchData = (val) => {
    const query = val?.toLowerCase();
    setCurrentPage(1);
    const data = products?.filter(
      (item) =>
        item?.pname?.toLowerCase().includes(query) ||
        item?.category?.toLowerCase().includes(query)
    );
    setCollection(data.slice(0, countPerPage));
  };

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData(value);
    }
  }, [value]);

  const handleSearch = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(collection?.slice(from, to));
  };

  const HandleClick = (e) => {
    e.preventDefault();
    navigate("/add-product");
  };

  const handleRedirect = (e, id) => {
    e.preventDefault();
    navigate("/" + id + "/edit-product");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteProduct(productId);
    window.location.href = "/product";
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="search">
          <input
            placeholder="Search"
            value={value}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div>
          <button
            className="btn btn-outline-primary"
            onClick={(e) => HandleClick(e)}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="table-responsive ">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {Object.values(tableHead).map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="trhover">
            {products?.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.pname}</td>
                  <td>{product.pdescription}</td>
                  <td>{product.isActive === 1 ? "true" : "false"}</td>
                  <td>
                    <div className="d-flex">
                      <Link onClick={(e) => handleRedirect(e, product.id)}>
                        <img
                          src={editIcon}
                          className="icon-size"
                          alt="edit"
                        ></img>
                      </Link>
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        onClick={(e) => setProductId(product.id)}
                      >
                        <img
                          src={deleteIcon}
                          className="icon-size"
                          alt="delete"
                        ></img>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={collection.length}
      />
      {/* Delete modal  */}
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">
                Delete Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="text-warning">Warning !</div>Are you sure You want
              to delete the Product
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={(e) => handleDelete(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
