using CrudApi.BL;
using CrudApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        CategoryBL categoryBL;

        [Route("allCategory")]
        [HttpGet]
        public IActionResult AllCategory()
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.GetAllCategory());
        }

        [Route("insertCategory")]
        [HttpPost]
        public IActionResult InsertCategory([FromBody] Category objCategory)
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.InsertCategory(objCategory));
        }

        [Route("updateCategory")]
        [HttpPut]
        public IActionResult UpdateCategory([FromBody] Category objCategory)
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.UpdateCategory(objCategory));
        }

        [Route("deleteCategory/{categoryId}")]
        [HttpDelete]
        public IActionResult DeleteCategory(int categoryId)
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.DeleteCategory(categoryId));
        }

        [Route("categoryById/{categoryId}")]
        [HttpGet]
        public IActionResult CategoryById(int categoryId)
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.GetAllById(categoryId));
        }

        [Route("categoryByName/{categoryName}")]
        [HttpGet]
        public IActionResult CategoryByName(string categoryName)
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.GetAllCategoryName(categoryName));
        }

        [Route("changeStatus")]
        [HttpGet]
        public IActionResult ChangeStatus(bool isActive,int categoryId)
        {
            categoryBL = new CategoryBL();
            return Ok(categoryBL.ChangeStatus(categoryId,isActive));
        }
    }
}
