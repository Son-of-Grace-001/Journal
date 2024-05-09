from django.contrib import admin

# Register your models here.
from .models import Journal, Contact

admin.site.register(Journal)

class UserContact (admin.ModelAdmin):
    list_display = ('name', 'email', 'message' )
    search_fields = ('name', 'email')
    list_per_page = 100

admin.site.register (Contact, UserContact)
