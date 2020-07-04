import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { UserService } from './services/user.service';

export const AppRoutes: any =[
  {path: "", component: AppComponent},
  {path: "home", component: HomeComponent},
  {path: "input", component: InputComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
