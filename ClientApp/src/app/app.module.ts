import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './component/nav-menu/nav-menu.component';
import { HomeComponent } from './component/home/home.component';
import { DeletebookComponent } from './component/deletebook/deletebook.component';
import { AddbookComponent } from './component/addbook/addbook.component';
import { BookComponent } from './component/book/book.component';
import { GetbookComponent } from './component/getbook/getbook.component';
import { UpdatebookComponent } from './component/updatebook/updatebook.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthService } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DeletebookComponent,
    AddbookComponent,
    BookComponent,
    GetbookComponent,
    UpdatebookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'vega123.auth0.com',
      clientId: 'PvUMhVfCEnjEoCaOe1e21EqgppInjmw6'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BookComponent },
      { path: 'new-book', component: AddbookComponent },
      { path: 'delete-book/:id', component: DeletebookComponent },
      { path: 'update-book/:id', component: UpdatebookComponent },
      { path: 'show-book/:id', component: GetbookComponent },


    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
