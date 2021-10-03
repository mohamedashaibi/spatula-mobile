import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import axios from './axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Register } from './Redux/Actions/Auth/actions';

 export default function RegisterFacebook(props){

    const dispatch = useDispatch()

    async function register() {
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

            dispatch(Register(token));

           

          } else {
            alert('حدث خطأ عند محاولة تسجيل الدخول')
          }
        } catch ({ message }) {
          console.log(message)
          alert(`خطأ من فيس بوك: ${message}`);
        }
      }
      
      return (
            <View>
              {console.log(JSON.stringify(props))}
                <TouchableOpacity
                 onPress={()=>register().then(()=> props.navigation.replace("Nav"))}
                >
                  <Image
            source={require("./assets/images/fblogo.png")}
            style={{ width: 60, height: 60, resizeMode: 'contain'  }}
            />
                </TouchableOpacity>
            </View>
        );
        
}
  