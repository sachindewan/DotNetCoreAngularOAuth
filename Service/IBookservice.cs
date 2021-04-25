using DotNetCoreAngularOAuth.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreAngularOAuth.Service
{
    public interface IBookservice
    {
        List<Book> GetAllBooks();
        Book GetBookById(int Id);
        Book UpdateBook(int Id, Book newBook);
        Book DeleteBook(int Id);
        Book AddBook(Book book);
    }
}
