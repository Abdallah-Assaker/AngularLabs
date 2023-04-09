import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsList: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>(
    []
  );

  boughtProducts: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>(
    []
  );

  addProduct(product: IProduct, qty: number) {
    product.quantity = qty;
    let currProducts: IProduct[] = this.productsList.value;
    let newProducts: IProduct[] = [...currProducts, product];
    this.productsList.next(newProducts);
  }

  removeProduct(prdID: number) {
    this.productsList.next(
      this.productsList.value.filter((prd) => prd.id != prdID)
    );
  }

  addQuantity(prdID: number, qty: number) {
    let product: IProduct | undefined = this.productsList.value.find(
      (prd) => prd.id == prdID
    );

    if (product) {
      product.quantity += qty;
    }
  }

  decreaseQuantity(prdID: number, qty: number) {
    let product: IProduct | undefined = this.productsList.value.find(
      (prd) => prd.id == prdID
    );

    if (product) {
      product.quantity -= qty;
    }
  }

  paymentStatus(): Observable<IProduct[]> {
    return this.boughtProducts.asObservable();
  }

  paymentConfirmation() {
    this.boughtProducts.next(this.productsList.value);
  }

  viewProducts(): Observable<IProduct[]> {
    return this.productsList.asObservable();
  }

  constructor() {}
}
