from django.views.generic import TemplateView


# Create your views here.


class ToDoApp(TemplateView):
    template_name = "to_do_app.html"
