import { Routes } from '@angular/router';

import { LayoutComponent } from "./common/layout/layout.component";


export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'authors', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'authors',
        loadChildren: './book/book.module#BookModule', 
        data: { title: 'Authors', breadcrumb: 'Authors'}
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'authors'
  }
]