import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedCategoryService {
  private observeCategory: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  selectCategory(cat: number) {
    this.observeCategory.next(cat);
  }

  get selectedCategory(): Observable<number> {
    return this.observeCategory.asObservable();
  }

  constructor() {}
}
