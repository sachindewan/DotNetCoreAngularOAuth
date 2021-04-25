using DotNetCoreAngularOAuth.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreAngularOAuth.Service
{
    public class BookService : IBookservice
    {
        public Book AddBook(Book book)
        {
            Data.Data.books.Add(book);
            return book;
        }

        public Book DeleteBook(int Id)
        {
            var book = Data.Data.books.Find(x => x.Id == Id);
            Data.Data.books.Remove(book);
            return book;
        }

        public List<Book> GetAllBooks()
        {
            return Data.Data.books.ToList();
        }

        public Book GetBookById(int Id)
        {
            return Data.Data.books.Find(x => x.Id == Id);
        }

        public Book UpdateBook(int Id, Book newBook)
        {
            var book = Data.Data.books.Find(x => x.Id == Id);
            book = newBook;
            return book;
        }
    }
}
