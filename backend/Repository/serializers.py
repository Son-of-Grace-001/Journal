from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Journal

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined']

class JournalSerializer(serializers.ModelSerializer):
    folder = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    class Meta:
        model = Journal
        fields = ['id', 'title', 'fname', 'lname', 'image', 'folder', 'created_at', 'aim', 'objective', 'methodology']
    def get_folder(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.folder.url)
    def get_image(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.image.url)
        # return obj.image.url