import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { AddPetComponent } from './addpet/addpet.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/authguard.service';
import { OnSameUrlNavigation } from '@angular/router';
import { EditpetComponent } from './editpet/editpet.component';

const routes: Routes = [
  { path: '', 
    component: MainviewComponent,
    canActivate: [authGuard]
  },
  {
    path: 'addpost', 
    component: AddPetComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: 'edit',
    component: EditpetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
