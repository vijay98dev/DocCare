from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from account.api.serializers import UserRegisterSerializer,UserSerializer
from rest_framework import status
from django.contrib.auth import login, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from account.models import User
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated



@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/login',
        '/register',
    ]
    return Response(routes)

# @api_view(['POST'])
# def userRegister(request):
#     serializer = UserRegisterSerializer(data=request.data)


class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE,)  
        
        content ={'Message':'User Registered Successfully'}
        return Response(content,status=status.HTTP_201_CREATED,)
    



class UserLoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        if email and password:
            user = authenticate(request, email=email, password=password)

            if user:
                login(request, user)
                refresh = RefreshToken.for_user(user)
                serializer = UserSerializer(user)
                return Response({
                    'Message': 'Login Successful',
                    'user': serializer.data,
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Both email and password are required'}, status=status.HTTP_400_BAD_REQUEST)
        


class UserDocListView(ListAPIView):
    queryset = User.objects.filter(is_doctor = True)
    serializer_class=UserSerializer



class UserDetails(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = User.objects.get(id=request.user.id)
       
        data = UserSerializer(user).data
        # try :
        #     profile_pic = user.User_Profile.profile_pic
        #     data['profile_pic'] = request.build_absolute_uri('/')[:-1]+profile_pic.url
        # except:
        #     profile_pic = ''
        #     data['profile_pic']=''
            
        content = data
        return Response(content)