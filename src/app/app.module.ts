import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { HttpClientModule } from '@angular/common/http';
import { AddpostComponent } from './addpost/addpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router';
import { SortableHeaderDirective } from 'src/sortable.header.directive';
import { TestComponentComponent } from './test-component/test-component.component';
import { HAHComponent } from './hah/hah.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    AddpostComponent,
    LoginComponent,
    NavBarComponent,
    SortableHeaderDirective,
    TestComponentComponent,
    HAHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    RouterModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
