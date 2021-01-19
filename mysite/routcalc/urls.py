from django.urls import path
from .views import index
from .views import route

urlpatterns = [
    path('', index),
    path('rc', index),
    path('routcalc', route),
]
