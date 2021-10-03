import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import WhatsappFooter from './WhatsappFooter'

function SigninSignup5(props) {
    return (
        <View style={{ flex: 4, backgroundColor: 'white' }}>
        <View style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around'
    , paddingTop: 30 }}>
        <Image 
        style={{ 
            alignSelf: "center",
            alignContent: "flex-start",
            resizeMode:"contain",
            height: 200,
            width: 250
        }}
        source={require("../../assets/images/spatulapng.png")}
        />
        <View style={{ flex: 1,display: 'flex', justifyContent: 'center', alignContent: 'flex-start' }}>
        <Text style={{ textAlign: 'center', fontSize: 18, margin: 15, fontFamily: 'Amiri' }}>
            مرحبا بك في تطبيق سباتولا, اول تطبيق مختص بالكيك والحلويات عربيا. بإضراف الشيف الليبي حنان العابد
            
            </Text>
        <View style={{ display: 'flex', paddingTop: 10, width: Dimensions.get('screen').width, 
        flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 30, paddingRight: 30 }}>
       
        <TouchableOpacity
        style={{ backgroundColor: "#ffa1a1", width: 150, height: 60,borderRadius: 10,padding: 0,
        alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
        onPress={
            ()=>props.navigation.navigate("Signin")
        }
        >
            <Text style={{ color: "white", fontFamily: 'Amiri', fontSize: 25, lineHeight: 40 }}>
            الدخول
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{ backgroundColor: "white", width: 150, borderRadius: 10, height: 60,borderColor: 'grey', borderWidth: 1,
        alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
        onPress={
            ()=>props.navigation.navigate("Signup")
        }
        >
            <Text style={{ color: "grey", fontFamily: 'Amiri', fontSize: 25,lineHeight: 40 }}>
            التسجيل
            </Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        <WhatsappFooter style={{ backgroundColor: "blue", maxHeight: 20}}/>
    </View>
    )
}

export default SigninSignup5
