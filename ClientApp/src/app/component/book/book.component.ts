import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public book:IBook[];
  constructor(private bookService:BookserviceService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(data=>{
      this.book=data;
    })
  }

}
