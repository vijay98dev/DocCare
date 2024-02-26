from account.models import User,UserProfile
from rest_framework.generics import ListAPIView
from admin.api.serializers import AdminUserSerializer

class AdminUserListView(ListAPIView):
    queryset = User.objects.filter(is_doctor=False).order_by('-date_joined')
    serializer_class = AdminUserSerializer


class AdminDoctorsListView(ListAPIView):
    queryset = User.objects.filter(is_doctor = True)
    serializer_class=AdminUserSerializer