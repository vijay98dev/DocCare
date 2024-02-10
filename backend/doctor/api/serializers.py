from rest_framework import serializers
from account.models import User





class DoctorRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = ['id','first_name','phone_number','email','password']
        extra_kwargs = {
            'password':{ 'write_only':True}
        }

    def create(self,validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.is_doctor=True
            instance.save()
            return instance
        else:
            raise serializers.ValidationError({"password": "password is not valid"})