import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { UtentiComponent } from './pages/utenti/utenti.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'completed',
    component:CompletedComponent
  },
  {
    path:'utenti',
    component:UtentiComponent
  },
  {
    path:'**',
    component:Page404Component
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
