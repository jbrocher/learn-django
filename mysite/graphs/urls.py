from django.urls import path

from . import views

app_name = 'graphs'
urlpatterns = [
    path('', views.index, name='index'),
]
