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
const getDetailPhuongCallAPI = (id) => {
  return myAxios.get(`api/layphuongtheoid?id=${id}`);
}
const editPhuongCallAPI = (id, tenPhuong, idQuan, trangThai) => {
  return myAxios.put(`api/capnhatphuong?id=${id}&tenPhuong=${tenPhuong}&idQuan=${idQuan}`)
}





// export { multiple };
export { getAllKhuVucApi, addnewQuan, layQuanTheoId, editQuan, editQuankhonghinh,getDetailPhuongCallAPI, editPhuongCallAPI};
