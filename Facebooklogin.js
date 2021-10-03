import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import axios from './axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './Redux/Actions/Auth/actions';

 export default function LoginFacebook(props){

  
  const dispatch = useDispatch();
    async function logIn() {
        try {
          await Facebook.initializeAsync({
            appId: '503611874397394',
          });
          const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            dispatch(Login(token));          
          } else {
            alert('حدث خطأ عند تسجيل الدخول')
          }
        } catch ({ message }) {
          alert(`خطأ من فيس بوك: ${message}`);
        }
      }
      
      return (
            <View>
                <TouchableOpacity
                 onPress={()=>{
                   logIn();
                 
                  }}
                >
                  <Image
            source={require("./assets/images/fblogo.png")}
            style={{ width: 60,height: 60, resizeMode: 'contain'  }}
            />
                </TouchableOpacity>
            </View>
        );
        
}
  