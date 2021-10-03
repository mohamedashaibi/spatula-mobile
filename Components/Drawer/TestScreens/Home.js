import * as React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, Button } from "react-native";
import CarouselCards from '../../Carousel/CarouselCards';
import HomeCard from '../../HomeCard';
import WhatsappFooter from '../../ComponentsReal/WhatsappFooter'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(props) {

    const [courseMenu, setCourseMenu] = React.useState(false);

    return (
      <View style={{ flex: 7, backgroundColor: 'white' }}>         
        <View style={{ position: 'absolute', bottom: 100, zIndex: 400 }}>
        <TouchableOpacity style={{ backgroundColor: 'pink', width: 70,
         height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', 
          left: 10 }} onPress={()=>{
            setCourseMenu(!courseMenu)
          }}>
          <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        </View>
        {courseMenu?
        <View style={{ position: 'absolute', bottom: 180, left: 20, zIndex: 200 }}>
          <TouchableOpacity style={{ backgroundColor: 'white',  
          textAlign: 'center', borderWidth: 1, width: 170, borderRadius: 10 }}
          onPress={
            ()=>{
              setCourseMenu(false)
               props.navigation.navigate("FreeCourses")
            }
        }
          >
            <Text style={{ textAlign: 'center', fontFamily: 'Amiri-Bold', fontSize: 20 }}>الكورسات المجانية</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'white', 
          textAlign: 'center', borderWidth: 1, width: 170, borderRadius: 10 }}
          onPress={
            ()=>{
              setCourseMenu(false)

               props.navigation.navigate("PaidCourses")
            }
        }
          >
            <Text style={{ textAlign: 'center', fontFamily: 'Amiri-Bold', fontSize: 20 }}>الكورسات المدفوعة</Text>
          </TouchableOpacity>
        </View>:null
        }
        <View style={{ flex:1 }}>
          <CarouselCards styles={{ backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50}}/>
        </View>

        <View style={{ flex:2, backgroundcolor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground source={require('../../../assets/images/homebackpink.png')} style={{ width:Dimensions.get('screen').width}}>
          <HomeCard navigation={props.navigation}/>
          </ImageBackground>
        </View>
        
        <View style={{ flex:1,  justifyContent: 'flex-start' }}>
          <View style={{ height: Dimensions.get('screen').height/12 }}>
          <ImageBackground source={require('../../../assets/images/ok.jpg')} imageStyle={{ width: '100%', resizeMode: 'cover', display: 'flex', height: 150 }} style={{ height: Dimensions.get('screen').height/3.3,width:Dimensions.get('screen').width, resizeMode: 'cover' , flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            </ImageBackground>

          </View>
           
        </View>
        
        <View style={{ flex: 0.5, backgroundColor: 'white', justifyContent: 'space-around' }}>
            <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ height: 60 , width: Dimensions.get("screen").width/7,resizeMode: 'cover', borderRadius: 20, backgroundColor: '#ffffff'}}/>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ height: 60 , width: Dimensions.get("screen").width/7,resizeMode: 'cover', borderRadius: 20, backgroundColor: '#ffffff'}}/>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ height: 60 , width: Dimensions.get("screen").width/7,resizeMode: 'cover', borderRadius: 20, backgroundColor: '#ffffff'}}/>
             </View>

        </View>
        <WhatsappFooter/>
      </View>
    );
  }