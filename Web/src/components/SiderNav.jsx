import { Link } from "react-router-dom";
const SiderNav = () => {
  return (
    <>
      <div class="col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-light">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
          <Link
            to="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline">
              Product Managment Studio
            </span>
          </Link>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <Link to="/" class="nav-link align-middle px-0">
                <i class="fs-4 bi bi-house"></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/product" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-card-checklist"></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Product List</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/add-product" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-patch-plus"></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Add Products</span>
              </Link>
            </li>
            <li>
              <Link to="/category" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-tag"></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Category</span>
              </Link>
            </li>
            <li>
              <Link to="/add-category" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-bookmark-plus"></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Add Category</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SiderNav;
