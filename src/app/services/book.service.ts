import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  books = [{
    name: 'Book 1',
    slug: 'book-1',
    photo: 'assets/1.jpg',
    author: 'theresa-walsh'
  }, {
    name: 'Book 2',
    slug: 'book-2',
    photo: 'assets/2.jpg',
    author: 'theresa-walsh'
  }, {
    name: 'Book 3',
    slug: 'book-3',
    photo: 'assets/3.jpg',
    author: 'theresa-walsh'
  }, {
    name: 'Book 4',
    slug: 'book-4',
    photo: 'assets/1.jpg',
    author: 'Bryan-Hudson'
  },{
    name: 'Book 5',
    slug: 'book-5',
    photo: 'assets/3.jpg',
    author: 'Bryan-Hudson'
  },{
    name: 'Book 6',
    slug: 'book-6',
    photo: 'assets/2.jpg',
    author: 'Bryan-Hudson'
  },{
    name: 'Book 7',
    slug: 'book-7',
    photo: 'assets/3.jpg',
    author: 'Michelle-Thompson'
  },{
    name: 'Book 8',
    slug: 'book-8',
    photo: 'assets/2.jpg',
    author: 'Michelle-Thompson'
  },{
    name: 'Book 9',
    slug: 'book-9',
    photo: 'assets/1.jpg',
    author: 'Michelle-Thompson'
  },{
    name: 'Book 10',
    slug: 'book-10',
    photo: 'assets/2.jpg',
    author: 'Tammy-Ray'
  },{
    name: 'Book 11',
    slug: 'book-11',
    photo: 'assets/1.jpg',
    author: 'Tammy-Ray'
  }]
  getByName(name) {
    return this.books.filter(b => b.slug === name)[0];
  }
  getByAuthor(author) {
    return this.books.filter(b => b.author === author);
  }
}