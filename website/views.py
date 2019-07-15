from django.shortcuts import render

# Create your views here.
def home(request):
    template = "website/index.html"
    return render(request, template)

def submit_claim(request):
    template = "website/submit_claim.html"
    return render(request, template)
