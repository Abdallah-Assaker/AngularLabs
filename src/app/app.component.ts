import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'myApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mainApp';
  @ViewChild('productCmp') productCmp!: ProductComponent;

  renderValues(){
    this.productCmp.DisplayAllProducts();
  }
}
