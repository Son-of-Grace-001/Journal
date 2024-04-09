from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Journal

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined']

class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id', 'title', 'fname', 'lname', 'image', 'folder', 'created_at', 'aim', 'objective', 'methodology']