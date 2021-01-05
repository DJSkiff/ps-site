from django.db import models

# Create your models here.


class Route(models.Model):
    client = models.CharField(max_length=150)
    clientPhone = models.CharField(max_length=12)
    startAddress = models.CharField(max_length=100, null=True, blank=True)
    deliveryDate = models.DateField(blank=True, null=True)
    deliveryTime = models.TimeField(blank=True, null=True)
