from django.urls import path
from .views import index, projects, contact, about, mensaje_enviado

urlpatterns = [
    path('', index, name='index'),
    path('projects', projects, name='projects'),
    path('contact', contact, name='contact'),
    path('mensaje_enviado', mensaje_enviado, name='mensaje_enviado'),

    path('about', about, name='about'),
]