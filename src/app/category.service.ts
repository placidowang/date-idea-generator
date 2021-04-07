import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from './category';
import { CATEGORIES } from './categories';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private messageService: MessageService) { }

  getCategories(): Observable<Category[]> {
    const categories = of(CATEGORIES);
    this.messageService.add('CategoryService: fetched categories');
    return categories;
  }
}
