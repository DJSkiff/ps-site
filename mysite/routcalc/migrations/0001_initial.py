# Generated by Django 3.1.5 on 2021-01-05 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Route',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client', models.CharField(max_length=150)),
                ('clientPhone', models.CharField(max_length=12)),
                ('startAddress', models.CharField(blank=True, max_length=100, null=True)),
                ('deliveryDate', models.DateField(blank=True)),
                ('daliveryTime', models.TimeField(blank=True)),
            ],
        ),
    ]
