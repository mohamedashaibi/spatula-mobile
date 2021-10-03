import axios from 'axios'
import store from './Redux/store'

const instance = axios.create(
{
    baseURL: "https://test.cfdc.ly/api",
   
}
);

instance.interceptors.request.use(request => {
    request.headers.Authorization = "Bearer " + store.getState().auth.auth.token;
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })
  
  instance.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
  })

export default instance;