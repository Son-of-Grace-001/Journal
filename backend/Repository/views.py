from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Journal
from .serializers import JournalSerializer

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user:
            # Perform additional actions (e.g., generate token)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)


class RegistrationView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # Create a new user
        user = User.objects.create_user(username=username, email=email, password=password)
        # You can add additional fields or perform other operations here
        user.save()
        
        return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)

class JournalView(APIView):
    def get(self, request):
        # Query all journal entries
        journal_entries = Journal.objects.all()
        # Serialize journal entries data
        serializer = JournalSerializer(journal_entries, many=True)
        return Response(serializer.data)

class UploadView (APIView):
    def post (self, request):
        firstname = request.data.get('firstname')
        lastname = request.data.get('lastname')
        title = request.data.get('title')
        image_file = request.data.get('image')
        journal_file = request.data.get('folder')
        aim = request.data.get('aim')
        objective = request.data.get('objective')
        methodology = request.data.get('methodology')

        uploaded_file = Journal.objects.create(
            fname=firstname,
            lname=lastname,
            title=title,
            image=image_file,
            folder=journal_file,
            aim= aim,
            objective=objective,
            methodology=methodology
        )
        uploaded_file.save()

        return Response({'message': 'Upload successful'})

class JournalDetailView(APIView):
    def get(self, request, pk):
        journal = get_object_or_404(Journal, pk=pk)
        serializer = JournalSerializer(journal)
        return JsonResponse(serializer.data)