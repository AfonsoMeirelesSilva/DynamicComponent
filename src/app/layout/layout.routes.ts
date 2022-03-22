import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            
            { path: 'cliente', loadChildren: () => import('../pages/cliente/cliente.module').then(m => m.ClienteModule) },
            { path: 'representantes', loadChildren: () => import('../pages/representantes/representantes.module').then(m => m.RepresentantesModule) },
            // { path: 'protetico', loadChildren: () => import('app/protetico/protetico.module').then(m => m.ProteticoModule) },
            // { path: 'financeiro', loadChildren: () => import('app/financeiro/financeiro.module').then(m => m.FinanceiroModule) },
            // { path: 'ferramentas', loadChildren: () => import('app/ferramentas/ferramentas.module').then(m => m.FerramentasModule) },
            // { path: 'gerencia', loadChildren: () => import('app/gerencia/gerencia.module').then(m => m.GerenciaModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule{}