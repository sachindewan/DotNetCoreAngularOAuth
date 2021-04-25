import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { validateLocaleAndSetLanguage } from 'typescript';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
 public book:IBook;
 showError:boolean=false;
 errorMessage:string="";
 addformbook:FormGroup;
  constructor(private bookService:BookserviceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.addformbook=this.fb.group({
      id:[Math.floor(Math.random()*1000)],
      title:[null,Validators.required],
      auther:[null,Validators.required],
      description:[null,Validators.compose([Validators.required,Validators.minLength(30)])],
      rate:[null],
      datestart:[null],
      dateread:[null]



    })
  }
  addBook(){
    this.bookService.addBook(this.addformbook.value).subscribe(data=>{
     this.router.navigate(['/books']);
    },error=>{
      this.showError=true;
      this.errorMessage=error.error;
    });
  }
}
