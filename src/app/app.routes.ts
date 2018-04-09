import {NgModule} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

import {TopbarComponent} from './topbar/topbar.component';

 export const route : Routes = [
//    {
//     path : 'topbar',
//     component : TopbarComponent
//     }, 
   {
    path : 'login',
    component : LoginComponent
    }
];

// @NgModule({
// 	imports: [RouterModule.forRoot(route)],
// 	exports: [RouterModule]
// })
// export class AppModule { }

