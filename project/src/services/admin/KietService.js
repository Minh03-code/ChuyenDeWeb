import { myAxios } from "../my-axios";

const getAllMotelRoomOwnerCallAPI = () => {
    return myAxios.get("api/chutro/daxacthuc");
}
const getAllServiceCallAPI = () => {
    return myAxios.get("api/goi/all");
}
const getDetailServiceCallAPI = (id) => {
    return myAxios.get(`api/goi/chitiet?id=${id}`);
}
const lockServiceCallAPI = (id) => {
    return myAxios.get(`api/goi/lock?id=${id}`);
}
const unLockServiceCallAPI = (id) => {
    return myAxios.get(`api/goi/unLock?id=${id}`);
}
const editServiceCallAPI = (id, thoiHan, soLuongPhongToiDa, gia) => {
    return myAxios.put(`api/goi/update?id=${id}&thoiHan=${thoiHan}&soLuongPhongToiDa=${soLuongPhongToiDa}&gia=${gia}`)
}
const addServiceCallAPI = (thoiHan, soLuongPhongToiDa, gia) => {
    return myAxios.post(`api/goi/add?thoiHan=${thoiHan}&soLuongPhongToiDa=${soLuongPhongToiDa}&gia=${gia}`)
}
const getDetailMotelRoomOwnerCallAPI = (idTaiKhoan) => {
    return myAxios.get(`api/chutro/chitiet?idTaiKhoan=${idTaiKhoan}`)
}
const capNhatTrangThaiMotelRoomOwnerCallAPI = (id) => {
    return myAxios.patch(`api/capnhattrangthai?id=${id}`)
}
const getListThongBaoByIdCallAPI = (idChuTro) => {
    return myAxios.get(`api/thongbao/all?idTaiKhoanNhan=${idChuTro}`)
}
const getListNguoiThueTheoIdPhongCallAPI = (idPhong) => {
    return myAxios.get(`api/phongnguoithue/all?idPhong=${idPhong}`)
}
const getChiTietnguoiThueCallAPI = (id) => {
    return myAxios.get(`api/nguoithue/chitiet?id=${id}`)
}
const getChiTietTaiKhoanTheoIdCallAPI = (id) => {
    return myAxios.get(`api/taikhoan?id=${id}`)
}
// export { multiple };
export { getAllMotelRoomOwnerCallAPI, getAllServiceCallAPI, getDetailServiceCallAPI, lockServiceCallAPI, unLockServiceCallAPI, editServiceCallAPI, addServiceCallAPI, getDetailMotelRoomOwnerCallAPI, capNhatTrangThaiMotelRoomOwnerCallAPI, getListThongBaoByIdCallAPI, getListNguoiThueTheoIdPhongCallAPI, getChiTietnguoiThueCallAPI, getChiTietTaiKhoanTheoIdCallAPI };