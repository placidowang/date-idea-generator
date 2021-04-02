import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }
}
