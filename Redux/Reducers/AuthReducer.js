import { LOGOUT, LOGIN, SIGNUP, CLEAR_ERRORS, AUTHERROR } from "../Actions/Auth/action-types"

const initialState = {
    auth: {
        token: "",
        user: {},
        facebookUser:{}
    },
    error:{}
}

export const AuthReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case LOGIN:
            return({...state, auth: {...payload}, error:{}})
        case SIGNUP:
            return({...state, auth: {...payload}, error:{}})    
        case LOGOUT:
            return({...state, auth:{token:"", user:{}, facebookUser:{}}, error:{}})
        case AUTHERROR:
            return({...state, error: {...payload}, auth:{token:"", user:{}}})
        case CLEAR_ERRORS:
            return({...state, error: {}})
        default:
        return state

    }
}