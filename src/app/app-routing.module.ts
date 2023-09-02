import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { UserLoginComponent } from './page/user-login/user-login.component';

const routes: Routes = [ 
  {
    path: '', redirectTo:'sign-up', pathMatch:'full'
  },
  {
    path:'page/user-login', component: UserLoginComponent
  }
];



@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
