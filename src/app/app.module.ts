import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPetComponent } from './addpet/addpet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router';
import { SortableHeaderDirective } from 'src/sortable.header.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditpetComponent } from './editpet/editpet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    AddPetComponent,
    LoginComponent,
    NavbarComponent,
    SortableHeaderDirective,
    EditpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    RouterModule,
    MatTableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
