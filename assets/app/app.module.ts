import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SellBooksComponent } from './books/sell-books/sell-books.component';
import { BuyBooksComponent } from './books/buy-books/buy-books.component';
import { BuyBookListComponent } from './books/buy-books/buy-book-list.component';
import { SellBookListComponent } from './books/sell-books/sell-book-list.component';
import { BuyBookComponent } from './books/buy-books/buy-book.component';
import { SellBookInputComponent } from './books/sell-books/sell-book-input.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { BookComponent } from './books/books.component';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        HeaderComponent,
        
        BookComponent,

        SellBookInputComponent,
        BuyBookComponent,

        SellBooksComponent,
        BuyBooksComponent,

        SellBookListComponent,
        BuyBookListComponent,

        LoginComponent,
        SignupComponent,
        LogoutComponent
        
    ],
    imports: [BrowserModule, routing, FormsModule, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}