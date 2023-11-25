import axios from "axios";
const baseURL = "http://127.0.0.1:8000/";
const myAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000*120,
});
// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return alert("Yêu cầu quá hạn \nKiểm tra kết nối mạng"+error);
  console.log(error);
  // return Promise.reject(error);
});
export { myAxios, baseURL };