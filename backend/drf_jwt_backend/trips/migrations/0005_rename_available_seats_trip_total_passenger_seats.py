# Generated by Django 4.0.3 on 2022-03-21 14:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0004_remove_trip_arrival_date_remove_trip_car_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trip',
            old_name='available_seats',
            new_name='total_passenger_seats',
        ),
    ]
