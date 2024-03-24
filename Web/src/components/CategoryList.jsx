import React, { useState, useEffect } from "react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import "../assets/css/list.css";
import editIcon from "../assets/images/icons/edit.svg";
import deleteIcon from "../assets/images/icons/delete.svg";
import { useNavigate, Link } from "react-router-dom";
import { deleteCategory } from "../api/api";

const tableHead = {
  id: "id",
  cname: "Category Name",
  cdescription: "Description",
  isActive: "Is Active",
  action: "Action",
};

const CategoryList = (props) => {
  const { category } = props;
  const countPerPage = 10;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(category);
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState(null);

  const searchData = (val) => {
    const query = val?.toLowerCase();
    setCurrentPage(1);
    const data = category?.filter((item) =>
      item?.cname?.toLowerCase().includes(query)
    );
    setCollection(data.slice(0, countPerPage));
  };

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData(value);
    }

    if (category.length) {
      setCollection(category);
    }
  }, [value, category]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(collection?.slice(from, to));
  };

  const HandleClick = (e) => {
    e.preventDefault();
    navigate("/add-category");
  };

  const handleRedirect = (e, id) => {
    e.preventDefault();
    navigate("/" + id + "/edit-category");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCategory(categoryId);
    window.location.href = "/category";
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="search">
          <input
            placeholder="Search Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-outline-primary"
            onClick={(e) => HandleClick(e)}
          >
            Add Category
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
            {collection?.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.cname}</td>
                  <td>{category.cdescription}</td>
                  <td>{category.isActive === 1 ? "true" : "false"}</td>
                  <td>
                    <div className="d-flex">
                      <Link onClick={(e) => handleRedirect(e, category.id)}>
                        <img
                          src={editIcon}
                          className="icon-size"
                          alt="edit"
                        ></img>
                      </Link>
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        onClick={(e) => setCategoryId(category.id)}
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
        aria-labelledby="deleteModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModallabel">
                Delete Category
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
              to delete the Category
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

export default CategoryList;
