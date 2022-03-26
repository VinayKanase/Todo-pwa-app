from django.db import models


# What is models?
class Todo(models.Model):
    added_date = models.DateTimeField()
    text = models.CharField(max_length=200)
