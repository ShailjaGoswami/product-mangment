import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const UpsertProduct = ({ product, category, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [categoryId, setSelectedCategoryId] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const categoryOptions = category?.map((cOption) => ({
    key: cOption.id,
    value: cOption.cname,
    label: cOption.cname,
  }));
  useEffect(() => {
    if (product) {
      const { pname, cost, pdescription, isActive, categoryId } = product;
      setValue("pname", pname || "");
      setValue("cost", cost || "");
      setValue("pdescription", pdescription || "");
      setValue("isActive", isActive || "");
      const categoryIDs = categoryId?.split(",").map(Number);
      const selectedOptions = categoryIDs?.map((id) => {
        const categoryDetails = category?.find((cat) => cat.id === id);
        return {
          key: categoryDetails?.id,
          value: categoryDetails?.cname,
          label: categoryDetails?.cname,
        };
      });
      setSelectedOptions(selectedOptions);
      setSelectedCategoryId(categoryId.split(","));
    }
  }, [product, setValue]);

  const handleFormSubmit = async (data) => {
    data.categoryId = categoryId?.join(",");
    data.isActive = data?.isActive ? 1 : 0;
    onSubmit(data);
    reset();
  };

  const handleCategoryChange = (selectedOptions) => {
    let keys = selectedOptions.map((op) => op.key);
    setSelectedOptions(selectedOptions);
    setSelectedCategoryId(keys);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <div>
            <label htmlFor="pname" className="form-label">
              Product Name:
            </label>
          </div>
          <div>
            <div class="form-check form-switch">
              <label class="form-check-label" for="status">
                InActive/Active
              </label>
              <input class="form-check-input" type="checkbox" id="status" />
            </div>
          </div>
        </div>
        <input
          type="text"
          id="pname"
          {...register("pname", { required: "Product Name is required" })}
          className="form-control"
        />
        {errors.pname && (
          <span className="text-danger">{errors.pname.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="cost" className="form-label">
          Cost:
        </label>
        <input
          type="text"
          id="cost"
          {...register("cost", {
            required: "cost is required",
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: "Invalid cost format",
            },
          })}
          className="form-control"
        />
        {errors.cost && (
          <span className="text-danger">{errors.cost.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="pdescription" className="form-label">
          Description
        </label>
        <input
          type="text"
          id="pdescription"
          className="form-control"
          {...register("pdescription", {
            required: "Description is required",
          })}
        />
        {errors.pdescription && (
          <span className="text-danger">{errors.pdescription.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <Select
          isMulti
          name="category"
          id="categoryId"
          options={categoryOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          value={selectedOptions}
          {...register("categoryId")}
          onChange={handleCategoryChange}
        />
        {errors.category && (
          <span className="text-danger">{errors.category.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UpsertProduct;
