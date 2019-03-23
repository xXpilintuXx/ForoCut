import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { CreatePostComponent } from './component/create-post/create-post.component';

const app_routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent},
  { path: 'upload', component: CreatePostComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( app_routes, { useHash: true } ),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
