import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
     NgxImageZoomModule.forRoot(),
    ShareButtonsModule.withConfig({
      debug: true}),
    HttpClientModule,   
    HttpClientJsonpModule, 
    RouterModule.forRoot([{ path: '', component: ProductListComponent },])
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/