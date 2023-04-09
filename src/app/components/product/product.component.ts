import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../consts/discount-offers';
import { ICategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';
import { ProductService } from 'src/app/services/products_services/product.service';
import { SharedCategoryService } from 'src/app/services/shared-category-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  discount: DiscountOffers = DiscountOffers['10%'];
  storeName: string = 'Sohag';
  storeLogo: string = '../../assets/images/Assaker_Logo.png';
  // productsList: IProduct[] | null = null;
  clientName: string = '';
  isPurchased: boolean = false;
  categoryList: ICategory[] = [
    { id: 1, name: 'Category One' },
    { id: 2, name: 'Category Two' },
    { id: 3, name: 'Category Three' },
  ];
  selectedCategory: number = 0;

  categoryChanger() {
    this.sharedCategoryService.selectCategory(this.selectedCategory);
  }
  // buy(product: IProduct) {
  //   if (product.quantity > 0) {
  //     --product.quantity;
  //   }
  //   // this.isPurchased = !this.isPurchased;
  // }

  DisplayAllProducts(): void {
    // this.productsList = this.ProductService.GetAllProducts();
  }

  constructor(
    private ProductService: ProductService,
    private sharedCategoryService: SharedCategoryService
  ) {}
  ngOnInit(): void {
    //   this.productsList = this.ProductService.GetAllProducts();
  }
}
