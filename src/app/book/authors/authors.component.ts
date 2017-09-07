import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [{
    name: 'Theresa Walsh',
    slug: 'theresa-walsh',
    photo: 'assets/5.jpg'
  }, {
    name: 'Bryan Hudson',
    slug: 'Bryan-Hudson',
    photo: 'assets/16.jpg'
  }, {
    name: 'Michelle Thompson',
    slug: 'Michelle-Thompson',
    photo: 'assets/15.jpg'
  }, {
    name: 'Tammy Ray',
    slug: 'Tammy-Ray',
    photo: 'assets/4.jpg'
  }]
  constructor() { }

  ngOnInit() {
  }

}
