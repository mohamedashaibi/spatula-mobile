import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { GetCourse } from '../../../Redux/Actions/Courses/actions';

function CourseBuy(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetCourse(props.route.params.id))
    }, [])

    const state = useSelector(state => state.courses)
    return (
        <View>
            <Text>
            {state.course.name}
            </Text>
        </View>
    )
}

export default CourseBuy
