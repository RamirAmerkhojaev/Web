import { Component, OnInit } from '@angular/core';
import { Category, categories } from '../categories';
import { of } from 'rxjs';
import {Product} from '../product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories: Category[];

  constructor() { }

  private getCategories(): void {
    of(categories).subscribe(category => this.categories = category);
}

  ngOnInit(): void {
  	this.getCategories();
  }

}
