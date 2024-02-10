from rest_framework.response import Response
from rest_framework.views import APIView
from doctor.api.serializers import DoctorRegisterSerializer
from rest_framework import status
from django.contrib.auth import login, authenticate
from account.api.serializers import UserSerializer

class DocRegisterView(APIView):
    def post(self, request):
        serializer = DoctorRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE,)  
        
        content ={'Message':'User Registered Successfully'}
        return Response(content,status=status.HTTP_201_CREATED,)
    


class DocLoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        if email and password:
            user = authenticate(request, email=email, password=password)

            if user:
                login(request, user)
                # refresh = RefreshToken.for_user(user)
                serializer = UserSerializer(user)
                return Response({
                    'Message': 'Login Successful',
                    'user': serializer.data,
                    # 'refresh': str(refresh),
                    # 'access': str(refresh.access_token),
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Both email and password are required'}, status=status.HTTP_400_BAD_REQUEST)