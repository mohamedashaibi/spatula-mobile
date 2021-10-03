import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import WhatsappFooter from './WhatsappFooter'
import {LinearTextGradient} from 'react-native-text-gradient'

function LetsExplore(props) {
    return (
        <View style={{ flex: 4, backgroundColor: 'white' }}>
            <View style={{ flex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image 
            style={{ 
                alignSelf: "center",
                resizeMode:"contain",
                height: 200,
                width: 250
            }}
            source={require("../../assets/images/girl.png")}
            />
            <LinearTextGradient
  style={{  fontSize: 72 }}
  locations={[0, 1]}
  colors={['#75ced6', 'pink']}
  start={{ x: 0.1, y: 0 }}
  end={{ x: 0.5, y: 0 }}
>
<Text style={{ textAlign: 'center', fontSize: 30, margin: 15, fontFamily: 'Mada-Bold' }}>ايش حلا اليوم ياترى</Text>

</LinearTextGradient>
            <TouchableOpacity
            onPress={
                ()=>{
                    props.navigation.navigate("SigninUp");
                }
            }
            style={{ backgroundColor: "pink", width: 150, borderRadius: 10,
            alignContent: 'center', justifyContent: 'center', alignItems: 'center',marginTop: 15 }}
            >
                <Text style={{ color: "white", fontFamily: 'Amiri-Bold', fontSize: 25, height: 70 }}>
                لنستكشف
                </Text>
            </TouchableOpacity>
            </View>
            <WhatsappFooter style={{ backgroundColor: "blue", maxHeight: 20}}/>
        </View>
    )
}

export default LetsExplore
