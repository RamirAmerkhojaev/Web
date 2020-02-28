import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoriesComponent } from './categories/categories.component';

import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full'},
  { path: 'categories/:categoryId/products', component: ProductListComponent},
  { path: 'categories/:categoryId/products/:productId/description', component: ProductComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    CategoriesComponent,
    ProductComponent
  ],
  imports: [
  HttpClientJsonpModule,
  HttpClientModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
