import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'

function LessonCard(props) {

    const lesson = props.lesson;

    return (
    
        <TouchableOpacity style={styles.courseCard} 
        onPress={()=>props.navigation.navigate("LessonScroll", {"id": lesson.id, "props": props})}
        style={{ display: 'flex', flexDirection:'row-reverse', alignContent: 'center', backgroundColor: "#dddddd", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            {console.log("in lesson card id = " + JSON.stringify(lesson))}
            <Image source={require("../../../assets/images/spatulapng.png")} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            <View style={styles.view} style={{ display: 'flex', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontFamily: 'Sukarblack' }}>
                    {lesson.arabicName}
                </Text>
                <Text style={{ textAlign: 'right' }}>
                    .....{lesson.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    courseCard:{

    },
    courseName:{
        fontFamily: 'Sukarblack'
    },
    courseDesc:{

    },
    view:{

    }
})

export default LessonCard