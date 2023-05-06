import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { AddpostComponent } from './addpost/addpost.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: MainviewComponent,
  },
  {
    path: 'addpost', component: AddpostComponent,
  },
  {
    path: 'login', component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
