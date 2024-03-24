using System;
using System.ComponentModel.DataAnnotations;

namespace CrudApi.Model
{
    /// <summary>
    /// Category Master
    /// </summary>
    public class Category
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Category Name is Required")]
        [StringLength(100,ErrorMessage = "Length is grather than 100.")]
        public string cname { get; set; }

        [Required(ErrorMessage = "Category Description is Required")]
        [StringLength(100, ErrorMessage = "Length is grather than 100.")]
        public string cdescription { get; set; }

        public int isActive { get; set; } = 1;

        public DateTime insertedtime { get; set; }

        public DateTime updatedtime { get; set; }
    }
}
