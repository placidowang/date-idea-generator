import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
// import { CATEGORIES } from '../categories';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  // categories = CATEGORIES;
  categories: Category[] = [];
  selectedCategory?: Category;
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  getCategories(): void {
    // synchronous operation; won't work if categories are
    // being fetched from a server/backend
    // this.categories = this.categoryService.getCategories();
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
