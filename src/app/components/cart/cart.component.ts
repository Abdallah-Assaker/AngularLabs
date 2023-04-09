import { CartService } from './../../services/cart.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: IProduct[] = [];
  subscriptions: Subscription[] = [];

  // increaserQty(prdID: number, ele: HTMLElement){
    // console.log(ele);
    
    //this.CartService.addQuantity(prdID, qty)
  // }
  constructor(private CartService: CartService) {}
  ngOnInit(): void {
    this.subscriptions.push(
      this.CartService.viewProducts().subscribe(
        (prdList) => (this.cartProducts = prdList)
      )
    );
  }
}
