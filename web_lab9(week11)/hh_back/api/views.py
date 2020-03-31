from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import JsonResponse


def companies_list(request):
	if request.method == "GET":
		companies = Company.objects.all()
		companies_json = [company.to_json() for company in companies]
		return JsonResponse(companies_json, safe = False)


