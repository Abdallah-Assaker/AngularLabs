import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';
import { DealsComponent } from './components/product/deals/deals.component';
import { HoverDirective } from './directives/hover.directive';
import { CartComponent } from './components/cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AllProductsComponent,
    DealsComponent,
    HoverDirective,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RatingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
