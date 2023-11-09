import { myAxios } from "../my-axios";

const getAllKhuVucApi = () => {
  return myAxios.get("api/laytatcaquan");
};
const addQuanCallAPI = (tenQuan, image) => {
  return myAxios.post(`api/themquan?tenQuan=${tenQuan}&image=${image}`)
}
// export { multiple };
export { getAllKhuVucApi , addQuanCallAPI};
