import { myAxios } from "../my-axios";

const getAllMotelRoomOwnerAuthenticationCallAPI = () => {
    return myAxios.get("api/xacthucchutro/all");
}
const checkAccountAPI = (username, password) => {
    return myAxios.get(`api/taikhoan/dangnhap?tenTaiKhoan=${username}&matKhau=${password}`);
}
const getAllYeuCauDangKyDichVuAPI = () => {
    return myAxios.get("api/yeucaudangky/all");
}
const layThongTinChiTietYeuCauXacThucAPI = (idChuTro) => {
    return myAxios.get(`api/xacthucchutro/chitiet?idChuTro=${idChuTro}`);
}
const checkUsernameAPI = (username) => {
    return myAxios.get(`api/checkuser?tenTaiKhoan=${username}`);
}
const guiCodeLayLaiMatKhau = (email, idTaiKhoan) => {
    return myAxios.post(`api/forgotpassword?idTaiKhoan=${idTaiKhoan}&email=${email}`);
}
const checkcode = (idTaiKhoan, code, password) => {
    return myAxios.post(`api/checkcode?idTaiKhoan=${idTaiKhoan}&code=${code}&matKhau=${password}`);
}
// export { multiple };
export {
    getAllMotelRoomOwnerAuthenticationCallAPI,
    checkAccountAPI,
    getAllYeuCauDangKyDichVuAPI,
    layThongTinChiTietYeuCauXacThucAPI,
    checkUsernameAPI,
    guiCodeLayLaiMatKhau,
    checkcode
};