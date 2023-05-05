import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [
  { path: '', component: MainviewComponent,
  },
  {
    path: 'addpost', component: AddpostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
