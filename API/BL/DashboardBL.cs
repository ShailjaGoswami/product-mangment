using CrudApi.DB;
using CrudApi.Model;
using ServiceStack.OrmLite;
using System;
using System.Collections.Generic;

namespace CrudApi.BL
{
    /// <summary>
    /// Dashboard BL Class
    /// </summary>
    public class DashboardBL
    {
        private DBHandler _objDBHandler;

        #region Public Methods

        public DashboardBL()
        {
            _objDBHandler = new DBHandler();
        }

        /// <summary>
        /// Return total Record Count
        /// </summary>
        /// <returns></returns>
        public Response GetCount()
        {
            Response objResponseModel = new Response();
            try
            {
                using (var db = _objDBHandler.openConnection())
                {
                    Dictionary<string, int> countData = new Dictionary<string, int>();

                    countData.Add("categoryCount", db.Select<Category>().Count);
                    countData.Add("productCount", db.Select<Product>().Count);

                    objResponseModel.response = countData;
                    objResponseModel.errorMessage = "Total Count Details";
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
