import { LOGIN, LOGOUT, AUTHERROR } from './action-types'
import * as api from '../../Api/UserApi'


export const Login = (token) => async(dispatch) => {
    try{
        const{data} = await api.Login(token)

        dispatch({type: LOGIN, payload: { ...data }})
    }
    catch(error){
        dispatch({type: AUTHERROR, payload: {error}})
    }
}

export const Register = (token) => async(dispatch) => {
    try{
        const {data} = await api.Register(token)

        dispatch({type: LOGIN, payload: data})
    }catch(error){
        dispatch({type: AUTHERROR, payload: {error}})
        
    }
}

export const Logout = () => async(dispatch) => {
    dispatch({type: LOGOUT})
}
