from django.urls import path
from admin.api import views


urlpatterns = [
    path('users/',views.UserListView.as_view(),name='user-list'),
    path('doctors/',views.DoctorsListView.as_view(),name='docotrs-list'),
    # path('doctors/<int:pk>/',views.DoctorsDetailsView.as_view(),name='doctor-details'),
]
