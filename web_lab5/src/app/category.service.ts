import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category, categories} from './categories';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getProdFromCategory(categoryId: number): Observable<Product[]> {
        return of(categories.find(category => category.id === categoryId).products);
  }

  getProdFromProducts( categoryId: number, productId: number): Observable<Product> {
         return of(categories.find(category => category.id === categoryId).products.find(product => product.id === productId));
  }

}
