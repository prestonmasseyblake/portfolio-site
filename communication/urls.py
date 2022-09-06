from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('er', views.home_view, name='home'),
    path('', views.fullstack_view, name='fullstack')

]