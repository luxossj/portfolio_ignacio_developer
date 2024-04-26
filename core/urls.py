from django.urls import path
from . import views # Assuming your views.py is in the same directory

urlpatterns = [
    # ... other url patterns
    path('', views.index, name='index'),
]