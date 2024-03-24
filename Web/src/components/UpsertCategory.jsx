import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UpsertCategory = ({ category, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

  useEffect(() => {
    if (category) {
      setValue("cdescription", category.cdescription || "");
      setValue("cname", category.cname || "");
      setValue("isActive",category.isActive || "")
    }
  }, [category, setValue]);

  const handleFormSubmit = (data) => {
    
    data.isActive = data.isActive ? 1 : 0;
    onSubmit(data);
    reset()
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <div>
            <label htmlFor="categoryName" className="form-label">
              Category Name:
            </label>
          </div>
          <div>
            <div class="form-check form-switch">
              <label class="form-check-label" for="isActive">
                InActive/Active
              </label>
              <input class="form-check-input" type="checkbox" id="isActive" 
              {...register("isActive", { required: "Category Description is required" })}
              />
            </div>
          </div>
        </div>
        <input
          type="text"
          id="cname"
          {...register("cname", { required: "Category Name is required" })}
          className="form-control"
        />
        {errors.cname && (
          <span className="text-danger">{errors.cname.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="cdescription" className="form-label">Description:</label>
        <input 
          type="text" 
          id="cdescription"
          {...register("cdescription", { required: "Category Description is required" })} 
          className="form-control" 
        />
        {errors.cdescription && <span className="text-danger">{errors.cdescription.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UpsertCategory;
