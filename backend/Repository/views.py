from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Journal, Contact
from .serializers import JournalSerializer
from django.core.mail import send_mail
from django.conf import settings

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

        # subject = "Registration Successful"
        # message = f"Hello {username} \n\n We at Repository appreciate you for registering with us. \n\n Warm Regards \n\n Thank you"
        # send_mail (subject, message, settings.EMAIL_HOST_USER, [user.email])
        
        return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)

class JournalView(APIView):
    def get(self, request):
        # Query all journal entries
        journal_entries = Journal.objects.all().order_by("-created_at")
        # Serialize journal entries data
        serializer = JournalSerializer(journal_entries, many=True, context={"request":request})
        return Response(serializer.data)

class UploadView (APIView):
    def post (self, request):
        data = request.POST.get("data")
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
        serializer = JournalSerializer(journal, context={"request":request})
        return JsonResponse(serializer.data)

class ContactView (APIView):
    def post (self, request):
        name = request.data.get ('name')
        email = request.data.get ('email')
        subject = request.data.get ('subject')
        message = request.data.get ('message')

        if not name or not email or not subject or not message:
            return Response ({'message': 'All fields are required'}, status=400)
        
        contact = Contact.objects.create(
            name = name,
            email = email,
            subject = subject,
            message = message
        )
        contact.save()

        subject = "Message Received"
        message = f"Hello {name} \n\n We at MedLab have received your message and we will get back to you as soon as possible. \n\n Warm Regards \n\n Thank you"
        send_mail (subject, message, settings.EMAIL_HOST_USER, [contact.email])

        subject = "New Message"
        message = f"A new message was received from {name} with the email {email}, pls attend to it"
        send_mail (subject, message, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])

        return Response({'message': 'Contact created successfully'}, status=201)