# Generated by Django 5.0.3 on 2024-04-09 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Journal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('folder', models.FileField(upload_to='')),
                ('fname', models.CharField(max_length=200)),
                ('lname', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('image', models.ImageField(upload_to='')),
                ('aim', models.CharField(max_length=200)),
                ('objective', models.TextField()),
                ('methodology', models.TextField()),
            ],
        ),
    ]
