import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DiscountOffers } from 'src/app/consts/discount-offers';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/products_services/product.service';
import { SharedCategoryService } from 'src/app/services/shared-category-service.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit, OnDestroy {
  maxRate: number = 5;
  isReadonly: boolean = false;
  productsList: IProduct[] | null = null;
  discount: DiscountOffers = DiscountOffers['10%'];
  clientName: string = 'Abdallah';
  selectedCategory!: number;
  subscriptions:Subscription[] = [];

  constructor(
    private ProductService: ProductService,
    private SharedCategoryService: SharedCategoryService
  ) {}

  ngOnInit(): void {
    // this.productsList = this.ProductService.getProductsDeals();
    this.subscriptions.push(this.SharedCategoryService.selectedCategory.subscribe((cat) => {
      this.selectedCategory = cat;
      this.productsList = this.ProductService.getCategoryProducts(
        this.selectedCategory,
        this.ProductService.getProductsDeals()
      );
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  buy(product: IProduct) {
    if (product.quantity > 0) {
      --product.quantity;
    }
  }
}
