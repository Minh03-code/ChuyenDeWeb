import axios from "axios";
const myAxios = axios.create({
  baseURL: 'http://192.168.190.1:8080/3t/laravel/public/',
  timeout: 1000*60,
});
// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
export default myAxios;