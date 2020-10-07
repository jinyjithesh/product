import { Injectable } from '@angular/core';
import { Product } from 'src/app/moduls/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [ 
    new Product(1,'Product 1','This is the product 1 description .the product is really kool!',100),
    new Product(2,'product 2','This is the product 2 description .the product is really kool!',100),
    new Product(3,'product 3','This is the product 3 description .the product is really kool!',200),
    new Product(4,'product 4','This is the product 4 description .the product is really kool!',800),
    new Product(5,'product 5','This is the product 5 description .the product is really kool!',30),
    new Product(6,'product 6','This is the product 6 description .the product is really kool!',400),
    new Product(7,'product 7','This is the product 7 description .the product is really kool!',500),
  ]
constructor(){}
getProducts() : Product[] {
  //TODO :populate product from  an Apl and return an Observable
  return this.products
}
}
