import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  // {
  //   path: 'tabs-detail',
  //   loadChildren: () => import('./tabs-detail/tabs-detail.module').then( m => m.TabsDetailPageModule)
  // },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'trav-detail/:id/:title/:desc/:loc',
    loadChildren: () => import('./tabs-detail/tabs-detail.module').then( m => m.TabsDetailPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: ':tabsId',
    loadChildren: () => import('./tabs-detail/tabs-detail.module').then( m => m.TabsDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
