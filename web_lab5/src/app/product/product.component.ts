import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CategoryService} from '../category.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product;
  constructor(
  private route: ActivatedRoute,
  private categoryService: CategoryService,
  private location: Location
) {}
  
  getProduct(): void {
  const id1 = +this.route.snapshot.paramMap.get('categoryId');
  const id2 = +this.route.snapshot.paramMap.get('productId');
  this.categoryService.getProdFromProducts(id1, id2).subscribe(product => this.products = product);
}

 ngOnInit(): void {
  this.getProduct();
}

}
