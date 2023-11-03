import axios from "axios";

const baseURL = "http://192.168.226.1/3t/laravel/public/";
const myAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 60,
});
// Add a response interceptor
myAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("check data: ", response.data);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { myAxios, baseURL };
