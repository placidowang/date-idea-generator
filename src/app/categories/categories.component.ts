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
    this.categories = this.categoryService.getCategories();
  }
}
