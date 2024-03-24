using CrudApi.BL;
using CrudApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ProductBL productBL;
        
        [Route("allProduct")]
        [HttpGet]
        public IActionResult AllProduct()
        {
            productBL = new ProductBL();
            return Ok(productBL.GetAllProduct());
        }

        [Route("insertProduct")]
        [HttpPost]
        public IActionResult InsertProduct([FromBody] Product objProduct)
        {
            productBL = new ProductBL();
            return Ok(productBL.InsertProduct(objProduct));
        }

        [Route("updateProduct")]
        [HttpPut]
        public IActionResult UpdateProduct([FromBody] Product objProduct)
        {
            productBL = new ProductBL();
            return Ok(productBL.UpdateProduct(objProduct));
        }

        [Route("deleteProduct/{productId}")]
        [HttpDelete]
        public IActionResult DeleteProduct(int productId)
        {
            productBL = new ProductBL();
            return Ok(productBL.DeleteProduct(productId));
        }

        [Route("productById/{productId}")]
        [HttpGet]
        public IActionResult GetProductById(int productId)
        {
            productBL = new ProductBL();
            return Ok(productBL.GetAllById(productId));
        }

        [Route("productByName/{productName}")]
        [HttpGet]
        public IActionResult ProductByName(string productName)
        {
            productBL = new ProductBL();
            return Ok(productBL.GetAllProductName(productName));
        }

        [Route("changeStatus")]
        [HttpGet]
        public IActionResult ChangeStatus(bool isActive, int productId)
        {
            productBL = new ProductBL();
            return Ok(productBL.ChangeStatus(productId, isActive));
        }
    }
}
