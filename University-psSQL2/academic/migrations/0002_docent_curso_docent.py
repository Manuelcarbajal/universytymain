# Generated by Django 4.1.4 on 2023-01-12 18:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('academic', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Docent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_name', models.CharField(max_length=30, verbose_name='Last name')),
                ('second_lastname', models.CharField(max_length=30, verbose_name='Second last name')),
                ('first_name', models.CharField(max_length=30, verbose_name='First name')),
                ('birth_date', models.DateField(verbose_name='Birth Date')),
                ('sex', models.CharField(choices=[('X', 'Feamele'), ('Y', 'Male')], default='X', max_length=1)),
            ],
            options={
                'verbose_name': 'Docent',
                'verbose_name_plural': 'Docents',
                'db_table': 'docent',
                'ordering': ['last_name', '-second_lastname'],
            },
        ),
        migrations.AddField(
            model_name='curso',
            name='docent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='academic.docent'),
        ),
    ]
