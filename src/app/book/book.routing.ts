import { Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorsComponent } from './authors/authors.component';

export const BookRoutes: Routes = [
  {
    path: '',
    component: AuthorsComponent
  },
  { 
    path: ':author',
    component: BookListComponent,
    data: { title: 'List', breadcrumb: '{{author}}' },
    children: [
      { 
        path: ':slug', 
        component: BookDetailComponent, 
        data: { title: 'Detail', breadcrumb: '{{slug}}' }
      }
    ]
  },
];