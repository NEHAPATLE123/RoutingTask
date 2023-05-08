import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct, Istatus } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId!: number;
  selectedProduct!: Iproduct;

  constructor(private _route: ActivatedRoute,
              private _productsService:ProductsService,
              private _router: Router) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productsId']
    this.selectedProduct = this._productsService.getSingleProd(this.productId)!
  }

  OnProdUpdate(pname: HTMLInputElement, pstatus:HTMLSelectElement, img:HTMLImageElement){
    let obj : Iproduct = {
      pname: pname.value,
      pstatus:  pstatus.value as Istatus,
      pid : this.productId,
      img: img.src
    }

    console.log(obj.pstatus);
    this._productsService.updateProduct(obj)
    this._router.navigate(['/products', this.productId])

  }
}

