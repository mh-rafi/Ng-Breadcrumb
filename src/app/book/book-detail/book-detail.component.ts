import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BookService } from "../../services/book.service";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book = {};
  routeSub;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.routeSub = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((routeChange) => {
      const slug = this.route.snapshot.params['slug'];
      this.book = this.bookService.getByName(slug);
    })
  }
  ngOnInit() {}

  ngOnDestroy() {
    if(this.routeSub)
      this.routeSub.unsubscribe()
  }

}
