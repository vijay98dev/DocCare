from django.db import models
from account.models import User

# Create your models here.


class DoctorProfile(models.Model):
    user_id=models.ForeignKey("account.User", on_delete=models.CASCADE )
    age=models.IntegerField()
    gender=models.CharField(max_length=5)
    qualification = models.CharField( max_length=150)
    certification = models.ImageField(upload_to='doctors/cerification/', height_field=None, width_field=None)
    profile_pic = models.ImageField( upload_to='doctors/profile_pic/', height_field=None, width_field=None,null=True,blank=True)
    experience = models.CharField( max_length=150)

    def __str__(self):
        return str(self.user_id.first_name)
