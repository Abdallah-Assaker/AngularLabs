import { CartService } from './../../../services/cart.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiscountOffers } from 'src/app/consts/discount-offers';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/products_services/product.service';
import { SharedCategoryService } from 'src/app/services/shared-category-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit, OnDestroy {
  maxRate: number = 5;
  isReadonly: boolean = false;
  productsList: IProduct[] | null = null;
  discount: DiscountOffers = DiscountOffers['10%'];
  clientName: string = 'Abdallah';
  selectedCategory!: number;
  subscriptions: Subscription[] = [];

  constructor(
    private ProductService: ProductService,
    private SharedCategoryService: SharedCategoryService,
    private CartService:CartService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.SharedCategoryService.selectedCategory.subscribe((cat) => {
        this.selectedCategory = cat;
        this.productsList = this.ProductService.getCategoryProducts(
          this.selectedCategory,
          this.ProductService.getAllProducts()
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  buy(product: IProduct) {
    if (product.quantity > 0) {
      --product.quantity;
    }
  }

  adToCart(product:IProduct, qty:number)
  {
    this.CartService.addProduct(product, qty);
    // console.log(product);
  }
}
