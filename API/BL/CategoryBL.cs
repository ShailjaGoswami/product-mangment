using CrudApi.DB;
using CrudApi.Model;
using ServiceStack.OrmLite;
using System;

namespace CrudApi.BL
{
    /// <summary>
    /// Category Master BL Class
    /// </summary>
    public class CategoryBL
    {
        private DBHandler _objDBHandler;

        #region Public Methods

        public CategoryBL()
        {
            _objDBHandler = new DBHandler();
        }

        /// <summary>
        /// Method is use to insert Category 
        /// </summary>
        /// <param name="objCategory"></param>
        /// <returns></returns>
        public Response InsertCategory(Category objCategory)
        {
            Response objResponseModel = new Response();

            objCategory.insertedtime = DateTime.UtcNow;

            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //insert 
                    double success = db.Insert(objCategory);
                    if (success > 0)
                    {
                        objResponseModel.errorMessage = "Data Inserted Successfully !!";
                        return objResponseModel;
                    }
                    else
                    {
                        objResponseModel.isError = true;
                        objResponseModel.errorMessage = "Something Went Wrong !!";
                        return objResponseModel;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Method is use to Update Category
        /// </summary>
        /// <param name="objCategory"></param>
        /// <returns></returns>
        public Response UpdateCategory(Category objCategory)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //Check for data
                    if (db.Exists<Category>(x => x.id == objCategory.id))
                    {
                        double success = db.UpdateOnly(() => new Category { cname = objCategory.cname, cdescription = objCategory.cdescription, isActive = objCategory.isActive}, where: x => x.id == objCategory.id);
                        if (success > 0)
                        {
                            objResponseModel.errorMessage = "Data Updated Successfully";
                            return objResponseModel;
                        }
                        else
                        {
                            objResponseModel.isError = true;
                            objResponseModel.errorMessage = "Something Went Wrong !! Please Try Again !!";
                            return objResponseModel;
                        }
                    }
                    else
                    {
                        objResponseModel.isError = true;
                        objResponseModel.errorMessage = "Record Not Found !!";
                        return objResponseModel;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Change active/deactive status
        /// </summary>
        /// <param name="id"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public Response ChangeStatus(int id,bool status)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //Check for data
                    if (db.Exists<Category>(x => x.id == id))
                    {
                        double success = db.UpdateOnly(() => new Category { isActive = status ? 1 : 0 }, where: x => x.id == id);
                        if (success > 0)
                        {
                            objResponseModel.errorMessage = "Data Updated Successfully";
                            return objResponseModel;
                        }
                        else
                        {
                            objResponseModel.isError = true;
                            objResponseModel.errorMessage = "Something Went Wrong !! Please Try Again !!";
                            return objResponseModel;
                        }
                    }
                    else
                    {
                        objResponseModel.isError = true;
                        objResponseModel.errorMessage = "Record Not Found !!";
                        return objResponseModel;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Delete Category
        /// </summary>
        /// <param name="cateogryId"></param>
        /// <returns></returns>
        public Response DeleteCategory(int cateogryId)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //delete
                    int success = db.DeleteById<Category>(cateogryId);
                    if (success > 0)
                    {
                        objResponseModel.errorMessage = "Data Deleted Successfully !!";
                        return objResponseModel;
                    }
                    else
                    {
                        objResponseModel.isError = true;
                        objResponseModel.errorMessage = "Something Went Wrong !! Please Try Again !!";
                        return objResponseModel;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        /// <summary>
        /// Get All Category
        /// </summary>
        /// <returns></returns>
        public Response GetAllCategory()
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //fetch all rows.
                    objResponseModel.response = db.Select<Category>();
                    objResponseModel.errorMessage = "Category Details !!";
                    return objResponseModel;
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        /// <summary>
        /// Get All Category Name
        /// </summary>
        /// <param name="cName"></param>
        /// <returns></returns>
        public Response GetAllCategoryName(string cName)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //fetch all rows.
                    objResponseModel.response = db.Select<Category>(x => x.cname.Contains(cName));
                    objResponseModel.errorMessage = "Category Details !!";
                    return objResponseModel;
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        /// <summary>
        /// Get All By Id
        /// </summary>
        /// <param name="categoryId"></param>
        /// <returns></returns>
        public Response GetAllById(int categoryId)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //fetch all rows.
                    objResponseModel.response = db.Select<Category>(x => x.id == categoryId);
                    objResponseModel.errorMessage = "Category Details By Category Id !!";
                    return objResponseModel;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        #endregion
    }
}