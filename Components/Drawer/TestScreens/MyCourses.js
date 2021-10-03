import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image } from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserCourses } from '../../../Redux/Actions/Courses/actions';
import CarouselCards from '../../Carousel/CarouselCards';
import MyCourseCard from './MyCourseCard';

export default function MyCourses(props) {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(GetUserCourses());
    }, [])
    const state = useSelector(state => state.courses)

    return (
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ flex:1 }}>
        <CarouselCards styles={{padding: 50}}/>
        </View>
        <View style={{ flex: 3 }}>
        <ScrollView>
        {state.isLoading?<ActivityIndicator size="large" color="cyan" style={{ alignSelf: 'center', transform:[{scale:2}], marginTop: 150, width: 200, height: 200}}/>:
          state.usercourses.map((element, index)=>{
            return <MyCourseCard key={index} course={element} {...props}/>
                    })}
        </ScrollView>
        </View>
      </View>
    );
  }