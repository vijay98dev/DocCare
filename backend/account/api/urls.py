from django.urls import path
from . import views

from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)
urlpatterns = [
    path('',views.getRoutes),
    path('register/',views.UserRegisterView.as_view(),name='user-register'),
    path('login/',views.UserLoginView.as_view(),name='user-login'),
    path('find-doctors/',views.UserDocListView.as_view(),name='user-login'),



    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh_view'),
]
