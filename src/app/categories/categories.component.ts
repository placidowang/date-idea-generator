import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
// import { CATEGORIES } from '../categories';
import { CategoryService } from '../category.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  // categories = CATEGORIES;
  categories: Category[] = [];

  selectedCategory?: Category;
  
  constructor(private categoryService: CategoryService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.messageService.add(`CategoriesComponent: Selected category id=${category.id}`);
  }

  getCategories(): void {
    // this is a synchronous operation; it won't work if categories
    // are being fetched from a server/backend
    // this.categories = this.categoryService.getCategories();

    // this will wait for Observable.subscribe to emit array
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
