from django.db import models
from django.contrib.auth.models import User

class Journal(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    folder = models.FileField()
    fname = models.CharField(max_length=200)
    lname = models.CharField (max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField()
    aim = models.CharField(max_length=200)
    objective = models.TextField()
    methodology = models.TextField()

    def __str__(self):
        return self.fname
