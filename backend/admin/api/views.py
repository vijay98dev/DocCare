from account.models import User,UserProfile
from rest_framework.generics import ListAPIView
from account.api.serializers import UserSerializer

class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DoctorsListView(ListAPIView):
    queryset = User.objects.filter(is_doctor = True)
    serializer_class=UserSerializer