# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-14 16:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_airavata_wagtail_base', '0016_auto_20180314_1639'),
    ]

    operations = [
        migrations.AlterField(
            model_name='headertitletext',
            name='body',
            field=models.CharField(blank=True, help_text='Give a title text', max_length=255, null=True),
        ),
    ]
