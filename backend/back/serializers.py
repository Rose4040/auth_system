from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password1=serializers.CharField(style={'input_type':'password'},write_only=True)
    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model=User
        fields=['username','password1','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }
    def validate(self,data):
        if data['password1']!=data['password2']:
            raise serializers.ValidationError({'password':'Password not matching'})
        return data
    def create(self,validated_data):
        password = validated_data.pop('password1')   
        validated_data.pop('password2') 
        user = User(**validated_data)
        user.set_password(password)  
        user.save()
        return user
