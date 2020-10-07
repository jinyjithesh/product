import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Product} from 'src/app/moduls/product'
import  {MessengerService } from 'src/app/services/messenger.service'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

@Input() ProductItem : Product

  constructor  ( private msg : MessengerService) { }
  ngOnInit(): void {
  }
handleAddToCart(){
  this.msg.sendMsg (this.ProductItem)

}

}
