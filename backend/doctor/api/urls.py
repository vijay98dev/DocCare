from django.urls import path
from . import views


urlpatterns = [

    path('register/',views.DocRegisterView.as_view(),name='doctor-register'),
    path('login/',views.DocLoginView.as_view(),name='doctor-login'),
    # path('profile/',views.DocProfileView.as_view(),name='doctor-profile'),
]