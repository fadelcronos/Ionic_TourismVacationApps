import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsPage } from './travels.page';

const routes: Routes = [
  {
      path: 'tabs',
      component: TravelsPage,
      children:[
          {
              path: 'travel',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
                  },
                  {
                    path: 'travel-detail',
                    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
                },
              ]
          },{
              path: 'createtravel',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('../travels/create-travel/create-travel.module').then(m => m.CreateTravelPageModule)
                  },
                  // {
                  //     path: 'regis',
                  //     loadChildren: () => import('./account/registration/registration.module').then(m => m.RegistrationPageModule)
                  // },
              ]
          },
          {
              path: '',
              redirectTo: '/travels/tabs/travel',
              pathMatch: 'full'
          }
      ]
  },
  {
      path: '',
      redirectTo: '/travels/tabs/travel',
      pathMatch: 'full'
  },
  {
    path: 'create-travel',
    loadChildren: () => import('./create-travel/create-travel.module').then( m => m.CreateTravelPageModule)
  },
  // {
  //   path: 'add-job',
  //   loadChildren: () => import('./add-job/add-job.module').then( m => m.AddJobPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelsPageRoutingModule {}
