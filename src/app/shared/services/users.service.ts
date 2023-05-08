import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArray: Array<Iusers> = [
    {
      username: 'RED ROSE',
      id: 1,
      img: 'https://tse2.mm.bing.net/th?id=OIP.TqXnqIoKgGb9AzkVPV8_wgHaHa&pid=Api&P=0'
    },
    {
      username: 'YELLOW ROSE',
      id: 2,
      img:'https://tse1.mm.bing.net/th?id=OIP.8_lsPXnFNqo1rndfuShK4gHaFj&pid=Api&P=0'
    },
    {
      username: 'VIOLET ROSE',
      id: 3,
      img:'https://tse3.mm.bing.net/th?id=OIP.SRtULOouSQRnGykkVb4yjwHaEo&pid=Api&P=0'
    }
  ]

  constructor(private _snackbarService:SnackbarService) { }

  getAllUsers():Array<Iusers>{
    return this.userArray;
  }

  getsingleUser(id:number): Iusers {
    return this.userArray.find(user => user.id === id)!
  }

  getUpdateUser(obj: Iusers){
    this.userArray.forEach(user =>{
      if(user.id === obj.id){
        user.username  =  obj.username 
      }
    })
    this._snackbarService.openSnackBar(`${obj.username} is updated successfully!`)
  }

  
}
