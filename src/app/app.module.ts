import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from "./common/common.module";
import { AppComponent } from './app.component';
import { rootRouterConfig } from "./app.routes";
import { RoutePartsService } from './services/route-parts.service';
import { BookService } from "./services/book.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [RoutePartsService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
