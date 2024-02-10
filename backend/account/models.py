from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager


# Create your models here.


class AccountManager(BaseUserManager):
    def create_user(self,first_name,email,phone_number,password=None):
        if not email:
            raise ValueError('User require a Email')
        if not phone_number:
            raise ValueError('User must present their phone number')
        
        user=self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            phone_number=phone_number
        )
        user.set_password(password)
        user.save(using=self.db)

        return user
    def create_superuser(self,first_name,email,phone_number,password):
        user=self.create_user(email=self.normalize_email(email),first_name=first_name,phone_number=phone_number,password=password)
        user.is_active=True
        user.is_superuser=True
        user.is_staff=True

        user.save(using=self.db)
        return user
    def create_doctor(self,first_name,email,phone_number,password):
        user=self.create_user(email=self.normalize_email(email),first_name=first_name,phone_number=phone_number,password=password)
        user.is_active=True
        user.is_doctor=True

        user.save(using=self.db)
        return user
class User(AbstractBaseUser):
    first_name=models.CharField( max_length=50)
    last_name=models.CharField( max_length=50, blank=True)
    phone_number=models.CharField( max_length=12, unique=True)
    email=models.EmailField( max_length=254,unique=True)

    date_joined=models.DateTimeField(  auto_now_add=True)
    last_login=models.DateTimeField( auto_now_add=True)
    is_superuser=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_doctor=models.BooleanField(default=False)
    is_approved=models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=['phone_number','first_name']


    objects= AccountManager()

    def __str__(self):
        return self.first_name
    
    def has_prem(self,prem,obj=None):
        return self.is_superuser

    def has_module_perms(self,add_label):
        return True


class UserProfile(models.Model):
    user_id=models.ForeignKey("account.User", on_delete=models.CASCADE )
    profile_pic= models.ImageField( upload_to='user/profil_pic/', height_field=None, width_field=None, null=True, blank=True)

    def __str__(self):
        return str(self.user_id.first_name)



