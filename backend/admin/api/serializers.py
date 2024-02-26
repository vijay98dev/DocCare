from rest_framework import serializers
from account.models import User


class AdminUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields= ['id', 'first_name', 'last_name', 'email', 'phone_number', 'password', 'date_joined','is_doctor']
        extra_kwargs ={
            'password': {'write_only':True}
        }

