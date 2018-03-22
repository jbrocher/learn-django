from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse


def index(request):
    return render(request, 'graphs/index.html', {'question': 3})

def googlePieChart(request):
        return render(request, 'graphs/google-pie-chart.html', {'question': 3})
