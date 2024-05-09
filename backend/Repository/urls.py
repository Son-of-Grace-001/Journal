from django.urls import path
from .views import LoginView, RegistrationView, JournalView, UploadView, JournalDetailView, ContactView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegistrationView.as_view(), name='register'),
    path('upload/', UploadView.as_view(), name='upload-api'),
    path('journal/', JournalView.as_view(), name='journal-api'),
    path('journal/<int:pk>/', JournalDetailView.as_view(), name='journal-detail'),
    path('contacts/', ContactView.as_view())
]