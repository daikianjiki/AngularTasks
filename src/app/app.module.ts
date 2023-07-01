import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { FormvalidationsComponent } from './components/formvalidations/formvalidations.component';
import { ProductlistwithsearchbarComponent } from './components/productlistwithsearchbar/productlistwithsearchbar.component';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodolistComponent,
    FormvalidationsComponent,
    ProductlistwithsearchbarComponent,
    ImageuploadComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
