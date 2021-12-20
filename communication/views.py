from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
def home_view(request):
    context = {}
    return render(request, "message.html",context)