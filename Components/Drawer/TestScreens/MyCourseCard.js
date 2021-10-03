import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'

function MyCourseCard(props) {

    const course = props.course

    return (
        <TouchableOpacity style={styles.MyCourseCard} 
        style={{ display: 'flex', flexDirection:'row-reverse', alignContent: 'center', backgroundColor: "#dddddd", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            <Image source={require("../../../assets/images/spatulapng.png")} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            <View style={styles.view} style={{ display: 'flex', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontFamily: 'Sukarblack' }}>
                    {course.name}
                </Text>
                <Text style={{ textAlign: 'right' }}>
                    .....{course.description}
                </Text>
            </View>
           
            <Button 
             onPress={()=>props.navigation.navigate("CourseLessons", {"id": course.courseId} )}
            style={{ backgroundColor: 'pink', height: 40, position: 'absolute', bottom: 10, right: 10, borderRadius: 10 }}><Text style={{ fontFamily: 'Sukarblack' }}>الانتقال الى الكورس </Text></Button>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    MyCourseCard:{

    },
    courseName:{
        fontFamily: 'Sukarblack'
    },
    courseDesc:{

    },
    view:{

    }
})

export default MyCourseCard
