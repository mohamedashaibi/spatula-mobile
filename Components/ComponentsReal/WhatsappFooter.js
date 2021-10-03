import React from 'react'
import { Row } from 'react-bootstrap'
import { Button, Image, Linking, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function WhatsappFooter() {
    return (
        <View style={{ backgroundColor: "#ffaaaa", height: 60 }}>
            <TouchableOpacity
             style={{ display: 'flex', flexDirection: "row-reverse", justifyContent: 'flex-start', 
             alignItems: 'center', direction: "rtl" }}
            onPress={()=>{
                Linking.openURL('whatsapp://send?text=hello&phone=+218945367550')
            }}
            >
                <Image 
            style={{ 
                alignSelf: "flex-end",
                resizeMode:"cover",
                marginTop: 5,
                marginRight: 5,
                marginLeft: 5,
                width: 40,
                height: 40,
                padding: 10,
                borderRadius: 200,
            }}
            source={require("../../assets/images/whatsapplogo.jpg")}
            
            />
            <Text style={{ fontSize: 16, color: "white", fontFamily: 'Amiri-Bold', paddingTop: 10   }}>للمساعدة, اضغظي هنا للتواصل عبر الواتساب</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WhatsappFooter
