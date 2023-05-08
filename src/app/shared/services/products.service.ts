import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // WE HAVE MAKE A API CALL
   productArray : Array<Iproduct> = [
    {
      pname: 'samsung 31',
      pid: 1,
      pstatus : 'In-Progress',
      img : "https://tse4.mm.bing.net/th?id=OIP.tTZOJqnV8rin5hKC22Uy1QHaEK&pid=Api&P=0"
    },
    {
      pname: 'samsung 70 TV',
      pid: 2,
      pstatus : 'Dispatched',
      img: "https://tse2.mm.bing.net/th?id=OIP.HdcPW2DARdryiS00yQmR-AHaHa&pid=Api&P=0"

    },
    {
      pname: 'Iphone',
      pid: 3,
      pstatus : 'Delivered',
      img: "https://tse2.mm.bing.net/th?id=OIP.ORjGbzRd3YanpDIbc3_1cQHaJb&pid=Api&P=0"
    }
   ]
  constructor( private _snackbarService:SnackbarService) { }

  getAllProducts():Array<Iproduct>{
    return this.productArray
  }

  getSingleProd(id:number){
    return this.productArray.find(prod => prod.pid === id)
  }

  updateProduct(pObj: Iproduct){
    this.productArray.forEach(prod => {
      if(prod.pid === pObj.pid){
        prod.pname = pObj.pname
        prod.pstatus = pObj.pstatus
      }
    })
    this._snackbarService.openSnackBar(`${pObj.pname} is Updated successfully!`)
  }


}
