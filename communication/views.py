from django.shortcuts import render
from .forms import ContactForm
from django.contrib import messages
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django.http import HttpResponseRedirect, HttpResponse

# Create your views here.
def home_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            print("yayo")
            form.save()
            body = {
                'name': form.cleaned_data['name'],
                'contact': form.cleaned_data['contact'],
                'message': form.cleaned_data['message']
            }
            messagesbody = "\n".join(body.values())
            subject = "Contact Inquiry"
            try:
                email_from = settings.EMAIL_HOST_USER 
                recipient_list = ['presmbmail@gmail.com']
                send_mail(subject, messagesbody,email_from,recipient_list,fail_silently=False)
            except BadHeaderError:
                return HttpResponse('Invalid Header Found.') 
    context = {}
    return render(request, "message.html",context)