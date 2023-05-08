import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { EditProductComponent } from "./shared/components/products/edit-product/edit-product.component";
import { EditUsersComponent } from "./shared/components/users/edit-users/edit-users.component";

const routes : Routes = [
    {
      path: '',  component: DashboardComponent            // localhost:4200
    },
    {
      path: 'users', component : UsersComponent            // localhost:4200/users
    },
    {
      path: 'users/:id', component : UserComponent            // localhost:4200/users
    },
    {
      path: 'products', component : ProductsComponent      // localhost:4200/products
    },
    {
      path: 'products/:id', component : ProductComponent      // localhost:4200/products
    },
    {
      path: 'products/:productsId/edit', component: EditProductComponent 
    },
    {
      path: 'users/:Userid/edit', component: EditUsersComponent 
    }
    // {
    //   path : '**' , redirectTo: 'pagenotfound', pathMatch:'full'   //whilecard
    // },
    // {
    //   path: 'pagenotfound' , component: PageNotFoundComponent
    // }
  ]
  

@NgModule({
    imports :[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

    
}
