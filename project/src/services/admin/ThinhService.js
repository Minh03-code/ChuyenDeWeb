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
const getDetailThongBaoCallAPI = (id) => {
  return myAxios.get(`api/thongbao/chitiet?id=${id}`)
}
const getNguoiGui = (idTaiKhoan) => {
  return myAxios.get(`api/chutro/chitiet?idTaiKhoan=${idTaiKhoan}`);
}
const getAllGoiDangKyCallAPI = () => {
  return myAxios.get("api/yeucaudangky/all");
}


// export { multiple };
export { getAllKhuVucApi, addnewQuan, getDetailThongBaoCallAPI, getNguoiGui, getAllGoiDangKyCallAPI};
