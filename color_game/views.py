from django.views.generic import TemplateView


# Create your views here.


class ColorGame(TemplateView):
    template_name = "color_game.html"
