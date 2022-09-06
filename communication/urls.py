from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.home_view, name='home'),
    path('F', views.fullstack_view, name='fullstack')

]