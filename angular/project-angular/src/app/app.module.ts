import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_tong_quan/thuc_hanh/font-size/font-size.component';
import { PetComponent } from './03_tong_quan/thuc_hanh/pet/pet/pet.component';
import { MaytinhComponent } from './03_tong_quan/baitap/maytinh/maytinh.component';
import { HackernewsComponent } from './04_component_template/thuchanh/hackernews/hackernews.component';
import {FormsModule} from '@angular/forms';
import { LikesComponent } from './04_component_template/thuchanh/likes/likes.component';
import { ChaConComponent } from './04_component_template/thuchanh/cha-con/cha-con.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    MaytinhComponent,
    HackernewsComponent,
    LikesComponent,
    ChaConComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
