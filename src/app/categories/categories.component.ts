import { Component, OnInit } from '@angular/core';
// import { Category } from '../category';
import { CATEGORIES } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // category: Category = {
  //   id: 1,
  //   name: 'Simple'
  // };

  // category = ['a', 'b', 'c']; 

  categories = CATEGORIES;

}
