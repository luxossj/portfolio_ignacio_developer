from django.shortcuts import render

def index(request):
    # You can pass data to the template here if needed
    # For example:
    # projects = Project.objects.all()
    # context = {'projects': projects}
    return render(request, 'core/index.html')