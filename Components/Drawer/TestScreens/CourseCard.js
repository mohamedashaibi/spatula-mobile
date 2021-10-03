import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'

function CourseCard(props) {

    // {"course":{"id":1,"name":"كورس الحلويات الشرقية",
    //"picture":"pic2","cost":0,"description":"d,fjbvwkunskrufw",
    //"featured":true,"status":true}
    const course = props.course

    useEffect(() => {
    }, [])

    return (
        <TouchableOpacity style={styles.courseCard} 
       
        style={{ display: 'flex', flexDirection:'row-reverse', alignContent: 'center', backgroundColor: "#dddddd", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            <Image source={require("../../../assets/images/spatulapng.png")} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            <View style={styles.view} style={{ display: 'flex', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontFamily: 'Sukarblack' }}>
                    {course.name}
                </Text>
                <Text style={{ textAlign: 'right' }}>
                    .....{course.description.substring(0, 10)}
                </Text>
            </View>
            {props.route.params.category=="free"?
            <Button 
             onPress={()=>props.navigation.navigate("CourseDetails", {"id": course.id} )}
            style={{ backgroundColor: 'pink', height: 40, position: 'absolute', bottom: 10, right: 10, borderRadius: 10 }}><Text style={{ fontFamily: 'Sukarblack' }}>عرض المزيد </Text></Button>
            :
            <Button 
             onPress={()=>props.navigation.navigate("CourseBuy", {"id": course.id} )}
            style={{ backgroundColor: 'pink', height: 40, position: 'absolute', bottom: 10, right: 10, borderRadius: 10 }}><Text style={{ fontFamily: 'Sukarblack' }}>شراء </Text></Button>
            }
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

export default CourseCard
