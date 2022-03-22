import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    // {
    //   path: 'login',
    //   loadChildren: () => import('app/login/login.module').then(m => m.LoginModule)
    // },
    {
      path: '',    
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), 
    },
    {
      path:'**',
      redirectTo:''
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })
export class AppRoutingModule{}