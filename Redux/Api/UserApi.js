import axios from '../../axios';

const url = "/Account";

export const Register = (token) => axios.post(`${url}/facebookregister?accessToken=${token}`);

export const Login = (token) => axios.get(`${url}/facebooklogin?accessToken=${token}`)