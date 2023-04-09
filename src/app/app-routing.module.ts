import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DealsComponent } from './components/product/deals/deals.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  {
    path: 'Products',
    component: ProductComponent,
    children: [
      { path: '', component: AllProductsComponent },
      { path: 'Deals', component: DealsComponent },
      { path: 'AllProducts', component: AllProductsComponent },
    ],
  },
  { path: 'Users', component: UsersComponent },
  { path: 'Posts', component: PostsComponent },
  { path: 'Posts/:id/Comments', component: CommentsComponent },
  { path: 'Cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}  
