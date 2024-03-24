using ServiceStack.OrmLite;
using System.Data;

namespace CrudApi.DB
{
    public class DBHandler
    {
        /// <summary>
        /// Method is use to Open Connection
        /// </summary>
        /// <returns>Connection Object</returns>
        public IDbConnection openConnection()
        {
            //connection Open
            var dbFactory = new OrmLiteConnectionFactory("server=localhost;database=productdb;UID=root;password=123456", MySqlDialect.Provider);
            return dbFactory.Open();
        }
    }
}