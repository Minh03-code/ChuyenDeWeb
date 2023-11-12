import {myAxios} from "../my-axios";

const getAllMotelRoomOwnerAuthenticationCallAPI = () => {
    return myAxios.get("api/xacthucchutro/all");
}
const checkAccountAPI = (username, password) => {
    return myAxios.get(`api/kiemtradangnhap?tenTaiKhoan=${username}&matKhau=${password}`);
}
const getAllYeuCauDangKyDichVuAPI = () => {
    return myAxios.get("api/yeucaudangky/all");
}
const layThongTinChiTietYeuCauXacThucAPI = (idChuTro) => {
    return myAxios.get(`api/xacthucchutro/chitiet?idChuTro=${idChuTro}`);
}
// export { multiple };
export {getAllMotelRoomOwnerAuthenticationCallAPI, checkAccountAPI, getAllYeuCauDangKyDichVuAPI, layThongTinChiTietYeuCauXacThucAPI};