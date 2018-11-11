
import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {SecondPageComponent} from './second-page/second-page.component';
import {MainPageComponent} from './main-page/main-page.component';

const appRoutes:Routes =[
  {path:'' ,redirectTo:'/home',pathMatch:'full'},
  {path:'home' ,component:MainPageComponent,},
  {path:'services',component :SecondPageComponent}
];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule {
  
}
