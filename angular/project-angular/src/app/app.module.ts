import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_tong_quan/thuc_hanh/font-size/font-size.component';
import { PetComponent } from './03_tong_quan/thuc_hanh/pet/pet/pet.component';
import { MaytinhComponent } from './03_tong_quan/baitap/maytinh/maytinh.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    MaytinhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
