import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId ! : number;
  productObject ! : Iproduct;

  constructor(private _productsService: ProductsService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._route.snapshot)
    this.productId = +this._route.snapshot.params['id'];
    console.log(this.productId, typeof this.productId);

      if(this.productId){
        this.productObject = this._productsService.getSingleProd(this.productId)!
        console.log(this.productObject)
      }
  }

}
