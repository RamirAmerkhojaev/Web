import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company, Vacancy, LoginResponse } from './models';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }

  getCompaniesList(): Observable<Company[]>{
  		return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }
  getVacanciesList(id): Observable<Vacancy[]>{
  		return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`);
  }
   getCompany(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }
   login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

}
