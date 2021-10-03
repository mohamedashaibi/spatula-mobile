import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Copyright() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                جميع الحقوق محفوظة لحنان العابد
            </Text>
            <Text style={styles.text}>All rights Reserved | Hanan Alabed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display: 'flex',
    },
    text: {
        fontFamily: 'Amiri-Bold',  
        textAlign: 'center',
        color: "black"
    }
});

export default Copyright
