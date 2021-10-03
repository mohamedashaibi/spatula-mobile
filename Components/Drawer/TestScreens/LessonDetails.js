import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Video from 'react-native-video'

function LessonDetails(props) {
    const lesson = props.lesson
    return (
        <View style={{   flex: 5 }}>
            <View style={{ alignItems: 'center', flex: 1.5, backgroundColor: 'green' }}>
            <Video source={{ uri: lesson.videoUrl}} controls={true} 
            style={{ width: Dimensions.get('screen').width, height: 300 }} resizeMode={'cover'} fullscreen={true} >
            </Video>
                
            </View>
            <View style={{ backgroundColor: 'purple', flex: 3.5 }}>
                
            <Text style={{ color: 'red' }}>{lesson.arabicName}</Text>
            <Text style={{ color: 'red' }}>{lesson.description}</Text>
            <Text style={{ color: 'red' }}>{lesson.ingredients}</Text>
           </View>
        </View>
    )
}

export default LessonDetails
