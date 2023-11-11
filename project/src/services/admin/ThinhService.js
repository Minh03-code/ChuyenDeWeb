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
const layQuanTheoId = (id) => {
  return myAxios.get(`api/layquantheoid?id=${id}`);
};
const editQuan = (id, tenQuan, hinh, trangThai) => {
  return myAxios.post(`api/capnhatquan`, { id, tenQuan: tenQuan, hinh: hinh, trangThai: trangThai }, config);
}
const editQuankhonghinh = (id, tenQuan, trangThai) => {
  return myAxios.post(`api/capnhatquan`, { id, tenQuan: tenQuan, trangThai: trangThai }, config);
}


// export { multiple };
export { getAllKhuVucApi, addnewQuan, layQuanTheoId, editQuan, editQuankhonghinh };
