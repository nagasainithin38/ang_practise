import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [

{
  path:"home",
  component:HomeComponent
},
{
  path:"signin",
  component:SignupComponent
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"parent",
  component:ParentComponent,
  children:[
    {
      path:"c1/:id",
      component:Child1Component
    },
    {
      path:"c2",
      component:Child2Component
    },
    {
      path:"",
      redirectTo:"c1",
      pathMatch:'full'
    }
  ]
},
{
  path:"",
  redirectTo:"login",
  pathMatch:'full'
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
