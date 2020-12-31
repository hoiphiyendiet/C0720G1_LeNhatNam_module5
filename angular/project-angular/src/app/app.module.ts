import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_tong_quan/thuc_hanh/font-size/font-size.component';
import { PetComponent } from './03_tong_quan/thuc_hanh/pet/pet/pet.component';
import { MaytinhComponent } from './03_tong_quan/baitap/maytinh/maytinh.component';
import { HackernewsComponent } from './04_component_template/thuchanh/hackernews/hackernews.component';
import {FormsModule} from '@angular/forms';
import { LikesComponent } from './04_component_template/thuchanh/likes/likes.component';
import { TodoComponent } from './06_form/thuchanh/todo/todo.component';
import { ReactiveFormComponent } from './06_form/thuchanh/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    MaytinhComponent,
    HackernewsComponent,
    LikesComponent,
    TodoComponent,
    ReactiveFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
