import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component'
import {CompanyDetailComponent} from './company-detail/company-detail.component';


const routes: Routes = [
	{path: '', component: CompaniesListComponent},
	{path: 'companies/:companyId/vacancies', component: CompanyDetailComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
