import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import LoginFacebook from '../../Facebooklogin'
import Copyright from './Copyright'

function Signin6(props) {
    const state = useSelector(state => state.auth)

    useEffect(() => {
      if(state.auth.token != ""){
        props.navigation.replace("Nav")
      }
    }, [state.auth.token])
    

    return (
        
        <View style={{ flex: 8, backgroundColor: 'white' }}>
            <View style={{ flex:3, alignItems:'center', justifyContent: 'flex-end' }}>
            <Image 
            source={require("../../assets/images/exclamation.png")}
            style={{ 
                width: 80,
                height: 80,
                resizeMode: 'contain'
             }}
            />
            </View>
            <View style={{ flex:1 }}>
            <TouchableOpacity>
            <Text style={{ fontSize: 20, padding: 20, textAlign: 'center', fontFamily: 'Amiri' }}>
                لتتمكن من تسجيل الدخول الى سباتولا يرجى استخدام واحدة من الطرق الاتية
            </Text>
            
            </TouchableOpacity>
            </View>
            <View style={{ flex:3,  alignItems:'center', justifyContent: 'flex-start' }}>
            <LoginFacebook navigation={props.navigation}/>
            </View>
            <View style={{ flex:1 }}>
                <Copyright/>
            </View>
        </View>
    )
}

export default Signin6
