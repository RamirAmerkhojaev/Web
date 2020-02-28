import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../category.service';
import { Category, categories } from '../categories';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  id2: number;
	products: Product[];
	constructor(
  private route: ActivatedRoute,
  private categoryService: CategoryService,
  private location: Location
) {}

   getProducts(): void {
   	const id = +this.route.snapshot.paramMap.get('categoryId');
    this.id2 = id;
   	this.categoryService.getProdFromCategory(id).subscribe(products =>this.products = products);
   }

	ngOnInit(): void {
   		this.getProducts();
   }
 }

