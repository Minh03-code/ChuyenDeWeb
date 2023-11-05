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
// export { multiple };
export { getAllMotelRoomOwnerCallAPI, getAllServiceCallAPI, getDetailServiceCallAPI, lockServiceCallAPI, unLockServiceCallAPI, editServiceCallAPI, addServiceCallAPI };