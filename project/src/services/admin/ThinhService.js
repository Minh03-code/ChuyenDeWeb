import { myAxios } from "../my-axios";

const getAllKhuVucApi = () => {
  return myAxios.get("api/laytatcaquan");
};
const config = {
  headers: { 'content-type': 'multipart/form-data' }
}
const addnewQuan = (tenQuan, hinh) => {
  return myAxios.post(`api/themquan`, { tenQuan: tenQuan, hinh: hinh }, config);
}

// export { multiple };
export { getAllKhuVucApi, addnewQuan };
