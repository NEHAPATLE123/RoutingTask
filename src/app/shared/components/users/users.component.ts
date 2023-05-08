import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userInfo : Array<Iusers> = [];
  selectedUserId ! : number;
  constructor(private _usersService:UsersService) { }

  ngOnInit(): void {
    this.userInfo = this._usersService.getAllUsers();
    // console.log(this.userInfo);
    this.selectedUserId = this.userInfo[0].id;
    // console.log(this.selectedUserId)
  }

}
