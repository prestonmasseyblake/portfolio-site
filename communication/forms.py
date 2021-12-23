from django import forms
from django.db.models.base import Model
from django.forms import fields 
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact 
        fields = ('name','contact','message')