using DotNetCoreAngularOAuth.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreAngularOAuth.Data
{
    public static class Data
    {
        public static List<Book> books => allBooks;
        static List<Book> allBooks = new List<Book>()
        {
            new Book()
            {
                Id=1,
                Auther="Sachin1",
                DateRead=null,
                DateStart = DateTime.Now.ToUniversalTime(),
                Description ="Action1",
                Rate=4.3,
                Title="My Book1"
            },
             new Book()
            {
                Id=1,
                Auther="Sachin2",
                DateRead=null,
                DateStart = DateTime.Now.ToUniversalTime(),
                Description ="Action2",
                Rate=4.3,
                Title="My Book2"
            },
              new Book()
            {
                Id=1,
                Auther="Sachin3",
                DateRead=null,
                DateStart = DateTime.Now.ToUniversalTime(),
                Description ="Action3",
                Rate=4.3,
                Title="My Book3"
            }
        };
    }
}
