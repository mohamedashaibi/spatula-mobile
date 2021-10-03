import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GetFreeCourses, GetPaidCourses } from '../../../Redux/Actions/Courses/actions';
import CarouselCards from '../../Carousel/CarouselCards';
import CourseCard from './CourseCard';

export default function CoursesView(props) {

    const dispatch = useDispatch()

    useEffect(()=>{
      const unsubscribe = props.navigation.addListener('focus', () => {
        
        if(props.route.params.category == "free"){
        dispatch(GetFreeCourses())
        
        }else if(props.route.params.category == "paid"){
          dispatch(GetPaidCourses())
        }

      });

   return unsubscribe;
    }, [props.navigation]);

    const selector = useSelector(state=>state.courses)

    return (
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ flex:0.4 }}>
        <CarouselCards styles={{padding: 50}}/>
        </View>
        <ScrollView style={{ flex: 3.6 }}>
        
        

        {selector.isLoading==true? <ActivityIndicator size="large" color="cyan" style={{ alignSelf: 'center', transform:[{scale:2}], marginTop: 150, width: 200, height: 200}}/>: 
        selector.allcourses.map((element, index)=>{
          return <>
          <CourseCard key={index} course={element} {...props}/>
          </>
        })}
     
        </ScrollView>
      </View>
    );
  }