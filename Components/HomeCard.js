import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'

function HomeCard(props) {
    return (
        <View style={{ backgroundColor: 'white', width: Dimensions.get('screen').width, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}> 
            <TouchableOpacity
            style={{ 
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('screen').height /6,
                width: Dimensions.get('screen').width /2.5,
             }}
             onPress={
                 ()=>{
                    props.navigation.navigate("FreeCourses")
                 }
             }
            >
              <Avatar.Image source={require('../assets/images/bordercourse.png')} 
                style={{ 
                    backgroundColor: '#ffffff77',
                    resizeMode: "contain" }}
                size={170}
                />
                <Text style={{ position: 'absolute', fontSize: 18, paddingTop: 35, color: 'white', 
            fontFamily: 'Amiri-Bold', textAlign: 'center'          }}>
                     الكورسات
                     {"\n"}
                    المجانية
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity
            style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

             }}

             onPress={
                 ()=>{
                    props.navigation.navigate("PaidCourses")
                 }
             }
            >
                 <Avatar.Image source={require('../assets/images/bordercourse.png')} 
                style={{ 
                    backgroundColor: '#ffffff77',
                 resizeMode: "contain"}}
                size={170}
                />
                <Text style={{ position: 'absolute', fontSize: 18, color: 'white', paddingTop: 35,
            fontFamily: 'Amiri-Bold', textAlign: 'center'  }}>
                     الكورسات
                     {"\n"}
                    المدفوعة
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
            style={{ 
                borderRadius: 50
             }}
            >
                <Text>
                    الكورسات المدفوعة
                </Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default HomeCard
