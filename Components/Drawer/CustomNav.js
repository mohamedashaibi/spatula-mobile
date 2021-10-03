import { DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'

function CustomNav(props) {
    return (
        <View>
            {console.log(JSON.stringify(props))}
            <DrawerItem label="ok" onPress={()=>props.navigation.navigate("FreeCourses")}/>
        </View>
    )
}

export default CustomNav
