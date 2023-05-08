import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  productId! : number;
  selectedUser!: Iusers;

  constructor(private _usersService:UsersService,
              private _routes: Router,
              private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['Userid'];
    // console.log(this.productId);
    this.selectedUser = this._usersService.getsingleUser(this.productId);
    console.log(this.selectedUser)

  }
  OnProdUpdate(pname: HTMLInputElement, img:HTMLImageElement){
    let obj:Iusers = {
      username: pname.value,
      id: this.productId,
      img: img.src
    }
    console.log(obj)
    this._usersService.getUpdateUser(obj);
    this._routes.navigate(['/users'])
  }
}
