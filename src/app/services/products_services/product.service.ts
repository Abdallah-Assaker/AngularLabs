import { Injectable } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsList: IProduct[] = [
    {
      id: 101,
      name: 'Product One',
      quantity: 6,
      rate: 5,
      price: 300,
      img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      categoryID: 1,
    },
    {
      id: 102,
      name: 'Product Two',
      quantity: 8,
      rate: 3,
      price: 350,
      img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      categoryID: 2,
    },
    {
      id: 103,
      name: 'Product Three',
      quantity: 2,
      rate: 1,
      price: 432,
      img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      categoryID: 3,
    },
    {
      id: 104,
      name: 'Product Four',
      quantity: 7,
      rate: 2,
      price: 692,
      img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      categoryID: 1,
    },
    {
      id: 105,
      name: 'Product Five',
      quantity: 4,
      rate: 4,
      price: 250,
      img: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      categoryID: 2,
    },
    {
      id: 106,
      name: 'Product Five',
      quantity: 4,
      rate: 1,
      price: 150,
      img: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      categoryID: 3,
    },
    {
      id: 107,
      name: 'Product Five',
      quantity: 1,
      rate: 3,
      price: 400,
      img: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      categoryID: 4,
    },
  ];

  getAllProducts(): IProduct[] | null {
    return this.productsList;
  }

  getProductsDeals(currPrd?: IProduct[] | null): IProduct[] | null {
    let productsToBeFiltered: IProduct[] = currPrd
      ? currPrd
      : this.productsList;

    let products: IProduct[] | undefined = productsToBeFiltered.filter(
      (ele, i) => i % 2 == 0
    );
    return products ? products : null;
  }

  getProductById(id: number): IProduct | null {
    let product: IProduct | undefined = this.productsList.find(
      (product) => product.id == id
    );
    return product ? product : null;
  }

  getCategoryProducts(
    id: number,
    currPrd?: IProduct[] | null
  ): IProduct[] | null {
    let productsToBeFiltered: IProduct[] = currPrd
      ? currPrd
      : this.productsList;

    if (id == 0) {
      return productsToBeFiltered;
    }
    let products: IProduct[] | undefined = productsToBeFiltered.filter(
      (ele, i) => ele.categoryID == id
    );
    return products ? products : null;
  }
  constructor() {}
}
