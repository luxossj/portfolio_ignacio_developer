from rest_framework import routers
from .api import ProjectViewSet
from .views import index, projects, contact, about
router = routers.DefaultRouter()

router.register('api/projects', ProjectViewSet, 'projects')

urlpatterns = router.urls

from django.urls import path
from . import views


urlpatterns = [
    path('', index, name='index'),
    path('projects', projects, name='projects'),
    path('contact', contact, name='contact'),
    path('about', about, name='about'),
]