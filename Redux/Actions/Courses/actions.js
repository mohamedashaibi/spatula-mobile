import { GET_COURSE, GET_COURSES, COURSE_ERROR, CLEAR_COURSES, GET_ALL_COURSES, IS_LOADING, ADD_COURSE, GET_LESSONS, GET_LESSON } from './action-types'
import * as api from '../../Api/CourseApi'
import store from '../../store'
import * as LessonApi from '../../Api/LessonApi.'

export const AddCourse = (id, is_paid) => async(dispatch) =>{
   if(store.getState().courses.course.cost == 0){
       try{
       const {data} = await api.AddCourse(store.getState().courses.course.id);

       dispatch({type: ADD_COURSE, payload: {...data}})
       }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
       }
   }else{
       console.log("Paid")
   }
}

export const GetUserCourses = () => async(dispatch)=>{
    try{
        dispatch({type: IS_LOADING});
        const {data} = await api.GetUserCourses();
        dispatch({type: GET_ALL_COURSES, payload: [...data]})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetFreeCourses = () => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING});

        const {data} = await api.GetFreeCourses()

        dispatch({type: GET_COURSES, payload: [...data]})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetPaidCourses = () => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING});

        const {data} = await api.GetPaidCourses()

        dispatch({type: GET_COURSES, payload: data})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
        
    }
}

export const GetCourse = (id) => async(dispatch) => {
    try{
        const {data} = await api.GetCourse(id)

        dispatch({type: GET_COURSE, payload:{...data}})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetCourseLessons = (id) => async(dispatch) => {
try{
    const { data } = await LessonApi.GetCourseLessons(id)

    dispatch({type: GET_LESSONS, payload: [...data]});

}catch(error){
    dispatch({type: COURSE_ERROR, payload: {error}})

}
}

export const GetLesson = (id) => async(dispatch) => {
    try{
        const { data } = await LessonApi.GetLesson(id)
    
        console.log("In get lesson action lesson = " +JSON.stringify(data))
        dispatch({type: GET_LESSON, payload: {...data}});
    
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    
    }
    }

export const ClearCourses = () => async(dispatch) => {
    dispatch({type: CLEAR_COURSES})
} 

