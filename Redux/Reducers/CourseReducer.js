import { COURSE_ERROR, GET_ALL_COURSES, GET_COURSE, GET_COURSES, CLEAR_COURSES, IS_LOADING, ADD_COURSE, GET_LESSONS, GET_LESSON } from "../Actions/Courses/action-types"

const initialState = {
    allcourses: [],
    usercourses: [],
    course:{},
    error:{},
    lessons: [],
    lesson: {},
    isLoading: true
}

export const CourseReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case IS_LOADING:
            return ({...state, isLoading: true})
        case GET_ALL_COURSES:
            return({...state, usercourses: [...payload], isLoading: false})
        case ADD_COURSE:
            return({...state, course: [...payload], isLoading: false})    
        case GET_COURSES:
            return({...state, allcourses: [...payload], isLoading: false})
        case GET_COURSE:
            return({...state, course: {...payload}, isLoading: false})
        case CLEAR_COURSES:
            return({...state, allcourses: [], course: {}, isLoading: false})
        case GET_LESSONS:
            return ({...state, lessons: [...payload], isLoading: false, });    
        case GET_LESSON:
            return ({...state, lesson: {...payload}, isLoading: false, });        
        case COURSE_ERROR:
            return({...state, error: {error}, isLoading: false})

        default:
        return state

    }
}