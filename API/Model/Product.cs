using ServiceStack.DataAnnotations;
using System;

namespace CrudApi.Model
{
    /// <summary>
    /// Product Master
    /// </summary>
    public class Product
    {
        [PrimaryKey,AutoIncrement]
        public int id { get; set; }

        //[Required("")]
        public string pname { get; set; }

        public int cost { get; set; }

        public string pdescription { get; set; }

        public int isActive { get; set; }

        public DateTime insertedtime { get; set; }

        public DateTime updatedtime { get; set; }

        public string categoryId { get; set; }
    }
}