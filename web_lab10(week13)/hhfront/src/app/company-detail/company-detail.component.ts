import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Vacancy, Company } from '../models';
import { CompanyService} from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

 vacancies: Vacancy[]
 company: Company;
 id: number;

  constructor(public companyService: CompanyService,
  			  private route: ActivatedRoute,
              private location: Location,
              public router: Router) { }

  getVacancyList(){
  	const id = +this.route.snapshot.paramMap.get('companyId');
  	this.companyService.getVacanciesList(id)
  	.subscribe( vacancies => this.vacancies = vacancies)
  }
   getCompany() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }

  ngOnInit(): void {
  	this.getVacancyList()
  	this.getCompany()
  }

}
