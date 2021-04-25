import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
_baseUrl:string="api/book"
  constructor(private http:HttpClient) { }
  getAllBooks(){
    return this.http.get<IBook[]>(this._baseUrl+"/GetAllBooks");
  }
  addBook(book:IBook){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
        'accept':'application/json'
      })
    };
    return this.http.post(this._baseUrl+"/AddBook/",book,httpOptions);
  }
}
