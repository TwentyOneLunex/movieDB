import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-books',
  templateUrl: './views/books.component.html',
  styleUrls: [ './views/styles/books.component.css' ]
})
export class BooksComponent implements OnInit {

  ngOnInit(): void {
  }
}