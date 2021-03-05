from django.contrib import admin
from .models import Message, Rating, Task, TaskTransaction

admin.site.register(TaskTransaction)
admin.site.register(Task)
admin.site.register(Message)
admin.site.register(Rating)

# Register your models here.
