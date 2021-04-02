import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './categories';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }
}
