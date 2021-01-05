from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('rc', index),
    path('routcalc', index),
]
