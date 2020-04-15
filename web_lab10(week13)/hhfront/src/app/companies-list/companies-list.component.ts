import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service'
import { Company } from '../models'

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[]

  constructor(public companyService: CompanyService) { }

  getCompanyList() {
  	this.companyService.getCompaniesList()
  	.subscribe( companies => { this.companies = companies });
  }

  ngOnInit(): void {
  	this.getCompanyList();
  }

}
