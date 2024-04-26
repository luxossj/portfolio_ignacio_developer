# from rest_framework import routers
# from .api import ProjectViewSet
# router = routers.DefaultRouter()

# router.register('api/projects', ProjectViewSet, 'projects')

# urlpatterns = router.urls
from django.urls import path
from . import views # Assuming your views.py is in the same directory

urlpatterns = [
    # ... other url patterns
    path('', views.index, name='index'),
]