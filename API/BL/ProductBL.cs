using CrudApi.DB;
using CrudApi.Model;
using ServiceStack.OrmLite;
using System;

namespace CrudApi.BL
{
    /// <summary>
    /// Product BL 
    /// </summary>
    public class ProductBL
    {
        private DBHandler _objDBHandler;

        public ProductBL()
        {
            _objDBHandler = new DBHandler();
        }

        /// <summary>
        /// Insert Product
        /// </summary>
        /// <param name="objProduct"></param>
        /// <returns></returns>
        public Response InsertProduct(Product objProduct)
        {
            Response objResponseModel = new Response();

            objProduct.insertedtime = DateTime.UtcNow;

            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //insert 
                    double success = db.Insert(objProduct);
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
        /// Update Product
        /// </summary>
        /// <param name="objProduct"></param>
        /// <returns></returns>
        public Response UpdateProduct(Product objProduct)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //Check for data
                    if (db.Exists<Product>(x => x.id == objProduct.id))
                    {
                        double success = db.UpdateOnly(() => new Product
                        {
                            pname = objProduct.pname,
                            categoryId = objProduct.categoryId,
                            pdescription = objProduct.pdescription,
                            isActive = objProduct.isActive,
                            cost = objProduct.cost,
                            updatedtime = DateTime.UtcNow
                        }, where: x => x.id == objProduct.id);

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
        /// Change Status - active/deactive
        /// </summary>
        /// <param name="id"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public Response ChangeStatus(int id, bool status)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //Check for data
                    if (db.Exists<Product>(x => x.id == id))
                    {
                        double success = db.UpdateOnly(() => new Product { isActive = status ? 1 : 0 }, where: x => x.id == id);
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
        /// Delete Product
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public Response DeleteProduct(int productId)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //delete
                    int success = db.DeleteById<Product>(productId);
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
        /// Get Product
        /// </summary>
        /// <returns></returns>
        public Response GetAllProduct()
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //fetch all rows.
                    objResponseModel.response = db.Select<Product>();
                    objResponseModel.errorMessage = "Product Details !!";
                    return objResponseModel;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Get Product By Name
        /// </summary>
        /// <param name="pName"></param>
        /// <returns></returns>
        public Response GetAllProductName(string pName)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //fetch all rows.
                    objResponseModel.response = db.Select<Product>(x => x.pname.Contains(pName));
                    objResponseModel.errorMessage = "Product Details By Product Name !!";
                    return objResponseModel;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Get All Product By ID
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public Response GetAllById(int productId)
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    //fetch all rows.
                    objResponseModel.response = db.Select<Product>(x => x.id == productId);
                    objResponseModel.errorMessage = "Product Details By Product Id !!";
                    return objResponseModel;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
