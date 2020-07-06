import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth-guard';

export const AppRoutes: any =[
  {path: "", component: AppComponent},
  {path: "home", component: HomeComponent},
  {path: "input", component: InputComponent, canActivate:[AuthGuard]},
  {path: "login", component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
