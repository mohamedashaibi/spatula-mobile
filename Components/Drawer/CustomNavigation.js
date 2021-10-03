import React, {useEffect} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './TestScreens/Profile';
import MyCourses from './TestScreens/MyCourses';
import Home from './TestScreens/Home';
import CoursesView from './TestScreens/CoursesView';
import { useSelector } from 'react-redux';
import CourseDetails from './TestScreens/CourseDetails';
import { DrawerContent } from './DrawerContentCustom';
import {Image, Text} from 'react-native'
import CourseBuy from './TestScreens/CourseBuy';
import CourseLessons from './TestScreens/CourseLessons';
import LessonScroll from './TestScreens/LessonScroll';


const Drawer = createDrawerNavigator();


export default function CustomNavigation({navigation}) {

  const state = useSelector(state => state.auth);

  useEffect(() => {
    console.log("i have been called")
    console.log("Auth in nav = " +JSON.stringify(state))
    if(state.auth.token == ""){
      navigation.navigate("SigninUp");
    }    
  }, [state.auth.token])

  return (
    <>
    <NavigationContainer independent="true" >
      <Drawer.Navigator initialRouteName="Home"
      drawerContent={props=><DrawerContent {...props}/>} 
      backBehavior="history" 
      screenOptions={{ drawerPosition: 'right',
      swipeEnabled: true,
      headerTitleAlign: 'center',headerTitleStyle:{fontFamily: 'Amiri'} }}>  
         <Drawer.Screen component={Home} name='Home' options={{ headerShown: true, headerTitle: "الرئيسية", 
         drawerLabel: "الرئيسية"}} />
        <Drawer.Screen component={MyCourses} name='MyCourses' options={{ headerShown: true, headerTitle: "كورساتي",
        drawerLabel: "كورساتي" }} />
        <Drawer.Screen component={ProfileScreen} name='Profile' options={{ headerShown: true, headerTitle: "الملف الشخصي",
        drawerLabel: "الملف الشخصي" }}  />
        <Drawer.Screen component={CoursesView} name='FreeCourses' initialParams={{ category: "free" }} options={{ headerShown: true,
          drawerLabel: "الكورسات المجانية", headerTitle: "الكورسات المجانية" }}  />
        <Drawer.Screen component={CoursesView} name='PaidCourses' initialParams={{ category: "paid" }} options={{ headerShown: true,
          drawerLabel: "الكورسات المدفوعة", headerTitle: "الكورسات المدفوعة" }}  />
        <Drawer.Screen component={CourseDetails} name='CourseDetails' options={{ headerShown: true,
           headerTitle: "بيانات الكورس", drawerLabel: "بيانات الكورس" }}  />
           <Drawer.Screen component={CourseBuy} name='CourseBuy' options={{ headerShown: true,
           headerTitle: "شراء الكورس"}}  />
           <Drawer.Screen component={CourseLessons} name='CourseLessons' options={{ headerShown: true,
           headerTitle: "دروس الكورس"}}  />
           <Drawer.Screen component={LessonScroll} name='LessonScroll' options={{ headerShown: true,
           headerTitle: "lessons"}}  />
           
     
      </Drawer.Navigator>

    </NavigationContainer>
    </>
  );
}