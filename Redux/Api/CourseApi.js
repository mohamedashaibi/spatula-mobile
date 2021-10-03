import axios from '../../axios';

const url = "/courses"

export const AddCourse = (id) => axios.get(url + "/addFreeCourse/" + id);
export const GetUserCourses = () => axios.get(url+"/usercourses")
export const GetFreeCourses = () => axios.get(url + "/freecourses")
export const GetPaidCourses = () => axios.get(url + "/paidcourses")
export const GetCourse = (id) => axios.get(url + '/' + id)