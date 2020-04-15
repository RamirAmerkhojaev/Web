import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoriesComponent } from './categories/categories.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule} from '@angular/common/http';
import { ShareModule } from '@ngx-share/core';

import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgxImageZoomModule } from 'ngx-image-zoom';


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
    BrowserModule,
    FontAwesomeModule,
    NgxImageZoomModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
