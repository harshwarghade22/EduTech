# from django.contrib import admin
# from .models import Question

# # Register your models here.

# admin.site.register(Question)
from django.contrib import admin
from .models import Question, QuizResult

admin.site.register(Question)
admin.site.register(QuizResult)