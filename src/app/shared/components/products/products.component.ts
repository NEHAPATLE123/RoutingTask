import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/users';
import { Iproduct } from '../../model/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productArray : Array<Iproduct> = [];
  selectedUserId !: number;
  constructor(private _productsService:ProductsService,
              private _router: Router) { }

  ngOnInit(): void {
    this.productArray = this._productsService.getAllProducts();
    // console.log(this.productArray);
    this.selectedUserId = this.productArray[0].pid;
    // console.log(this.selectedUserId)

  }

  onUserClick(){
    this._router.navigate(['/users'])          // progaramtical rounting
  }

}  
