from django.conf import settings
from django.db import models


class Test(models.Model):
    "Generated Model"
    test1 = models.ManyToManyField(
        "home.CustomText",
        related_name="test_test1",
    )
    project = models.ManyToManyField(
        "newname.Test",
        blank=True,
        related_name="test_project",
    )


# Create your models here.
