from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.utils import timezone
from main.models import Todo
# Create your views here.


def index(request):
    todo_list = Todo.objects.all().order_by('-added_date')
    return render(request, 'index.html', {
        "todo_list": todo_list
    })


def add_todo(request):
    new_todo = request.POST.get('todo')
    current_date = timezone.now()
    Todo.objects.create(added_date=current_date, text=new_todo)
    return HttpResponseRedirect(reverse('index'))


def delete_todo(request, todo_id):
    Todo.objects.get(id=todo_id).delete()
    return HttpResponseRedirect(reverse('index'))
