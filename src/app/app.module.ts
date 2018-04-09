import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';

// import { Approute } from '';
import {Routes,RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
//import { RegisterComponent } from './register/register.component';
// import {approute} from './app.routes';


const approute : Routes = [
     {
      path : '',
      component : TopbarComponent
      }, 
     {
      path : 'login',
      component : LoginComponent
      },
      {
        path : 'register',
        component : RegisterComponent
        },
        {
          path : 'contact',
          component : ContactComponent
          }
  ];



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  