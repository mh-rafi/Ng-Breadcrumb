import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MdIconModule,
  MdButtonModule,
  MdCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookRoutes } from "./book.routing";

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    FlexLayoutModule,
    RouterModule.forChild(BookRoutes)
  ],
  declarations: [AuthorsComponent, BookListComponent, BookDetailComponent]
})
export class BookModule {}
