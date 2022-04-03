import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            
            { path: 'cliente', loadChildren: () => import('../pages/cliente/cliente.module').then(m => m.ClienteModule) },
            { path: 'representantes', loadChildren: () => import('../pages/representantes/representantes.module').then(m => m.RepresentantesModule) },
            { path: 'scroll', loadChildren: () => import('../pages/scroll/scroll.module').then(m => m.ScrollModule) },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule{}