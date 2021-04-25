using DotNetCoreAngularOAuth.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreAngularOAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookservice _bookService;
        public BookController(IBookservice bookservice)
        {
            _bookService = bookservice;
        }
        [HttpPost("[action]")]
        public IActionResult AddBook([FromBody] Book book)
        {
            try
            {
                if (book.Title!=null && book.Description!=null)
                {
                    _bookService.AddBook(book);
                    return Ok("Book Added");
                }
                return BadRequest("Book was not added in to library due to invalid data or sufficent data was not provided");
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
        [HttpGet("[action]")]
        public IActionResult GetAllBooks()
        {
            return Ok(_bookService.GetAllBooks());
        }
        [HttpDelete("[action]")]
        public IActionResult DeleteBook(int id)
        {
            return Ok(_bookService.DeleteBook(id));
        }
        [HttpPut("[action]/{id}")]
        public IActionResult UpdateBook([FromBody] Book book,int id)
        {
            return Ok(_bookService.UpdateBook(id,book));
        }
    }
}
