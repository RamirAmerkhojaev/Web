from django.http.response import HttpResponse 
from django.http.request import HttpRequest

# Create your views here.

def index(request):
	return HttpResponse("Hello world!")

def test(request): 
	return HttpResponse("Test page")