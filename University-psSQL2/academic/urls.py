from django.urls import path 
from . import views

urlpatterns = [
    path('get/',views.getCurso),
    path('post/',views.postCurso),
    path('put/<int:pk>/',views.putCurso),
    path('delete/<int:pk>/',views.deleteCurso)
]
