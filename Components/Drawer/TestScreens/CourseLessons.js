import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import { GetCourse, GetCourseLessons } from '../../../Redux/Actions/Courses/actions';
import LessonCard from './LessonCard';
import { ActivityIndicator } from 'react-native-paper';

function CourseLessons(props) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Id in course lessons = " + props.route.params.id)
        dispatch(GetCourse(props.route.params.id))
        dispatch(GetCourseLessons(props.route.params.id))
    }, [])

    const state = useSelector(state=>state.courses)

    return (
        <View style={{ flex: 4 }}>
            {state.course==null?<ActivityIndicator size="large" color="cyan" style={{ alignSelf: 'center', transform:[{scale:2}], marginTop: 150, width: 200, height: 200}}/>:
            <>
            <Image source={{ uri: `https://test.cfdc.ly/images/courses/${state.course.id}/${state.course.picture}` }} 
            style={{flex:1, resizeMode: 'contain', alignSelf:'center', width: Dimensions.get('screen').width, height: 200}}/>
            <View style={{ flex:1 }}>
            <Text style={{ fontSize: 30, fontFamily: 'Sukarblack', paddingRight: 20 }}>الوصف</Text>
            <Text style={{ paddingRight: 20, fontSize: 20 }}>{state.course.description}</Text>    
            </View>
            <View style={{ flex: 2 }}>
            <ScrollView style={{ flex:2.5, alignContent: 'flex-start' }}>
            {state.lessons[0]==null?<Image source={require('../../../assets/images/spatulapng.png')} resizeMode={'contain'} style={{ width: Dimensions.get('screen').width, height: 300 }}/>: state.lessons.map((element, index)=>{
                return <LessonCard lesson={element} key={index} {...props}/>;
            })}
            </ScrollView>
            </View>
            </>
            }
        </View>
    )
}

export default CourseLessons
