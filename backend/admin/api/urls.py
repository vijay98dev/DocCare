from django.urls import path
from admin.api import views


urlpatterns = [
    path('user/',views.AdminUserListView.as_view(),name='user-list'),
    path('doctor/',views.AdminDoctorsListView.as_view(),name='docotrs-list'),
    # path('doctors/<int:pk>/',views.DoctorsDetailsView.as_view(),name='doctor-details'),
]
