from django.urls import path
from .views import UserRegistrationView,Login

urlpatterns=[
    path('register/',UserRegistrationView.as_view(),name='register'),
    path ('login/',Login.as_view(), name='login'),
]