from django.conf import settings
from django import template
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Route

# Create your views here.
GOOGLE_API = settings.GOOGLE_API_KEY

def index(request):
    template = loader.get_template('index.html')
    routes = Route.objects.order_by('-clientPhone')
    context = {'routes': routes}
    return HttpResponse(template.render(context, request))


def route(request):
    template = loader.get_template('route.html')
    context = {'key': GOOGLE_API}
    return HttpResponse(template.render(context, request))